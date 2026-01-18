import {Subtitle, Title} from "../index";
import classNames from "classnames";
import {BrandButton} from "../common";
import classes from "./DescriptionBlock.module.scss";
import React, {FC} from "react";
import {CONST_APPLICATION_DATA} from "../../constants";
import {NavLink} from "react-router-dom";
import {IlLink} from "../../types";
import {shallowEqual, useSelector} from "react-redux";
import {enabledDownloadButtons} from "../../store/selectors/mainSelectors";



interface IProps {
    title?: string
    subtitle?: string
    description?: string
    btnText?: string,
    image?: string,
    is_row_reversed?: boolean,
    detail_link?: IlLink,
}

const DescriptionBlock: FC<IProps> = ({
                                          title,
                                          subtitle,
                                          description,
                                          btnText,
                                          image,
                                          is_row_reversed = false,
                                          detail_link
                                      }) => {
    const enabledDownload = useSelector(enabledDownloadButtons, shallowEqual)

    return (
        <div className={classNames(
            classes.DescriptionBlock,
            {
                [classes.DescriptionBlock__reversed]: is_row_reversed
            }
        )}>
            <div className={classNames(classes.DescriptionBlock__Description)}>
                {title && <Title text={title}/>}
                {subtitle && <Subtitle text={subtitle}/>}
                {
                    description &&
                    <div
                        className={classNames(classes.DescriptionBlock__Description__text)}
                        dangerouslySetInnerHTML={{__html: description}}
                    />
                }
                {
                    detail_link &&
                    <div className={classNames(classes.DescriptionBlock__Description__detailLink)}>
                        👉 <NavLink to={detail_link.url}>{detail_link.title}</NavLink>
                    </div>
                }
                <div className={classNames(classes.DescriptionBlock__Description__button)}>
                    {btnText && <BrandButton title={btnText} url={CONST_APPLICATION_DATA.WINDOWS_INSTALLER} disabled={!enabledDownload} />}
                </div>
            </div>
            {
                image &&
                <div className={classNames(classes.DescriptionBlock__Image)}>
                    <img src={`/assets/images/${image}`} alt={"Features"}/>
                </div>
            }
        </div>
    )
}

export default DescriptionBlock;