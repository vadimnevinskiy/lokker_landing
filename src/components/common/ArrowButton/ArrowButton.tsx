import classes from "./ArrowButton.module.scss";
import classNames from "classnames";
import {FC} from "react";

interface IProps {
    onClick: () => void
}

const ArrowButton: FC<IProps> = ({onClick}) => {
    return (
        <svg className={classNames({
            [classes.ArrowButton]: true,
            [classes.ArrowButton__accent]: true
        })} onClick={onClick} xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px">
            <path d="M440-80v-647L256-544l-56-56 280-280 280 280-56 57-184-184v647h-80Z"/>
        </svg>
    )
}

export default ArrowButton;