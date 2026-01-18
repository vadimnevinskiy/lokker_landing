import classNames from "classnames";
import classes from "./LanguageSelector.module.scss";
import {Dropdown} from "../index";
import React, {useState} from "react";
import {shallowEqual, useSelector} from "react-redux";
import {selectLanguage} from "../../store/selectors/mainSelectors";
import {ITranslationType} from "../../types/translationType";
import LanguageService from "../../services/languageService";
import {DropdownArrow, GradientBorder, WorldAnimation} from "../common";
import {LangType} from "../../types";


const LanguageSelector = () => {
    const language = useSelector(selectLanguage, shallowEqual)
    const content: ITranslationType = LanguageService.getContentByLanguage(language);
    const [isActiveDropdown, setIsActiveDropdown] = useState<boolean>(false)

    const dropdownActivation = () => {
        setIsActiveDropdown(!isActiveDropdown)
    }

    const changeLanguage = (lang: LangType) => {
        console.log(lang)
        LanguageService.updateLanguage(lang)
        setIsActiveDropdown(false)
    }

    return (
        <div className={classNames({
            [classes.LanguageSelectorWrapper]: true,
        })}>
            <GradientBorder is_animation={true} is_glowing={true} speed={14}>
                <div className={classNames({
                    [classes.LanguageSelectorWrapper__LanguageSelector]: true,
                })}>
                    <div className={classNames({
                        [classes.LanguageSelectorWrapper__LanguageSelector__btn]: true,
                    })} onClick={dropdownActivation}>
                        <div className={classNames({
                            [classes.LanguageSelectorWrapper__LanguageSelector__btn_content]: true,
                        })}>
                            {content.languages.find(lang => lang.id === language)?.short_title}
                        </div>
                        <WorldAnimation/>
                        <DropdownArrow isActiveDropdown={isActiveDropdown}/>
                    </div>
                    {/*<Dropdown is_active={isActiveDropdown}>*/}
                    {/*    <ul>*/}
                    {/*        {*/}
                    {/*            content.languages.map((language, index) => {*/}
                    {/*                return (*/}
                    {/*                    <li key={index}>*/}
                    {/*                        <div*/}
                    {/*                            onClick={() => changeLanguage(language.id as LangType)}>{language.title}</div>*/}
                    {/*                    </li>*/}
                    {/*                )*/}
                    {/*            })*/}
                    {/*        }*/}
                    {/*    </ul>*/}
                    {/*</Dropdown>*/}
                </div>
            </GradientBorder>


            <Dropdown is_active={isActiveDropdown}>
                <ul>
                    {
                        content.languages.map((language, index) => {
                            return (
                                <li key={index}>
                                    <div
                                        onClick={() => changeLanguage(language.id as LangType)}>{language.title}</div>
                                </li>
                            )
                        })
                    }
                </ul>
            </Dropdown>
        </div>
    )
}

export default LanguageSelector;