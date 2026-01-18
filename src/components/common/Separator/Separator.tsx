import classNames from "classnames";
import classes from "./Separator.module.scss";
import {FC, useRef} from "react";
import {motion, useScroll, useSpring, useTransform} from "motion/react";

interface IProps {
    is_animation?: boolean
    mb?: number
    padding?: number
}

const Separator: FC<IProps> = ({is_animation = false, mb = 50, padding = 0}) => {
    const containerRef = useRef(null)
    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ["start end", "end center"],
    });
    const scale = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
    const smoothScale = useSpring(scale, {
        stiffness: 80,
        damping: 20,
    });

    return (
        <motion.div
            ref={containerRef}
            className={classNames(classes.Separator, {
                [classes.Separator__animation]: is_animation
            })}
            style={{
                marginBottom: mb,
                paddingLeft: padding,
                paddingRight: padding,
                scale: smoothScale
            }}
        >
            <img src={`/assets/images/separator.svg`} alt={""}/>
        </motion.div>
    )
}

export default Separator;