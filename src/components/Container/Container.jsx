import React from 'react';
import clsx from 'clsx'
import styles from './Container.module.css'
const Container = ({children,className}) => {
    return (
       <div className={clsx(styles.Container, className)}>
           {children}
       </div>
    );
};

export default Container;