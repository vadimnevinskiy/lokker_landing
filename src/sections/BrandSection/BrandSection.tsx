import classNames from "classnames";
import classes from "./BrandSection.module.scss";
import {BrandNumbers} from "../../components/common";
import {Logo} from "../../components";

const BrandSection = () => {
    return (
        <div className={classNames(classes.BrandSection)}>
            <div className={classNames(classes.BrandSection__Wrapper)}>
                <div className={classNames(classes.BrandSection__Wrapper__Widget)}>
                    <Logo is_animated={false} size={"large"} />
                </div>
                <BrandNumbers/>
            </div>
        </div>
    )
}

export default BrandSection;