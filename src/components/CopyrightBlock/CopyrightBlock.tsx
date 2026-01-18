import classNames from "classnames";
import classes from "./CopyrightBlock.module.scss";
import {CONST_APPLICATION_DATA} from "../../constants";


const CopyrightBlock = () => {

    return (
        <div className={classNames(classes.CopyrightBlock)}>
            <div className={classNames(classes.CopyrightBlock__Development)}>
                <div>&copy; 2025 <a href={`mailto:${CONST_APPLICATION_DATA.DEVELOPER_EMAIL}`} target="_blank" rel="noopener noreferrer">{CONST_APPLICATION_DATA.DEVELOPER_NAME}</a>.</div>
                <div>All rights reserved.</div>
            </div>
            <div className={classNames(classes.CopyrightBlock__Design)}>
                <div>Design with</div>
                <div>
                    <img src={`/assets/images/Heart.svg`} alt=""/>
                </div>
                <div>by: <a href={`mailto:${CONST_APPLICATION_DATA.DESIGNER_CONTACT}`} target="_blank" rel="noopener noreferrer">{CONST_APPLICATION_DATA.DESIGNER_NAME}</a></div>
            </div>
        </div>
    )
}

export default CopyrightBlock;