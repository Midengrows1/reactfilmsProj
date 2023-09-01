import React from "react";
import styles from "./CardMovie.module.css";
const CardMovie = ({ title, type, poster, imdbIDm, year}) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__inner}>
        <div className={styles.card__img}>
          <img src={poster} alt="" />
        </div>
        <div className={styles.card__description}>
          <h4>{title}</h4>
          <p>{year}</p>
        </div>
      </div>
    </div>
  );
};

export default CardMovie;
