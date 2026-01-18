import {CONST_LANGUAGES} from "../constants";

export type LangType = typeof CONST_LANGUAGES[keyof typeof CONST_LANGUAGES];

export interface IMenuItem {
    title: string,
    id: string
}

export interface IContentBlockSecurity {
    "icon": string,
    "title": string,
    "announcement": string,
    "description": string
}

export interface IContactLinks {
    "icon": string,
    "label": string,
    "url": string
}

export interface IDownload_menu {
    "block_title": string,
    "links": { "name": string, "url": string }[]
}


export interface ISlogan {
    "app_name": string,
    "app_title": string,
    "keywords": string[]
}

export interface IFeatureCard {
    "icon": string,
    "title": string,
    "description": string
}

export interface ISecurityCard {
    "icon": string,
    "title": string,
    "subtitle": string,
    "description": string
    "tags": string[]
}

export interface IContactsLink {
    "icon": string,
    "name": string,
    "url": string
}
export interface IlLink {
    url: string,
    title: string
}

export interface ISecurityDetailBlock {
    "icon": string,
    "title": string,
    "subtitle": string,
    "description": string,
    "features": string[]
}
export interface ISecuritySlogan {
    "icon": string,
    "text": string
}