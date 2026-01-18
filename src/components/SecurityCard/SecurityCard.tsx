import classes from "./SecurityCard.module.scss";
import classNames from "classnames";
import {FC, useRef} from "react";
import {useScroll, useTransform} from "motion/react";
import {SecurityCardContent} from "../index";
import {ISecurityCard} from "../../types";


interface IProps {
    item: ISecurityCard,
    i: number
}

const SecurityCard: FC<IProps> = ({item, i}) => {
    const cardRef = useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({
        target: cardRef,
        offset: ['start end', 'start start']
    })
    const scaleImage = useTransform(scrollYProgress, [0, 0.6], [0.6, 1])
    const opacity = useTransform(scrollYProgress, [0, 0.4], [0.1, 1])


    return (
        <div ref={cardRef} className={classNames(classes.SecurityCard, {
            [classes.SecurityCard__firstChild]: i === 0
        })}>
            <div className={classNames(classes.SecurityCard__CardWrapper)}>
                <SecurityCardContent cardItem={item} scaleImage={scaleImage} opacity={opacity}/>
            </div>
        </div>
    )
}

export default SecurityCard