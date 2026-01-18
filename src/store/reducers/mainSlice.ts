import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface InitialState {
    language: "ru" | "en" | "es" | "de"
    isActiveMobileMenu: boolean
    userPlatform: string | null
    enabledDownloadButtons: boolean
}
const initialState: InitialState = {
    language: "en",
    isActiveMobileMenu: false,
    userPlatform: null,
    enabledDownloadButtons: false
}
export const mainSlice = createSlice({
    name: 'main',
    initialState: initialState,
    reducers: {
        setLanguage(state, action: PayloadAction<"ru"| "en" | "es" | "de">): void {
            state.language = action.payload
        },
        setIsActiveMobileMenu(state, action: PayloadAction<boolean>): void {
            state.isActiveMobileMenu = action.payload
        },
        setOSPlatform(state, action: PayloadAction<string>): void {
            state.userPlatform = action.payload
        },
        setEnabledDownloadButtons(state, action: PayloadAction<boolean>): void {
            state.enabledDownloadButtons = action.payload
        }
    }
})

export const {
    setLanguage,
    setIsActiveMobileMenu,
    setOSPlatform,
    setEnabledDownloadButtons
} = mainSlice.actions

export default mainSlice