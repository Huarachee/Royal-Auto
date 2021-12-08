import React from "react";
import Header from "../components/Header";

function TraideIn() {
    return (
        <div className="traideInPage">
            <header className="header">
                <Header/>
                <div className="container">
                    <div className="headerMainContent">
                        <div className="mainContentInfo">
                            <h1 className="mainContentTitle">
                                У нас работает <span className="contentTitleSpan">Traide-in</span> система!
                            </h1>
                            <p className="mainContentText">
                                При сдаче вашего старого автомобиля в Traide-in,
                                 действует скидка от <span className="mainCotentSpan">10% до 40%</span> при покупке автомобиля в нашем
                                 автосалоне.
                            </p>
                        </div>
                        <div className="mainContentImg">
                            <img src="/img/traideInImg.png" alt="traide-in-img" width="600" height="450"/>
                            <div className="contentBtn">
                                <button className="makeAnBtn">Подать заявку</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </header> 
        </div>
    );
}

export default TraideIn;