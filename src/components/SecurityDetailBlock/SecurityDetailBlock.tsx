import classes from "./SecurityDetailBlock.module.scss";
import React, {FC} from "react";
import classNames from "classnames";
import {GradientBorder} from "../common";
import {SecurityCardTitle} from "../index";
import {ISecurityDetailBlock} from "../../types";

interface IProps {
    block: ISecurityDetailBlock
}

const SecurityDetailBlock: FC<IProps> = ({block}) => {
    return (
        <GradientBorder radius={20} is_glowing={false}>
            <div key={block.title} className={classNames(classes.SecurityDetailBlock)}>

                <div className={classNames(classes.SecurityDetailBlock__Title)}>
                    <div className={classNames(classes.SecurityDetailBlock__Title__icon)}>{block.icon}</div>
                    <div className={classNames(classes.SecurityDetailBlock__Title__text)}>
                        <SecurityCardTitle text={block.title} mb={0}/>
                    </div>
                </div>
                {
                    block.subtitle &&
                    <div
                        className={classNames(classes.SecurityDetailBlock__Subtitle)}
                        dangerouslySetInnerHTML={{__html: block.subtitle}}
                    />
                }


                <ul className={classNames(classes.SecurityDetailBlock__Features)}>
                    {
                        block.features.map((item, index) => {
                            return (
                                <li key={index}>{item}</li>
                            )
                        })
                    }
                </ul>
                {
                    block.description &&
                    <div
                        className={classNames(classes.SecurityDetailBlock__Description)}
                        dangerouslySetInnerHTML={{__html: block.description}}
                    />
                }
            </div>
        </GradientBorder>
    )
}

export default SecurityDetailBlock;