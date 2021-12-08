import React from "react";
import styles from "./Footer.module.scss";


function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <a className={styles.footerLogo} href="/">
                    <div className={styles.footerLogo__iconContainer}>
                        <img className={styles.footerLogo__icon} src="img/logo.svg" alt=""/>
                    </div>
                    <h1 className={styles.footerLogo__title}>Royal auto</h1>
                </a>
                <p className={styles.copyright}>© Все права защищены 2021.</p>
            </div>
        </footer>
    );
}

export default Footer;