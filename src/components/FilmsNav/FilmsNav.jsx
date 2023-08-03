import React from 'react';
import clsx from 'clsx'
import { useState, useEffect } from 'react';
import styles from './FilmsNav.module.css'
import '../../vars.css'
const FilmsNav = ({ getTypeData, onClick }) => {
    return (
        <nav className={styles.films__nav}>
            <ul className={styles.nav__inner}>
                <li ><a href='#' className={clsx(styles.active__type)}>Все</a></li>
                <li><a href='#'>Фильмы</a ></li>
                <li><a href='#'>Сериалы</a></li>
            </ul>
        </nav>
    );
};

export default FilmsNav;