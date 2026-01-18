import {
    IContactsLink,
    IDownload_menu,
    IFeatureCard,
    IlLink,
    IMenuItem,
    ISecurityCard, ISecurityDetailBlock,
    ISecuritySlogan,
    ISlogan,
    LangType
} from "./index";

export interface ITranslationType {
    "languages": { "title": string, "short_title": string, "id": string }[],
    "menu": IMenuItem[],
    "buttons": {
        "download_btn": string,
        "protect_btn": string,
        "install_btn": string,
        "connection_btn": string
    },
    "detail_link": IlLink,
    "back_link": IlLink,
    "download_menu": IDownload_menu,
    "home_section": {
        "id": string,
        "title": ISlogan,
        "slogan": string[],
        "description": string
    },
    "features_section": {
        "id": string,
        "title": string,
        "subtitle": string,
        "description": string,
        "cards": IFeatureCard[]
    },
    "security_section": {
        "id": string,
        "title": string,
        "subtitle": string,
        "description": string,
        "cards": ISecurityCard[]
    },
    "security_detail": {
        "title": string,
        "slogans": ISecuritySlogan[],
        "subtitle": string,
        "description": string,
        "blocks": ISecurityDetailBlock[]
    }
    "demo_section": {
        "id": string,
        "title": string,
        "subtitle": string,
    },
    "contacts_section": {
        "id": string,
        "question": string,
        "navigation_title": string,
        "contact_title": string,
        "links": IContactsLink[]
    }
    "benefits": string[]
}