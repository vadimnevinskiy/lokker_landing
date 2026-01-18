import classNames from "classnames";
import classes from "./SecurityCardTitle.module.scss";
import {FC} from "react";


interface IProps {
    text: string
    mb?: number
}
const SecurityCardTitle:FC<IProps> = ({text, mb= 20}) => {
    return (
        <div className={classNames(classes.SecurityCardTitle)}
             style={{marginBottom: mb}}
        >{text}</div>
    )
}

export default SecurityCardTitle;