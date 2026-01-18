import classNames from "classnames";
import classes from "./BrandButton.module.scss";
import {FC} from "react";
import {ArrowIcon} from "../index";

interface IProps {
    title: string,
    mode?: "accent" | "default",
    url: string,
    disabled?: boolean
}

const BrandButton: FC<IProps> = ({title, mode = "accent", url, disabled = false}) => {
    return (

        <div className={classNames(classes.BrandButton)}>
            <div className={classNames(classes.BrandButton__Content, {
                [classes.BrandButton__Content__disabled]: disabled
            })}>
                {
                    disabled ?
                        <span className={classNames(classes.BrandButton__Content__link, {
                            [classes.BrandButton__Content__link__disabled]: disabled
                        })}>
                            <span className={classNames(
                                classes.BrandButton__content_title
                            )}>{title}</span>
                            <ArrowIcon mode={mode} disabled={true}/>
                        </span>
                        :
                        <a href={url} className={classNames(classes.BrandButton__Content__link, {
                            [classes[`BrandButton__Content__link__${mode}`]]: true
                        })} target="_blank" rel="noopener noreferrer">
                            <span className={classNames(
                                classes.BrandButton__content_title
                            )}>{title}</span>
                            <ArrowIcon mode={mode}/>
                        </a>
                }
            </div>
        </div>
    )
}

export default BrandButton;