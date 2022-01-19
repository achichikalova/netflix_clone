import axios from "../axios";
import { useEffect, useState } from "react";
import "./Row.css";

const Row = ({ title, fetchUrl, isLargeRow=false }) => {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original";

  // Get data from API and set it to movies
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  // Get movie element
  const moviePoster = movies.map(movie => {
    return <img
      className={`row-poster ${isLargeRow && "row-poster--large"}`}
      key={movie.id}
      src={`${base_url}${
      isLargeRow ? movie.poster_path : movie.backdrop_path}`}
      alt={movie.name} />
  });

  // Drag and swipe
  useEffect(() => {
    const sliders = document.querySelectorAll('.row-posters');
    
    for (const slider of sliders) {
      let isDown = false;
      let startX;
      let scrollLeft;
      slider.addEventListener('mousedown', async (e) => {
        isDown = true;
        slider.classList.add('row-posters--active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });
      slider.addEventListener('mouseleave', async () => {
        isDown = false;
        slider.classList.remove('row-posters--active');
      });
      slider.addEventListener('mouseup', async () => {
        isDown = false;
        slider.classList.remove('row-posters--active');
      });
      slider.addEventListener('mousemove', async (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; 
        //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
      });
    }

  }, []);

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