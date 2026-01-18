import classNames from "classnames";
import classes from "./IconLink.module.scss";
import {FC} from "react";
import {SvgIcon} from "../index";


interface IProps {
    name: string
    url: string
    icon?: string;
}

const IconLink: FC<IProps> = ({name, url, icon}) => {
    return (
        <a href={url} target={"_blank"} rel="noopener noreferrer" className={classNames(classes.IconLink)}>
            {
                icon &&
                <span className={classNames(classes.IconLink__Icon)}>
                    <SvgIcon name={icon}/>
                </span>
            }

            <span className={classNames(classes.IconLink__Name)}>{name}</span>
        </a>
    )
}

export default IconLink;