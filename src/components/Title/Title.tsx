import classNames from "classnames";
import classes from "./Title.module.scss";
import {FC} from "react";

interface IProps {
    text: string
    is_center?: boolean
    mb?: number
}
const Title:FC<IProps> = ({text, is_center = false, mb = 40}) => {
    return (
        <div className={classNames(classes.Title, {
            [classes.Title__centerText]: is_center
        })}
        style={{marginBottom: mb}}
        >{text}</div>
    )
}

export default Title;