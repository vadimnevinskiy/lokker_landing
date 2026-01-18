export const CONST_COLORS = {
    BRAND_COLOR_LEMON: '#E6FF2B'
}

export const CONST_LANGUAGES = {
    RU: 'ru',
    EN: 'en',
    ES: 'es',
    DE: 'de'
} as const;


const chars = {
    ru: "абвгдеёжзийклмнопрстуфхцчшщъыьэюя",
    en: "abcdefghijklmnopqrstuvwxyz",
    es: "abcdefghijklmnñopqrstuvwxyz",
    de: "aäbcdefghijklmnoöpqrsßtuüvwxyz"
};
const symbols = "!@#$%^&*()_+=-[]{};:,.<>/?";
export const CONST_CHARS = {
    RU: chars.ru.toUpperCase() + chars.ru + symbols,
    EN: chars.en.toUpperCase() + chars.en + symbols,
    ES: chars.es.toUpperCase() + chars.es + symbols,
    DE: chars.de.toUpperCase() + chars.de + symbols
};

export const CONST_LANGUAGE_FIELD_AT_LOCALSTORAGE: string = "lang"

export const CONST_APPLICATION_DATA = {
    DEVELOPER_NAME: "Vadim Nevinskiy",
    DEVELOPER_EMAIL: "nevinskiyvadim@gmail.com",
    WINDOWS_INSTALLER: "https://gitlab.com/vadim_nevinskiy/passwords/-/raw/main/dist/LokkerSetup.exe",
    TG_GROUP: "https://t.me/+v4X5ohXRyI1kMzEy",
    SOURCE_CODE: "https://gitlab.com/vadim_nevinskiy/passwords",
    DESIGNER_NAME: "innamay",
    DESIGNER_CONTACT: "parker_inna@ukr.net",
}