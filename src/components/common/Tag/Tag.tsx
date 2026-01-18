import classNames from "classnames";
import classes from "./Tag.module.scss";
import {FC} from "react";
import {GradientBorder} from "../index";


interface IProps {
    tagName: string
}

const Tag: FC<IProps> = ({tagName}) => {
    return (
        <div className={classNames(classes.Tag)}>
            <GradientBorder>
                <div className={classNames(classes.Tag__name)}>
                    {tagName}
                </div>
            </GradientBorder>
        </div>
    )
}

export default Tag;