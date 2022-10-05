import {React, useState} from "react";


const MovieForm = (props) => {

    const [state, setState] = useState({
        title: "", 
        director: "",
        actors: "",
        plot: "",
        year: 2000,
    })

    const [imdbRating, setImdbRating] = useState(0)

    const handleChange = (e) => {
        const value = e.target.value
        setState({
            ...state,
            [e.target.name] : value
        })
    }

    const handleClick = () => {
        setImdbRating(imdbRating + .1)
    }

    return (

        <div className="movieFormContainer">
            <div className="title">
                <h1>Movie Form</h1>
            </div>            
            <div className="form">
                <div className="movieTitle">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" id="" onChange={(e) => { handleChange(e)} } />
                    <p className="currentTitle">Current Title: {state.title}</p>
                </div>
                <div className="movieDirector">
                    <label htmlFor="director">Director: </label>
                    <input type="text" name="director" id="" onChange={(e) => { handleChange(e)} } />
                    <p className="currentDirector">Current Director: {state.director}</p>
                </div>
                <div className="movieActors">
                    <label htmlFor="title">Actors: </label>
                    <input type="text" name="actors" id="" onChange={(e) => { handleChange(e)} } />
                    <p className="currentActors">Current Actors: {state.actors}</p>
                </div>
                <div className="moviePlot">
                    <label htmlFor="plot">Plot: </label>
                    <input type="text" name="plot" id="" onChange={(e) => { handleChange(e)} } />
                    <p className="currentPlot">Current Plot: {state.plot}</p>
                </div>
                <div className="movieYear">
                    <label htmlFor="year">Year: </label>
                    <input type="number" name="year" id="" onChange={(e) => { handleChange(e)} } />
                    <p className="currentyear">Current Year: {state.year}</p>
                </div>
                <div className="imdbRating">
                    <label htmlFor="imdbRating">Imdb Rating: </label>
                    <button type=""  name="imdbRating" id="" onClick={() => { handleClick()} }>Change Rating</button>
                    <p className="currentimdbRating">Current Imdb Rating: {imdbRating}</p>
                </div>
            </div>
        </div>
    )
}

export default MovieForm;