import classNames from "classnames";
import classes from "./DemoSection.module.scss";
import {Subtitle, Title} from "../../components";
import {shallowEqual, useSelector} from "react-redux";
import {selectLanguage} from "../../store/selectors/mainSelectors";
import {ITranslationType} from "../../types/translationType";
import LanguageService from "../../services/languageService";

const DemoSection = () => {
    const language = useSelector(selectLanguage, shallowEqual)
    const content: ITranslationType = LanguageService.getContentByLanguage(language);


    return (
        <div id={content.demo_section.id} className={classNames(classes.DemoSection)}>
            <Title text={content.demo_section.title} is_center={true}/>
            <Subtitle text={content.demo_section.subtitle} is_center={true} percentWidth={75} mb={50}/>

            <div className={classNames({
                [classes.DemoSection__VideoContainer]: true
            })}>
                <video playsInline controls poster={process.env.PUBLIC_URL + "/assets/images/DemoPreview.png"}>
                    <source src={process.env.PUBLIC_URL + "/assets/lokker_Demo.mp4"}
                            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
                </video>
            </div>
        </div>
    )
}

export default DemoSection;