import classNames from "classnames";
import classes from "./GradientBorder.module.scss";
import React, {FC} from "react";

interface IProps {
    children: React.ReactNode
    is_animation?: boolean
    is_glowing?: boolean
    speed?: number
    radius?: number
    mb?: number
}

const GradientBorder: FC<IProps> = ({
                                        children,
                                        is_animation = false,
                                        is_glowing = false,
                                        speed = 8,
                                        radius = 28,
                                        mb
                                    }) => {
    return (
        <div className={classNames({
            [classes.GradientBorder]: true,
            [classes.GradientBorder__animated]: is_animation,
            [classes.GradientBorder__glowing]: is_glowing,
        })}
             style={{"--speed": `${speed}s`, borderRadius: radius, marginBottom: mb} as React.CSSProperties}
        >
            <div className={classNames({
                [classes.GradientBorder__content]: true,
            })}>
                {children}
            </div>
        </div>
    )
}

export default GradientBorder;