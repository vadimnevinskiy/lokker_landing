import classNames from "classnames";
import classes from "./MainTitle.module.scss";
import {FC, useEffect, useState} from "react";
import {ISlogan} from "../../types";


interface IProps {
    title: ISlogan
}
const MainTitle:FC<IProps> = ({title}) => {
    const [keywordIndex, setKeywordIndex] = useState(0);
    const [showKeyword, setShowKeyword] = useState(true);

    const transition_duration = 500;
    const transition_delay = 20000;

    useEffect(() => {
        const interval = setInterval(() => {
            setShowKeyword(false);
            setTimeout(() => {
                setKeywordIndex((prev) => (prev + 1) % title.keywords.length);
                setShowKeyword(true);
            }, transition_duration);
        }, transition_delay);

        return () => clearInterval(interval);
    }, [title.keywords.length]);

    return (
        <div className={classNames(classes.MainTitle)}>
            <div className={classNames(classes.MainTitle__MainText, {[classes.fadeIn]: showKeyword})}
                 style={{
                     transition: `all ${transition_duration / 1000}s ease`
                 }}
            >
                {title.app_name} - {title.keywords[keywordIndex]}
            </div>
            {title.app_title}
        </div>
    )
}

export default MainTitle;