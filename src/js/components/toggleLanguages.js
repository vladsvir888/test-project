import deLangData from '/src/assets/json/de.json';
import enLangData from '/src/assets/json/en.json';
import esLangData from '/src/assets/json/es.json';
import frLangData from '/src/assets/json/fr.json';
import jaLangData from '/src/assets/json/ja.json';
import ptLangData from '/src/assets/json/pt.json';

const data = {
    de: deLangData,
    en: enLangData,
    es: esLangData,
    fr: frLangData,
    ja: jaLangData,
    pt: ptLangData,
};

function getLangParam() {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');

    return langParam;
}

function getUserLanguage() {
    return window.navigator.language.split('-')[0];
}

function checkQueryParam() {
    return !!window.location.search;
}

function parseStringByRegex(string, text) {
    const regex = /\$\d+\.\d+/g;
    const match = text.match(regex) ? text.match(regex)[0] : null;

    if (!match) return text;

    return string.replace('{{price}}', match);
}

function changeLanguage(langData) {
    const elements = document.querySelectorAll('[data-id]');

    if (!elements.length) return;

    elements.forEach((element) => {
        if (element.hasAttribute('data-price')) {
            element.innerHTML = parseStringByRegex(langData[element.dataset.id], element.textContent);
        } else {
            element.innerHTML = langData[element.dataset.id];
        }
    });
}

function init() {
    const isQueryParam = checkQueryParam();
    let langCode = null;
    let langData = null;

    if (isQueryParam) {
        langCode = getLangParam();
    } else {
        langCode = getUserLanguage();
    }

    if (data[langCode]) {
        langData = data[langCode];
        document.documentElement.setAttribute('lang', langCode);
    } else {
        langData = data.en;
    }

    changeLanguage(langData);
}

init();
