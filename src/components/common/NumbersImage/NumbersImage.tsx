import classNames from "classnames";
import classes from "./NumbersImage.module.scss";
import {FC, useRef} from "react";
import {motion, useScroll, useSpring, useTransform} from "motion/react";


interface IProps {
    numbersImage?: string
}

const NumbersImage: FC<IProps> = ({numbersImage = 'numbers.svg'}) => {
    const containerRef = useRef(null)
    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });
    const fade = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
    const smoothFade = useSpring(fade, {
        stiffness: 80,
        damping: 30,
    });

    return (
        <div ref={containerRef} className={classNames(classes.NumbersImage)}>
            <motion.div
                className={classNames(classes.NumbersImage__img)}
                style={{"backgroundImage": `url("/assets/images/${numbersImage}")`, opacity: smoothFade}}
            />
        </div>
    )
}

export default NumbersImage;