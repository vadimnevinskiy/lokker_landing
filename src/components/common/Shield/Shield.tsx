import classes from "./Shield.module.scss";
import classNames from "classnames";
import {FC} from "react";

interface IProps {
    is_animated?: boolean
    size: 'small' | 'middle' | 'big'
}
const Shield:FC<IProps> = ({is_animated = true, size = 'middle'}) => {
    return (
        <svg className={classNames({
            [classes.Shield]: true,
            [classes.Shield__animation]: is_animated,
            [classes[`Shield__${size}`]]: true
        })} width="44" height="50" viewBox="0 0 44 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M44 9.375V21.5098C43.9999 29.5835 40.0782 37.1598 33.4707 41.8525L22 50L10.5293 41.8525C3.92194 37.1598 6.57931e-05 29.5835 0 21.5098V9.375L22 0L44 9.375ZM21.8486 16C19.1709 16.0002 17.0002 18.171 17 20.8486C17 22.6715 18.0059 24.2597 19.4932 25.0879L18.7168 31.4854C18.6192 32.2903 19.2479 32.9998 20.0586 33H23.6387C24.4495 33 25.0781 32.2904 24.9805 31.4854L24.2041 25.0879C25.6915 24.2597 26.6982 22.6717 26.6982 20.8486C26.698 18.1708 24.5265 16 21.8486 16Z"
                fill="white"/>
        </svg>
    )
}

export default Shield;