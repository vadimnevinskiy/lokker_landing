import {RootState} from "../index";

export const selectLanguage = (state: RootState): "ru" | "en" | "es" | "de" => state.main.language
export const isActiveMobileMenu = (state: RootState): boolean => state.main.isActiveMobileMenu
export const userPlatform = (state: RootState): string | null => state.main.userPlatform
export const enabledDownloadButtons = (state: RootState): boolean => state.main.enabledDownloadButtons