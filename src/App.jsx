import React from 'react';
import {useState,useEffect} from 'react'
import styles from './App.module.css'
import {Header,Nav,Body,Container} from '@components'
import axios from 'axios'
import { CardMovie } from './components';
const App = () => {
  const [input, setInput] = useState('Titanic')
	const [data, setData] = useState('')
  useEffect(() => {
    return () => {
      GetData(input)
    }
  }, [])
	const inputChange = e => {
		setInput(e.target.value)
	}

	const GetData = (value) => {
		axios
			.get(`http://www.omdbapi.com/?s=${value}&apikey=a4159f8b`)
			.then(({data}) => {
				setData(data)
      })
      // console.log(data);
  }
  const clickHandler = (e) =>{
    e.preventDefault()
    GetData(input)
  }
  return (
    <div className={styles.App}>
      <Header onClick={clickHandler} onChange={inputChange}></Header>
      <Container className={styles.cardWrapper}>
				{data.Search && data.Search.map(({Title,Type,Poster,imdbID,Year}) => <CardMovie key={imdbID}
        title={Title}
        type={Type}
        poster={Poster}
        imdbID={imdbID}
        year={Year}></CardMovie>)}
			</Container>
    </div>
  );
};

export default App;