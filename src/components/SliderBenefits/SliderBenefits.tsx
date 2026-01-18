import classNames from "classnames";
import classes from "./SliderBenefits.module.scss";
import React, {FC} from "react";
import {Shield} from "../common";

interface IProps {
    benefits: string[]
    is_reversed?: boolean,
    animationSpeed?: number
    mb?: number
}

const SliderBenefits: FC<IProps> = ({benefits, is_reversed = false, animationSpeed = 20, mb = 50}) => {
    return (
        <div
            className={classNames(classes.SliderBenefits, {
                [classes.SliderBenefits__reversed]: is_reversed
            })}
            style={
                {
                    "--itemWidth": "520px",
                    "--animationSpeed": animationSpeed + "s",
                    "--itemCount": benefits.length,
                    marginBottom: mb + "px"
                } as React.CSSProperties
            }
        >
            {
                benefits.map((benefit, index) => {
                    return (
                        <div
                            key={index}
                            className={classNames(classes.SliderBenefits__item, {
                                [classes[`SliderBenefits__item_${index}`]]: true,
                            })}
                            style={
                                {
                                    "--position": index
                                } as React.CSSProperties
                            }
                        >
                            <div className={classNames(classes.SliderBenefits__item__icon)}>
                                <Shield is_animated={false} size={"small"}/>
                            </div>
                            <div
                                className={classNames(classes.SliderBenefits__item__content)}>{benefit}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SliderBenefits;