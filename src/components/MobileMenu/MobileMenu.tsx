import classNames from "classnames";
import classes from "./MobileMenu.module.scss";
import {BurgerButton, MenuItem} from "../common";
import React, {useState} from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {isActiveMobileMenu, selectLanguage} from "../../store/selectors/mainSelectors";
import {ITranslationType} from "../../types/translationType";
import LanguageService from "../../services/languageService";
import {Dropdown, LanguageSelector, Logo} from "../index";
import {setIsActiveMobileMenu} from "../../store/reducers/mainSlice";

const MobileMenu = () => {
    const language = useSelector(selectLanguage, shallowEqual)
    const content: ITranslationType = LanguageService.getContentByLanguage(language);
    const showMobileMenu = useSelector(isActiveMobileMenu, shallowEqual)
    const [isActiveDropdown, setIsActiveDropdown] = useState<boolean>(false)

    const dropdownActivation = () => {
        setIsActiveDropdown(!isActiveDropdown)
    }


    const dispatch = useDispatch()
    const openMobileMenu = () => {
        dispatch(setIsActiveMobileMenu(!showMobileMenu))
    }


    return (
        <div className={classNames({
            [classes.MobileMenu]: true
        })}>

            <BurgerButton is_active={showMobileMenu} toggleMenu={openMobileMenu}/>
            <div className={classNames({
                [classes.MobileMenu__Menu]: true,
                [classes.MobileMenu__Menu_active]: showMobileMenu
            })}>
                <div className={classNames(classes.MobileMenu__Menu__Logo)}>
                    <Logo/>
                </div>
                <div className={classNames(classes.MobileMenu__Menu__LanguageSelector)}>
                    <LanguageSelector/>
                </div>
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
                                    <Dropdown
                                        is_active={isActiveDropdown}
                                        title={content.download_menu.block_title}
                                        variant={'mobile'}
                                    >
                                        <ul>
                                            {
                                                content.download_menu.links.map((menu_item, index) => {
                                                    return (
                                                        <li key={index}>
                                                            <a href={menu_item.url}>{menu_item.name}</a>
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


        </div>
    )
}

export default MobileMenu;