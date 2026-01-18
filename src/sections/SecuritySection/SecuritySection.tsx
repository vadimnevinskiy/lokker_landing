import classNames from "classnames";
import classes from "./SecuritySection.module.scss";
import {shallowEqual, useSelector} from "react-redux";
import {selectLanguage} from "../../store/selectors/mainSelectors";
import {ITranslationType} from "../../types/translationType";
import {ISecurityCard} from "../../types";
import LanguageService from "../../services/languageService";
import {DescriptionBlock, LockImage, SecurityCard} from "../../components";
import {motion, useScroll, useSpring} from "motion/react";
import React, {useRef} from "react";


const SecuritySection = () => {
    const cardsContainerRef = useRef(null)
    const language = useSelector(selectLanguage, shallowEqual)
    const content: ITranslationType = LanguageService.getContentByLanguage(language);

    const {scrollYProgress} = useScroll({
        target: cardsContainerRef,
        offset: ['start start', 'end center']
    })

    const scaleIndicator = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })


    return (
        <div id={content.security_section.id} className={classNames(classes.SecuritySection)}>
            <DescriptionBlock
                title={content.security_section.title}
                subtitle={content.security_section.subtitle}
                description={content.security_section.description}
                btnText={content.buttons.install_btn}
                image={"security_image.svg"}
                is_row_reversed={true}
                detail_link={{url: content.detail_link.url, title: content.detail_link.title}}
            />

            <div ref={cardsContainerRef} className={classNames(classes.SecuritySection__Cards)}>
                <div className={classNames(classes.SecuritySection__Cards__Indicator)}>
                    <motion.div className={classNames(classes.SecuritySection__Cards__Indicator__Bar)} style={{scaleX: scaleIndicator, originX: 0}}/>
                </div>
                {
                    content.security_section.cards.map((item: ISecurityCard, index) => {
                        return (
                            <SecurityCard key={index} item={item} i={index} />
                        )
                    })
                }
            </div>
            <LockImage lockImage={'securityLock.svg'} numbersImage={'SecurityNumbers.svg'}/>
        </div>
    )
}

export default SecuritySection;