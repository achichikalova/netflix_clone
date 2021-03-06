import axios from '../axios';
import requests from '../Requests';
import { useEffect, useState } from 'react';
import './Banner.css';

const Banner = () => {

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  }

  return (
    <header 
      className='banner' 
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center 20%"
      }}>
      <div className="banner-contents">
        <h1 className='banner-title'>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner-btns">
          <button className='banner-btn'>Play</button>
          <button className='banner-btn'>My list</button>
        </div>
        <h2 className="banner-description">
          {truncate(movie?.overview, 150)}
        </h2>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  )
}

export default Banner;