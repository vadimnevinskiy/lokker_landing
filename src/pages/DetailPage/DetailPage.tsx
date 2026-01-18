import classes from "./DetailPage.module.scss";
import {NavLink} from "react-router-dom";
import React, {useEffect} from "react";
import {shallowEqual, useSelector} from "react-redux";
import {selectLanguage} from "../../store/selectors/mainSelectors";
import {ITranslationType} from "../../types/translationType";
import LanguageService from "../../services/languageService";
import classNames from "classnames";
import {SecurityDetailBlock, Subtitle, Title} from "../../components";
import {SecuritySlogans} from "../../components/common";
import {Header} from "../../sections";


const DetailPage = () => {
    const language = useSelector(selectLanguage, shallowEqual)
    const content: ITranslationType = LanguageService.getContentByLanguage(language);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={classNames({
            [classes.DetailPage]: true
        })}>
            <Header is_display_menu={false}/>
            <Title text={content.security_detail.title}/>
            <SecuritySlogans slogans={content.security_detail.slogans}/>

            {
                content.security_detail.subtitle &&
                <Subtitle text={content.security_detail.subtitle}/>
            }

            {
                content.security_detail.description &&
                <div
                    className={classNames(classes.DetailPage__Description)}
                    dangerouslySetInnerHTML={{__html: content.security_detail.description}}
                />
            }

            <div className={classNames(classes.DetailPage__detailLink)}>
                👉 <NavLink to={content.back_link.url}>{content.back_link.title}</NavLink>
            </div>

            {content.security_detail.blocks.map((block, index) => {
                return (
                    <SecurityDetailBlock key={index} block={block}/>
                )
            })}
            <div className={classNames(classes.DetailPage__detailLink)}>
                👉 <NavLink to={content.back_link.url}>{content.back_link.title}</NavLink>
            </div>
        </div>
    )
}

export default DetailPage;