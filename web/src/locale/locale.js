import i18n from 'i18next';

const locales = {
	'en': 'en',
	'en-US': 'en',
	'zh-CN': 'zh-CN',
};
const lang = navigator.language && navigator.language.length ? navigator.language : 'en';
const locale = locales[lang] || 'en';

let resources = {};
for (const locale in locales) {
	resources[locale] = {
		translation: require(`./${locales[locale]}.json`),
	};
}

i18n.init({
	lng: lang,
	fallbackLng: 'en',
	initImmediate: true,
	resources
});

function getLang() {
	return lang;
}
function getLocale() {
	return locale;
}

export { getLang, getLocale };
export default i18n;