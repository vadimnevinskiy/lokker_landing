import classes from "./MainPage.module.scss";
import {
    BrandSection,
    ConnectSection,
    DemoSection,
    FeaturesSection,
    Header,
    HomeSection,
    SecuritySection
} from "../../sections";
import {CopyrightBlock, MobileMenu} from "../../components";
import {ArrowButton, Separator} from "../../components/common";
import React, {useEffect} from "react";
import {useLocation} from "react-router-dom";
import classNames from "classnames";

const MainPage = () => {
    const location = useLocation();


    useEffect(() => {
        goToTop()
    }, [location]);

    const goToTop = () => {
        window.scrollTo(0, 0);
    }


    return (
        <div className={classNames({
            [classes.MainPage]: true
        })}>
            <Header/>
            <MobileMenu/>
            <div className={classNames({
                [classes.MainPage__Sections]: true
            })}>
                <HomeSection/>
                <Separator mb={100} is_animation={true}/>
                <FeaturesSection/>
                <Separator mb={100} is_animation={true}/>
                <SecuritySection/>
                <DemoSection/>
                <ArrowButton onClick={goToTop}/>
            </div>
            <div className={classNames({
                [classes.MainPage__Separator]: true
            })}/>
            <ConnectSection/>
            <BrandSection/>
            <Separator mb={100} padding={20} is_animation={true}/>
            <CopyrightBlock/>
        </div>
    )
}

export default MainPage