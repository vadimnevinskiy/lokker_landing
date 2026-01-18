import classNames from "classnames";
import classes from "./HomeSection.module.scss";
import {LockImage, SliderBenefits, MainTitle, Subtitle, RandomReveal} from "../../components";
import {BrandButton} from "../../components/common";
import {shallowEqual, useSelector} from "react-redux";
import {enabledDownloadButtons, selectLanguage} from "../../store/selectors/mainSelectors";
import {ITranslationType} from "../../types/translationType";
import LanguageService from "../../services/languageService";
import {useEffect, useState} from "react";
import {CONST_APPLICATION_DATA} from "../../constants";


const HomeSection = () => {
    const language = useSelector(selectLanguage, shallowEqual)
    const enabledDownload = useSelector(enabledDownloadButtons, shallowEqual)
    const content: ITranslationType = LanguageService.getContentByLanguage(language);
    const [sloganIndex, setSloganIndex] = useState(0);
    const reveal_period = 4000;
    const reveal_speed = 200;

    useEffect(() => {
        const interval = setInterval(() => {
            setSloganIndex((prev) => (prev + 1) % content.home_section.slogan.length);
        }, reveal_period);

        return () => clearInterval(interval);
    }, [content.home_section.slogan.length]);

    return (
        <div id={content.home_section.id} className={classNames(classes.HomeSection)}>
            <MainTitle title={content.home_section.title}/>
            <div className={classNames(classes.HomeSection__Slogan)}>
                <div className={classNames(classes.HomeSection__Slogan__item)}>
                    <RandomReveal text={content.home_section.slogan[sloganIndex]} reveal_speed={reveal_speed}/>
                </div>
            </div>
            <div className={classNames(classes.HomeSection__button)}>
                <BrandButton title={content.buttons.download_btn} url={CONST_APPLICATION_DATA.WINDOWS_INSTALLER} disabled={!enabledDownload}/>
            </div>
            <LockImage lockImage={'hero_key.svg'} numbersImage={'numbers.svg'}/>
            <Subtitle text={content.home_section.description} is_center={true} mb={100} percentWidth={70}
                      is_bold={false}/>

            <SliderBenefits benefits={content.benefits} animationSpeed={40} mb={100}/>
        </div>
    )
}

export default HomeSection;