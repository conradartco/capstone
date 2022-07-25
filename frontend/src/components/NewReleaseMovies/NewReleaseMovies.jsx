// General Imports
import React from "react";
import { useNavigate } from "react-router-dom";

// Component Imports
import "../../App.css";

const NewReleaseMovies = (props) => {

    const navigate = useNavigate();

    function selectMovie(movie) {
        props.movieSelect(movie);
        navigate('/movie');
    }

    return (
        <div className="movie-list-viewport">
            {props.foundContent.map((movie, index) => {
                return (
                    <div key={index}>
                        <div className='movie-list-icon' onClick={() => selectMovie(movie)}>
                            <img src={"https://image.tmdb.org/t/p/w185" + movie.poster_path} alt={movie.title + " movie poster"}/>
                            <p><small><strong>{movie.title}</strong> {'('+movie.release_date.slice(0, 4)+')'}</small></p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default NewReleaseMovies;