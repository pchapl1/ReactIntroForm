import {React, useState} from "react";


const MovieForm = (props) => {

    const [title, setTitle] = useState("")
    const [director, setDirector] = useState("")
    const [actors, setActors] = useState("")
    const [plot, setPlot] = useState("")
    const [year, setYear] = useState(2000)
    const [imdbRating, setImdbRating] = useState(0)


    const handleTitle = (e) => {
        const value = e.target.value
        setTitle(value)
    }

    const handleDirector = (e) => {
        const value = e.target.value
        setDirector(value)
    }

    const handleActors = (e) => {
        const value = e.target.value
        setActors(value)
    }

    const handlePlot = (e) => {
        const value = e.target.value
        setPlot(value)
    }

    const handleYear = (e) => {
        const value = e.target.value
        setYear(value)
    }

    const handleImdbRating = () => {
        setImdbRating(imdbRating + .1)
    }

    const createNewMovie = () => {

        const newMovie = {
            title,
            director,
            actors,
            plot,
            year,
            imdbRating
        }

        // these props comes from app.js
        props.handleAddMovie(newMovie)

    }

    return (

        <div className="movieFormContainer">
            <div className="title">
                <h1>Movie Form</h1>
            </div>            
            <div className="form">
                <div className="movieTitle">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" id="" onChange={(e) => { handleTitle(e)} } />
                    <p className="currentTitle">Current Title: {title}</p>
                </div>
                <div className="movieDirector">
                    <label htmlFor="director">Director: </label>
                    <input type="text" name="director" id="" onChange={(e) => { handleDirector(e)} } />
                    <p className="currentDirector">Current Director: {director}</p>
                </div>
                <div className="movieActors">
                    <label htmlFor="actors">Actors: </label>
                    <input type="text" name="actors" id="" onChange={(e) => { handleActors(e)} } />
                    <p className="currentActors">Current Actors: {actors}</p>
                </div>
                <div className="moviePlot">
                    <label htmlFor="plot">Plot: </label>
                    <input type="text" name="plot" id="" onChange={(e) => { handlePlot(e)} } />
                    <p className="currentPlot">Current Plot: {plot}</p>
                </div>
                <div className="movieYear">
                    <label htmlFor="year">Year: </label>
                    <input type="number" name="year" id="" onChange={(e) => { handleYear(e)} } />
                    <p className="currentyear">Current Year: {year}</p>
                </div>
                <div className="imdbRating">
                    <label htmlFor="imdbRating">Imdb Rating: </label>
                    <button type=""  name="imdbRating" id="" onClick={() => { handleImdbRating()} }>Change Rating</button>
                    <p className="currentimdbRating">Current Imdb Rating: {imdbRating}</p>
                </div>
                <div className="addMovieButton">
                    <button  id="" onClick={() => { createNewMovie()} }>Add Movie</button>
                </div>
            </div>
        </div>
    )
}

export default MovieForm;