import classNames from "classnames";
import classes from "./Dropdown.module.scss";
import React, {FC} from "react";
import {GradientBorder} from "../common";


interface IProps {
    is_active: boolean
    title?: string
    children?: React.ReactNode
    variant?: 'mobile' | 'desktop'
}

const Dropdown: FC<IProps> = ({is_active = false, title, children, variant = 'desktop'}) => {
    const Wrapper: React.FC<{ children: React.ReactNode }> = ({children}) =>
        variant === 'desktop'
            ? <GradientBorder is_animation={false} is_glowing={false}>{children}</GradientBorder>
            : <>{children}</>;


    return (
        <div className={classNames(
            classes.Dropdown, {
            [classes[`Dropdown__${variant}`]]: true,
            [classes.Dropdown__is_active]: is_active
        })}>
            <Wrapper>
                <div className={classNames({
                    [classes[`Dropdown__${variant}__content`]]: true
                })}>
                    {title && <div className={classes.Dropdown__title}>{title}</div>}
                    <div className={classes.Dropdown__DropDownList}>{children}</div>
                </div>
            </Wrapper>
        </div>
    )
}

export default Dropdown;