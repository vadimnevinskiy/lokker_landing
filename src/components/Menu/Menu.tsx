import classNames from "classnames";
import classes from "./Menu.module.scss";
import {shallowEqual, useSelector} from "react-redux";
import {enabledDownloadButtons, selectLanguage} from "../../store/selectors/mainSelectors";
import LanguageService from "../../services/languageService";
import {Dropdown} from "../index";
import React, {useState} from "react";
import {GradientBorder, MenuItem} from "../common";
import {CONST_APPLICATION_DATA} from "../../constants";
import {ITranslationType} from "../../types/translationType";


const Menu = () => {
    const language = useSelector(selectLanguage, shallowEqual)
    const enabledDownload = useSelector(enabledDownloadButtons, shallowEqual)
    const content: ITranslationType = LanguageService.getContentByLanguage(language);
    const [isActiveDropdown, setIsActiveDropdown] = useState<boolean>(false)

    const dropdownActivation = () => {
        setIsActiveDropdown(!isActiveDropdown)
    }

    return (
        <div className={classNames("Menu", {
            [classes.MenuWrapper]: true
        })}>
            <GradientBorder is_animation={true} is_glowing={true}>
                <div className={classNames("Menu", {
                    [classes.MenuWrapper__Menu]: true
                })}>
                    {
                        content.menu.map(menu_item => {
                            return (
                                <MenuItem
                                    key={menu_item.id}
                                    item={menu_item}
                                    dropdownActivation={dropdownActivation}
                                    isActiveDropdown={isActiveDropdown}
                                >
                                    {
                                        menu_item.id === "download" &&
                                        <Dropdown is_active={isActiveDropdown}
                                                  title={content.download_menu.block_title}>
                                            <ul>
                                                {
                                                    content.download_menu.links.map((menu_item, index) => {
                                                        let url = ""
                                                        switch (menu_item.name) {
                                                            case "Windows":
                                                                url = CONST_APPLICATION_DATA.WINDOWS_INSTALLER;
                                                                break;
                                                        }
                                                        return (
                                                            <li key={index}>
                                                                {
                                                                    enabledDownload ?
                                                                        <a href={url}>{menu_item.name}</a>
                                                                        : <span>{menu_item.name}</span>
                                                                }

                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </Dropdown>
                                    }
                                </MenuItem>
                            )
                        })
                    }

                </div>
            </GradientBorder>
        </div>
    )
}

export default Menu;