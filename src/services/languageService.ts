import ru from "../i18n/ru.json";
import en from "../i18n/en.json";
import es from "../i18n/es.json";
import de from "../i18n/de.json";

import {store} from "../store";
import {setLanguage} from "../store/reducers/mainSlice";
import {ITranslationType} from "../types/translationType";
import {CONST_LANGUAGE_FIELD_AT_LOCALSTORAGE, CONST_LANGUAGES} from "../constants";
import {LangType} from "../types";


const supportedLanguages: Record<LangType, ITranslationType> = {
    ru,
    en,
    es,
    de
};

const getLanguage = () => {
    const languageFromStorage = localStorage.getItem(CONST_LANGUAGE_FIELD_AT_LOCALSTORAGE);
    let selected_language: LangType;

    if (languageFromStorage === CONST_LANGUAGES.RU || languageFromStorage === CONST_LANGUAGES.EN || languageFromStorage === CONST_LANGUAGES.ES || languageFromStorage === CONST_LANGUAGES.DE) {
        selected_language = languageFromStorage;
    } else {
        selected_language = CONST_LANGUAGES.RU // Default language
        localStorage.setItem(CONST_LANGUAGE_FIELD_AT_LOCALSTORAGE, selected_language);
    }

    store.dispatch(setLanguage(selected_language));
}

const updateLanguage = (selected_language: LangType) => {
    localStorage.setItem(CONST_LANGUAGE_FIELD_AT_LOCALSTORAGE, selected_language);
    store.dispatch(setLanguage(selected_language));
}

const getContentByLanguage = (selected_language: LangType) => {
    return supportedLanguages[selected_language] || supportedLanguages[CONST_LANGUAGES.RU];
}


interface IService {
    getLanguage: () => void;
    updateLanguage: (selected_language: LangType) => void;
    getContentByLanguage: (selected_language: LangType) => ITranslationType
}

const LanguageService: IService = {
    getLanguage,
    updateLanguage,
    getContentByLanguage
};

export default LanguageService;