import React from 'react';
import styles from './FilmsContainer.module.css'
import CardMovie from '../CardMovie';
const Films = ({ data }) => {
    return (
        <div className={styles.app__body}>
            {data.Search && data.Search.map(({ Title, Type, Poster, imdbID, Year }) => <CardMovie key={imdbID}
                title={Title}
                type={Type}
                poster={Poster}
                imdbID={imdbID}
                year={Year}></CardMovie>)}
        </div>
    );
};

export default Films;