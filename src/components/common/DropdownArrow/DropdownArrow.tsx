import classNames from "classnames";
import React, {FC} from "react";
import classes from "./DropdownArrow.module.scss";

interface IProps {
    isActiveDropdown: boolean
}
const DropdownArrow:FC<IProps> = ({isActiveDropdown = false}) => {
    return (
        <div className={classNames({
            [classes.DropdownArrow]: true,
            [classes.DropdownArrow_active]: isActiveDropdown
        })}/>
    )
}

export default DropdownArrow;