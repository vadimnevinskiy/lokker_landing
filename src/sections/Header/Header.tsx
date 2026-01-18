import classes from "./Header.module.scss";
import classNames from "classnames";
import {LanguageSelector, Logo, Menu} from "../../components";
import React, {FC} from "react";

interface IProps {
    is_display_menu?: boolean
}
const Header:FC<IProps> = ({is_display_menu = true}) => {
    return (
        <div className={classNames({
            [classes.Header]: true
        })}>
            <div className={classes.Header__Logo}><Logo is_animated={true} size={"medium"}/></div>
            {
                is_display_menu &&
                <div className={classes.Header__Menu}><Menu/></div>
            }
            <div className={classes.Header__LanguageSelector}><LanguageSelector/></div>
        </div>
    )
}

export default Header;