import classNames from "classnames";
import classes from "./NumbersWrapper.module.scss";
import React, {FC} from "react";
import {NumbersImage} from "../index";


interface IProps {
    children?: React.ReactNode
    numbersImage?: string
}

const NumbersWrapper: FC<IProps> = ({children, numbersImage}) => {



    return (
        <div className={classNames(classes.NumbersWrapper)}>
            <div className={classNames(classes.NumbersWrapper__Numbers)}>
                <NumbersImage numbersImage={numbersImage}/>
            </div>
            <div className={classNames(classes.NumbersWrapper__Image)}>
                {children}
            </div>
        </div>
    )
}

export default NumbersWrapper;