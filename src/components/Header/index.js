import React from "react";
import styles from "./Header.module.scss";

function Header() {
    return (
        <div className={styles.headerTop}>
            <div className={styles.container}>
                <a className={styles.logo} href="index.html">
                    <img className={styles.logo__img} src="/img/logo.svg" alt="logo" width="64" height="64"/>
                    <p className={styles.logo__title}>Royal auto</p>
                </a>
                <menu className={styles.menu}>
                    <ul className={styles.list}>
                        <li className={styles.list__item}><a className={styles.item__link} href="/">Автомобили</a></li>
                        <li className={styles.list__item}><a className={styles.item__link} href="/">Контакты</a></li>
                        <li className={styles.list__item}><a className={styles.item__link} href="/">Продать авто</a></li>
                        <li className={styles.list__item}><a className={styles.item__link} href="/">Лизинг</a></li>
                        <li className={styles.list__item}><a className={styles.item__link} href="/">О нас</a></li>
                    </ul>
                </menu>
            </div>
        </div>
    );
}

export default Header;