import {useState} from "react";
import './App.css';
import MovieDisplay from './components/movieDisplay';
import MovieForm from './components/movieForm';

function App() {

  const [movieList, setMovieList] = useState([])

  const handleAddMovie = (newMovie)=>{


    setMovieList([...movieList, newMovie])


  }

  return (
    <div className="App">
      <header className="App-header">
      <MovieForm handleAddMovie = {handleAddMovie}/>
      <MovieDisplay movieList = {movieList}/>
      </header>
    </div>
  );
}

export default App;
