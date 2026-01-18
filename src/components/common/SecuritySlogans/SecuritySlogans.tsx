import classes from "./SecuritySlogans.module.scss";
import React, {FC} from "react";
import classNames from "classnames";
import {GradientBorder} from "../index";
import {ISecuritySlogan} from "../../../types";


interface IProps {
    slogans: ISecuritySlogan[]
}

const SecuritySlogans: FC<IProps> = ({slogans}) => {
    return (
        <div className={classNames({
            [classes.SecuritySlogans]: true
        })}>
            {
                slogans.map((slogan, index) => {
                    return (
                        <div key={index} className={classNames({
                            [classes.SecuritySlogans__Slogan]: true
                        })}>
                            <GradientBorder>
                                <div className={classNames({
                                    [classes.SecuritySlogans__Slogan__content]: true
                                })}>
                                    <div>{slogan.icon}</div>
                                    <div>{slogan.text}</div>
                                </div>
                            </GradientBorder>
                        </div>
                )
                })
                }
                </div>
                )
                }

                export default SecuritySlogans;