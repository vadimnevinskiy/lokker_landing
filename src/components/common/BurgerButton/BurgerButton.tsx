import classNames from "classnames";
import classes from "./BurgerButton.module.scss";
import {FC} from "react";

interface IProps {
    is_active?: boolean
    toggleMenu?: () => void
}
const BurgerButton:FC<IProps> = ({is_active = false, toggleMenu}) => {
    return (
        <div className={classNames({
            [classes.BurgerButton]: true,
            [classes.BurgerButton__is_active]: is_active
        })} onClick={toggleMenu}>
            <div className={classNames({
                [classes.BurgerButton_bar]: true
            })}/>
        </div>
    )
}

export default BurgerButton;