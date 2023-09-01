import React, { useEffect, useState } from "react";
import styles from "./FilmsContainer.module.css";
import CardMovie from "../CardMovie";
const Films = ({ data }) => {
  return (
    <div className={styles.app__body}>
      {data &&
        data.map(({ Title, Type, Poster, imdbID, Year }, index) => (
          <CardMovie
            key={imdbID}
            title={Title}
            type={Type}
            poster={Poster}
            imdbID={imdbID}
            year={Year}
          ></CardMovie>
        ))}
    </div>
  );
};

export default Films;
