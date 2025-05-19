import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';



const TitleCards = ({title,category}) => {

  const[apiData,setApiData] = useState([]);

  const cardRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDEzMTNiMGEyYWUxYWEyZDA5NzAzNjNiZWNkOWM0ZiIsIm5iZiI6MTcyMzU0OTk5OS4wMTAwOTgsInN1YiI6IjY2YmI0NzZhMDU4MDZlM2M4ZWQ3OTAwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N9pE2u44wg3wBd3Net8DT_ddpKMJMf4akScNVz6COMg'
    }
  };
  
 
  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));

  const handleWheel = (event) => {
    event.preventDefault();
    cardRef.current.scrollLeft += event.deltaY;
  }

    cardRef.current.addEventListener('wheel', handleWheel)
  }, [apiData]);

  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardRef}>
        {
          apiData.map((card, index) => {
            return <Link to={`/player/${card.id}`} className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500/`+card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </Link>
          })
        }
      </div>
    </div>
  )
}

export default TitleCards
