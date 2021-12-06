import React from "react";
import styles from "./CardSportAuto.module.scss";


function CardSportAuto({categoryAuto, imageUrlСar, carName, carPrice,
    imageUrlSpecific1, specificTitle1, specificInfo1, imageUrlSpecific2, specificTitle2, specificInfo2,
    imageUrlSpecific3, specificTitle3, specificInfo3}) {
    return (
        <a href="/" className={styles.cardLink}>
            <div className={styles.card}>
                <div className={styles.card__leftSide}>
                    <p className={styles.leftSide__categoryAuto}>
                        {categoryAuto}
                    </p>
                    <div class={styles.leftSide__carImg}>
                        <img className={styles.carImg__image} src={imageUrlСar} alt="auto1"/>
                    </div>
                    <div className={styles.leftSide__nameCarContainer}>
                        <h3 className={styles.nameCarContainer__title}>{carName}</h3>
                        <p className={styles.nameCarContainer__price}>{carPrice}</p>
                    </div>
                </div>
                <div className={styles.card__rightSide}>
                    <div className={styles.rightSide__feature}>
                        <div className={styles.feature__img}>
                            <img className={styles.img__icon} src={imageUrlSpecific1} alt="" width="75" height="75"/>
                        </div>
                        <h5 className={styles.feature__title}>
                            {specificTitle1}
                        </h5>
                        <p className={styles.feature__text}>
                            {specificInfo1}
                        </p>
                    </div>
                    <div className={styles.lineCardAuto}></div>
                    <div className={styles.rightSide__feature}>
                        <div className={styles.feature__img}>
                            <img className={styles.img__icon} src={imageUrlSpecific2} alt="" width="75" height="75"/>
                        </div>
                        <h5 className={styles.feature__title}>
                            {specificTitle2}
                        </h5>
                        <p className={styles.feature__text}>
                            {specificInfo2}
                        </p>
                    </div>
                    <div className={styles.lineCardAuto}></div>
                    <div className={styles.rightSide__feature}>
                        <div className={styles.feature__img}>
                            <img className={styles.img__icon} src={imageUrlSpecific3} alt="" width="75" height="75"/>
                        </div>
                        <h5 className={styles.feature__title}>
                            {specificTitle3}
                        </h5>
                        <p className={styles.feature__text}>
                            {specificInfo3}
                        </p>
                    </div>
                </div>
            </div>
        </a>
    );
}

export default CardSportAuto;