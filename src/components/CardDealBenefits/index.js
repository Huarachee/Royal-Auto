import React from "react";
import styles from "./CardDealBenefits.module.scss";


function CardDealBenefits ({ text, imageUrl }) {
    return (
        <div className={styles.headerBottom__headerCard}>
            <p className={styles.headerCard__text}>
              {text}
            </p>
            <img className={styles.headerCard__img} src={imageUrl} alt="" width="70" height="70"/>
        </div>
    );
}

export default CardDealBenefits;