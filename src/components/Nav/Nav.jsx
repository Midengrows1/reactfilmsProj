import React from 'react';
import styles from './Nav.module.css'
const Nav = () => {
    return (
        <nav className={styles.Nav}>
             <ul className={styles.nav__inner}>
                 <li><a href="#" className={styles.nav__link}>Главная</a></li>
                 <li><a href="#" className={styles.nav__link}>Сериалы</a></li>
                 <li><a href="#" className={styles.nav__link}>Фильмы</a></li>
             </ul>         
        </nav>
    );
};

export default Nav;