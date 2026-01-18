import classNames from "classnames";
import classes from "./Subtitle.module.scss";
import {FC} from "react";


interface IProps {
    text: string
    centeredText?: boolean
    mb?: number
    is_center?: boolean
    percentWidth?: number
    is_bold?: boolean
}
const Subtitle:FC<IProps> = ({text, is_center = false, mb = 20, percentWidth = 100, is_bold = true}) => {
    return (
        <div className={classNames(
            classes.Subtitle,
            {
                [classes.Subtitle__centered]: is_center
            }
        )}
        style={{marginBottom: mb, maxWidth: percentWidth + '%', fontWeight: is_bold ? 600 : 400}}
        >{text}</div>
    )
}

export default Subtitle;