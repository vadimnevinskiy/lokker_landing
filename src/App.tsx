import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LanguageService from "./services/languageService";
import {DetailPage, MainPage} from "./pages";
import {useDispatch} from "react-redux";
import {setEnabledDownloadButtons, setOSPlatform} from "./store/reducers/mainSlice";
import {osName} from "react-device-detect";

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setOSPlatform(osName))
        dispatch(setEnabledDownloadButtons(osName === "Windows"))
        LanguageService.getLanguage()
    }, [dispatch])

    return (
        <div className="App">
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/detail" element={<DetailPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
