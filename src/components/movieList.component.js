// import logo from "./logo.svg";
// import "./App.css";
import { useEffect, useState } from "react";
import SearchIcon from "../search.svg";
import MovieCard from "./movieCard.component";

const API_URL = "https://www.omdbapi.com/?apikey=93806436";

const Movielist = () => {
  const [movies, setMovies] = useState([]);
  const [serachTerm, setserachTerm] = useState("");

  useEffect(() => {
    searchMovies("Batman");
  }, [serachTerm]);

  const searchMovies = async (title) => {
    if (title !== null) {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      console.log(data.Search);
      setMovies(data.Search);
    }
  };

  return (
    <div className="app">
      <h1>Welcome to Movie Land !!</h1>
      <div className="search">
        <input
          placeholder="Search for movies..."
          value={serachTerm}
          onChange={(e) => setserachTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="Search"
          onClick={() => searchMovies(serachTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default Movielist;
