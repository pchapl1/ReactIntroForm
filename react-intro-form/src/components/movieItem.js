import {React, useState} from "react";

const MovieItem = (props) => {
    const movie = props.movie
    const index = props.index

    return (
        <div key={index} className="movieItem">
            <h2>Title: {movie.title}</h2>
            <p>Actors: {movie.actors}</p>
            <p>Plot: {movie.plot}</p>
            <p>Year: {movie.year}</p>
            <p>imdbRating: {movie.imdbRating}</p>

        </div>
    )
}

export default MovieItem;