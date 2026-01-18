import classNames from "classnames";
import classes from "./ArrowIcon.module.scss";
import {FC} from "react";


interface IProps {
    mode?: "accent" | "default",
    disabled?: boolean
}
const ArrowIcon:FC<IProps> = ({mode= "accent", disabled = false}) => {
    return (
        <svg className={classNames(classes.ArrowIcon, {
            [classes[`ArrowIcon__${mode}`]]: true,
            [classes[`ArrowIcon__disabled`]]: disabled
        })} width="7" height="12" viewBox="0 0 7 12" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path
                d="M1.29785 1.0498C1.37088 1.05044 1.44364 1.0659 1.51074 1.09473C1.5776 1.12349 1.63788 1.16547 1.68848 1.21777L6.0957 5.625C6.19868 5.72812 6.25684 5.86793 6.25684 6.01367C6.25681 6.12297 6.22379 6.22873 6.16406 6.31836L6.0957 6.40234L1.70215 10.7959C1.59845 10.8959 1.45949 10.9514 1.31543 10.9502C1.17136 10.9489 1.03356 10.8909 0.931641 10.7891C0.829666 10.6871 0.771761 10.5485 0.770508 10.4043C0.769663 10.2962 0.800571 10.1911 0.858398 10.1016L0.924805 10.0176L4.54004 6.40234L4.92969 6.01367L4.54004 5.625L0.917969 2.00195L0.911133 1.99609L0.84082 1.91211C0.8203 1.88235 0.802441 1.85075 0.788086 1.81738C0.759259 1.75028 0.743799 1.67752 0.743164 1.60449C0.742569 1.53156 0.756561 1.45911 0.78418 1.3916C0.811832 1.32404 0.852671 1.26256 0.904297 1.21094C0.955921 1.15931 1.01739 1.11847 1.08496 1.09082C1.15247 1.0632 1.22492 1.04921 1.29785 1.0498Z"
                fill="#010101" stroke="#010101" strokeWidth="1.1"/>
        </svg>
    )
}

export default ArrowIcon;