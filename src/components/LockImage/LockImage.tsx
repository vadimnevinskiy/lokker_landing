import classNames from "classnames";
import classes from "./LockImage.module.scss";
import {NumbersWrapper} from "../common";
import {FC, useRef} from "react";
import {motion, useScroll, useSpring, useTransform} from "motion/react";

interface IProps {
    numbersImage?: string
    lockImage?: string
}

const LockImage: FC<IProps> = ({numbersImage, lockImage}) => {
    const containerRef = useRef(null)
    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ["center end", "end center"],
    });
    const scale = useTransform(scrollYProgress, [0, 0.3], [0.7, 0.8]);
    const smoothScale = useSpring(scale, {
        stiffness: 80,
        damping: 20,
    });


    return (
        <div ref={containerRef} className={classNames(classes.LockImage)}>
            <NumbersWrapper numbersImage={numbersImage}>
                <motion.img
                    className={classNames(classes.LockImage__img)}
                    style={{scale: smoothScale}}
                    src={`/assets/images/${lockImage}`} alt=""/>
            </NumbersWrapper>
        </div>
    )
}

export default LockImage;