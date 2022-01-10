import axios from "../axios";
import { useEffect, useState } from "react";
import "./Row.css";

const Row = ({ title, fetchUrl, isLargeRow=false }) => {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);
  console.log(movies)

  const moviePoster = movies.map(movie => {
    return <img
      className={`row-poster ${isLargeRow && "row-poster--large"}`}
      key={movie.id}
      src={`${base_url}${
      isLargeRow ? movie.poster_path : movie.backdrop_path}`}
      alt={movie.name} />
  });

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {moviePoster}
      </div>
    </div>
  )
}

export default Row;