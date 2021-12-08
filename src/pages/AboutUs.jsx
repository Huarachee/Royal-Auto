import React from "react";
import Header from "../components/Header";

function AboutUs() {
    return (
        <div className="aboutUsPage">
            <div className="header">
                <Header/>
                <div className="container">
                    <div className="headerMainContent">
                        <div className="leftSideAboutUs">
                            <h1 className="mainContentTitleAboutUs">
                                <span className="contentTitleSpan">Royal</span> auto это:
                            </h1>
                            <p className="mainContentTextAboutUs">
                                Автосалон, который продаёт премиум автомобили. Преимущественно нацелен
                                 на автомобили для любителей комфорта за рулём или для тех, кто любит быструю езду!
                            </p>
                            <div className="mainContentContact">
                                <h3 className="networkAboutUsTitle">
                                    Наши социальные сети:
                                </h3>
                                <div className="networkItems">
                                    <a className="networkItemsInst" href="https://www.instagram.com/?hl=ru">
                                        <img src="img/instagram-icon.svg" alt="inst-icon" width="60" height="60" />
                                    </a>
                                    <a className="networkItemsVk" href="https://vk.com/">
                                        <img src="img/vk-icon.svg" alt="vk-icon" width="60" height="60" />
                                    </a>
                                    <a className="networkItemsFacebook" href="https://ru-ru.facebook.com/">
                                        <img src="img/facebook-icon.svg" alt="facebook-icon" width="60" height="60" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="rightSideAboutUs">
                            <img className="aboutUsImg" src="img/aboutUs__bg.jpg" alt="" width="700" height="400"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;