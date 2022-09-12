import { useEffect, useState } from "react";
import SearchIcon from "./search.svg";
import MovieCard from "./components/MovieCard";
import './App.css';

// 189abef5
const API_URL = "http://omdbapi.com?apikey=189abef5"

const App = () => {

  const [searchTerm, setSearchTerm] = useState('')
  const [movies, setMovies] = useState([])

  useEffect (() => {
    searchFilms('Batman')
  },[])

  const searchFilms = async (title) => {
    const req = await fetch(`${API_URL}&s=${title}`)
    const res = await req.json()

    // console.log (res.Search)
    setMovies(res.Search)
  }

  return(
    <div className="app">
      <h1>My Movie App</h1>
      <div className="search">
        <input 
        placeholder='search for a film' 
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value) }> 
        </input>
        <img 
        src={SearchIcon}
        alt='Search'
        onClick={() => searchFilms(searchTerm)}>
        </img>
      </div>
      {movies?.length > 0
        ?(
          <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ) ) }
          </div>
        ) : (
          <div  className="empty">
            <h2>No movies found</h2>
            </div>
        )
      
      }
    </div>
  )

}

export default App;