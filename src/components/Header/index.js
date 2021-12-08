import React from "react";
import { Link } from 'react-router-dom';
import styles from "./Header.module.scss";

function Header() {
    return (
        <div className={styles.headerTop}>
            <div className={styles.container}>
                <Link className={styles.logoLink} to="">
                    <div className={styles.logo}>
                        <img className={styles.logo__img} src="img/logo.svg" alt="logo" width="64" height="64"/>
                        <p className={styles.logo__title}>Royal auto</p>
                    </div>
                </Link>
                <menu className={styles.menu}>
                    <ul className={styles.list}>
                        <li className={styles.list__item}><a className={styles.item__link} href="/">Автомобили</a></li>
                        <li className={styles.list__item}><a className={styles.item__link} href="/">Контакты</a></li>
                        <Link className={styles.logoLink} to="traideIn">
                            <li className={styles.list__item}>Traide-in</li>
                        </Link>
                        <Link className={styles.logoLink} to="leasing">
                            <li className={styles.list__item}>Лизинг</li>
                        </Link>
                        <Link className={styles.logoLink} to="aboutUs">
                            <li className={styles.list__item}>О нас</li>
                        </Link>
                    </ul>
                </menu>
            </div>
        </div>
    );
}

export default Header;