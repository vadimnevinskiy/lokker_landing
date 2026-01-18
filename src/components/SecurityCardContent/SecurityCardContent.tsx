import classNames from "classnames";
import classes from "./SecurityCardContent.module.scss";
import {SecurityCardTitle} from "../index";
import {GradientBorder, Tag} from "../common";
import {motion} from "motion/react";
import React, {FC} from "react";
import {MotionValue} from "motion";
import {ISecurityCard} from "../../types";


interface IProps {
    cardItem: ISecurityCard
    scaleImage: MotionValue<number>
    opacity: MotionValue<number>
}

const SecurityCardContent: FC<IProps> = ({
                                             cardItem,
                                             scaleImage,
                                             opacity
                                         }) => {

    const {icon, title, subtitle, description, tags} = cardItem;

    return (
        <GradientBorder radius={20} is_glowing={false}>
            <div

                className={classNames(classes.SecurityCardContent)}
            >
                <div className={classNames(classes.SecurityCardContent__Content)}>
                    <SecurityCardTitle text={title}/>
                    <div
                        className={classNames(classes.SecurityCardContent__Content__Description)}
                        dangerouslySetInnerHTML={{__html: description}}
                    />
                    <div className={classNames(classes.SecurityCardContent__Content__Tags)}>
                        {
                            tags.map((tag, index) => {
                                return (
                                    <Tag tagName={tag} key={index}/>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={classNames(classes.SecurityCardContent__Icon)}>
                    <motion.div
                        className={classNames(classes.SecurityCardContent__Icon__Image)}
                        style={{scale: scaleImage, opacity: opacity}}
                    >
                        <img src={`/assets/images/${icon}`} alt={title}/>
                    </motion.div>
                    <div className={classNames(classes.SecurityCardContent__Icon__Subtitle)}>{subtitle}</div>
                </div>
            </div>
        </GradientBorder>
    )
}

export default SecurityCardContent;