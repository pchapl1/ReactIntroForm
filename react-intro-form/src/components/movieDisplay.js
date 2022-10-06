import {React, useState} from "react";
import MovieItem from "./movieItem";

const MovieDisplay = (props) => {

    return (
        
        <div className="movieDisplay">
            {props.movieList.map((movie, index) => {
                return (
                    <MovieItem movie={movie} key={index}/>
                )
            })}
        </div>
    )
}

export default MovieDisplay;