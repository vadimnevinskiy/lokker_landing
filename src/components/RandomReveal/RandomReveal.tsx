import {FC, useEffect, useState} from "react";
import classNames from "classnames";
import classes from "./RandomReveal.module.scss";
import {shallowEqual, useSelector} from "react-redux";
import {selectLanguage} from "../../store/selectors/mainSelectors";
import {CONST_CHARS, CONST_LANGUAGES} from "../../constants";

interface IProps {
    text: string;
    reveal_speed?: number
}

const RandomReveal: FC<IProps> = ({text, reveal_speed = 3000}) => {
    const language = useSelector(selectLanguage, shallowEqual)
    const [displayed, setDisplayed] = useState<string>("");
    const [characters, setCharacters] = useState<string>(CONST_CHARS.EN)

    useEffect(() => {
        switch (language) {
            case CONST_LANGUAGES.RU:
                setCharacters(CONST_CHARS.RU);
                break;
            case CONST_LANGUAGES.EN:
                setCharacters(CONST_CHARS.EN);
                break;
            case CONST_LANGUAGES.ES:
                setCharacters(CONST_CHARS.ES);
                break;
            case CONST_LANGUAGES.DE:
                setCharacters(CONST_CHARS.DE);
                break;
            default:
                setCharacters(CONST_CHARS.EN);
        }
    }, [language]);


    useEffect(() => {
        let frame = 0;
        const totalFrames = text.length * 10; // количество обновлений текста
        const intervalTime = reveal_speed / totalFrames;

        const interval = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;

            // количество раскрытых букв
            const openedCount = Math.floor(progress * text.length);

            const next = text
                .split("")
                .map((char, index) => {
                    if (index < openedCount) return char;

                    // случайный символ вместо ещё не раскрытой буквы
                    return characters[Math.floor(Math.random() * characters.length)];
                })
                .join("");

            setDisplayed(next);

            if (frame >= totalFrames) {
                setDisplayed(text);
                clearInterval(interval);
            }
        }, intervalTime);

        return () => clearInterval(interval);
    }, [text, reveal_speed, characters]);

    return (
        <span className={classNames(classes.RandomReveal)}>
            {displayed.split("").map((char, i) => (
                <span key={i} className={classNames({
                    [classes.RandomReveal__char]: char !== " "
                })}>{char}</span>
            ))}
        </span>
    )
}

export default RandomReveal;