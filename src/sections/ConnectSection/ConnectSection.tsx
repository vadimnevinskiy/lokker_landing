import classNames from "classnames";
import classes from "./ConnectSection.module.scss";
import {Logo} from "../../components";
import {shallowEqual, useSelector} from "react-redux";
import {selectLanguage} from "../../store/selectors/mainSelectors";
import {ITranslationType} from "../../types/translationType";
import LanguageService from "../../services/languageService";
import {BrandButton, IconLink} from "../../components/common";
import {CONST_APPLICATION_DATA} from "../../constants";

const ConnectSection = () => {
    const language = useSelector(selectLanguage, shallowEqual)
    const content: ITranslationType = LanguageService.getContentByLanguage(language);


    return (
        <>
            <div className={classNames(classes.ConnectSection)}>
                <div className={classNames(classes.ConnectSection__Question)}>
                    <div className={classNames(classes.ConnectSection__Question__Logo)}><Logo/></div>
                    <div
                        className={classNames(classes.ConnectSection__Question__Description)}>{content.contacts_section.question}</div>
                    <div
                        className={classNames(classes.ConnectSection__Question__ConnectBtn)}>
                        <BrandButton title={content.buttons.connection_btn} mode={"default"} url={`mailto:${CONST_APPLICATION_DATA.DEVELOPER_EMAIL}`}/>
                    </div>
                </div>
                <div className={classNames(classes.ConnectSection__Navigation)}>
                    <div
                        className={classNames(classes.ConnectSection__Navigation__Title)}>{content.contacts_section.navigation_title}</div>
                    <div className={classNames(classes.ConnectSection__Navigation__Links)}>
                        {
                            content.menu.map((item, index) => {
                                if (item.id !== "download") {
                                    return (
                                        <div key={index}
                                             className={classNames(classes.ConnectSection__Navigation__Links__LinkItem)}>
                                            <a href={`#${item.id}`}>{item.title}</a>
                                        </div>
                                    );
                                }
                                return null;
                            })
                        }
                    </div>
                </div>
                <div className={classNames(classes.ConnectSection__Contacts)}>
                    <div
                        className={classNames(classes.ConnectSection__Navigation__Title)}>{content.contacts_section.contact_title}</div>
                    <div className={classNames(classes.ConnectSection__Navigation__Links)}>
                        {
                            content.contacts_section.links.map((item, index) => {
                                let url = ""
                                switch (item.icon) {
                                    case "telegram":
                                        url = CONST_APPLICATION_DATA.TG_GROUP;
                                        break;
                                    case "email":
                                        url = CONST_APPLICATION_DATA.DEVELOPER_EMAIL;
                                        break;
                                    case "gitlab":
                                        url = CONST_APPLICATION_DATA.SOURCE_CODE;
                                        break;
                                }

                                return (
                                    <IconLink key={index} name={item.name} url={url} icon={item.icon}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConnectSection;