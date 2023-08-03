import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {Nav,Container,Input} from '@components';
import styles from './Header.module.css'
import '../../vars.css'
const Header = ({onClick, onChange}) => {
    return (
        <div className={styles.header}>
        <Container className={styles.headerContainer}>
            <div className={styles.header__left}>
            <div className={styles.headerLogo}>
            <img src="/img/Netflix logo.png" alt="Netflix_logo"/>            
            </div>
            <div className={styles.header__nav}>
                <Nav></Nav>
            </div>
            </div>
            <form action='#' className={styles.search}>
            <Input onChange={onChange}></Input>
			<button onClick={e=> onClick(e)}> <FontAwesomeIcon icon={faSearch} className={styles.searchIcon}></FontAwesomeIcon></button>
            </form>
        </Container>
        </div>
    );
};

export default Header;