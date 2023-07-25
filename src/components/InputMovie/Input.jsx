import React from 'react';
import styles from './Input.module.css'
const Input = ({ onChange, type }) => {
    return (
        <input type='text' className={styles.input} onChange={onChange} />
    );
};

export default Input;