import classNames from "classnames";
import classes from "./BrandNumbers.module.scss";
import {useRef} from "react";
import {motion, useScroll, useSpring, useTransform} from "motion/react";

const BrandNumbers = () => {
    const containerRef = useRef(null)
    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });
    const fade = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
    const smoothFade = useSpring(fade, {
        stiffness: 80,
        damping: 30,
    });

    return (
        <div ref={containerRef} className={classNames(classes.BrandNumbers)}>
            <motion.img style={{opacity: smoothFade}} src={`/assets/images/BrandNumbers.svg`} alt={""}/>
        </div>
    )
}

export default BrandNumbers;