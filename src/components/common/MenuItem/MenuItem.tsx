import classNames from "classnames";
import classes from "./MenuItem.module.scss";
import {DropdownArrow} from "../index";
import React, {FC} from "react";

interface IProps {
    item: { title: string, id: string }
    dropdownActivation: () => void
    isActiveDropdown: boolean
    children?: React.ReactNode
}

const MenuItem: FC<IProps> = ({item, dropdownActivation, isActiveDropdown, children}) => {

    return (
        <div className={classNames({
            [classes.MenuItem]: true
        })}>
            {
                children ?
                    <div key={item.id} className={classNames({
                        [classes.MenuItem__DropdownItem]: true,
                    })} onClick={dropdownActivation}>
                        <div className={classNames({
                            [classes.MenuItem__DropdownItem__link]: true,
                        })}>
                            {item.title}
                            {item.id === 'download' && <DropdownArrow isActiveDropdown={isActiveDropdown}/>}
                        </div>
                        {children}
                    </div>
                    :
                    <a href={`#${item.id}`} key={item.id} className={classNames({
                        [classes.MenuItem__item]: true
                    })}>{item.title}</a>
            }
        </div>
    )
}

export default MenuItem;