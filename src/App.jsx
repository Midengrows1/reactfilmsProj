import React from "react";
import axios from "axios";
import clsx from "clsx";
import { useState, useEffect } from "react";
import styles from "./App.module.css";
import { Header, Nav, Body, Container, Films } from "@components";
import { CardMovie } from "./components";
const App = () => {
  const [input, setInput] = useState("Titanic");
  const [year, setYear] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const [typearr, setTypeArr] = useState([
    {
      id: 1,
      title: "Фильмы",
      value: "movie",
      checked: true,
    },
    {
      id: 2,
      title: "Сериалы",
      value: "series",
      checked: false,
    },
    {
      id: 3,
      title: "Эпизоды",
      value: "episode",
      checked: false,
    },
  ]);

  useEffect(() => {
    GetData(input);
  }, [typearr]);
  useEffect(() => {
    setFilteredData(data);
  }, [typearr]);
  const filmsType = typearr.filter((item) => item.checked)[0]["value"];
  const GetData = (value) => {
    axios
      .get(
        `http://www.omdbapi.com/?s=${value}&apikey=a4159f8b&type=${filmsType}&y=${year}`
      )
      .then(({ data }) => {
        setData(data.Search);
      });
  };
  const changeType = (id) => {
    const newArray = typearr.map((item) => {
      if (item.id === id) {
        return { ...item, checked: true };
      } else {
        return { ...item, checked: false };
      }
    });
    setTypeArr(newArray);
  };
  const clickHandler = (e) => {
    e.preventDefault();
    GetData(input);
  };
  const [sortedArr, setSortedArr] = useState([]);
  const sortArr = () => {
    const filmsSorted = data.sort((a, b) => {
      return a.Year - b.Year;
    });
    setSortedArr(filmsSorted);
  };
  const sortonYears = (e) => {
    setYear(e.target.value);
  };
  const EnterHandler = (e) => {
    if (e.key === "Enter") {
      clickHandler(e);
    }
  };
  useEffect(() => {
    setData(sortedArr);
  }, [sortedArr]);
  return (
    <div className={styles.App}>
      <Header
        onClick={clickHandler}
        sortIt={sortArr}
        inputChange={(e) => setInput(e.target.value)}
        changeType={changeType}
        arr={typearr}
        sortonYears={sortonYears}
        EnterHandler={EnterHandler}
      ></Header>
      <Container className={styles.cardWrapper}>
        <Films data={data}></Films>
      </Container>
    </div>
  );
};

export default App;
