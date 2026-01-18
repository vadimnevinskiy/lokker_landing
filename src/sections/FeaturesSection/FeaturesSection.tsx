import classNames from "classnames";
import classes from "./FeaturesSection.module.scss";
import {shallowEqual, useSelector} from "react-redux";
import {selectLanguage} from "../../store/selectors/mainSelectors";
import {ITranslationType} from "../../types/translationType";
import LanguageService from "../../services/languageService";
import {GradientBorder} from "../../components/common";
import {DescriptionBlock} from "../../components";


const FeaturesSection = () => {
    const language = useSelector(selectLanguage, shallowEqual)
    const content: ITranslationType = LanguageService.getContentByLanguage(language);

    return (
        <div id={content.features_section.id} className={classNames(classes.FeaturesSection)}>
            <DescriptionBlock
                title={content.features_section.title}
                subtitle={content.features_section.subtitle}
                description={content.features_section.description}
                btnText={content.buttons.protect_btn}
                image={"power_key.svg"}
                is_row_reversed={false}
            />

            <div className={classNames(classes.FeaturesSection__Cards)}>
                {
                    content.features_section.cards.map((item, index) => {
                        return (
                            <GradientBorder radius={20} is_glowing={false} key={index}>
                                <div className={classNames(classes.FeaturesSection__Cards__CardItem)}>
                                    <div className={classNames(classes.FeaturesSection__Cards__CardItem__Icon)}>
                                        <img src={`/assets/images/${item.icon}`} alt={item.title}/>
                                    </div>
                                    <div className={classNames(classes.FeaturesSection__Cards__CardItem__Content)}>
                                        <div
                                            className={classNames(classes.FeaturesSection__Cards__CardItem__Content__Title)}>{item.title}</div>
                                        <div
                                            className={classNames(classes.FeaturesSection__Cards__CardItem__Content__Description)}>{item.description}</div>
                                    </div>

                                </div>
                            </GradientBorder>
                        )
                    })
                }
            </div>
        </div>
    )
}


export default FeaturesSection;
