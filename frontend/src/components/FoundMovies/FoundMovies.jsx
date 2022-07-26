// General Imports
import React from "react";
import { useNavigate } from "react-router-dom";

// Component Imports
import nullImage from "../../images/MOVIE-NOIMAGE-2.jpg";
import "../../App.css";

const FoundMovies = (props) => {

    const navigate = useNavigate();

    function selectMovie(movie) {
        props.movieSelect(movie);
        navigate('/movie');
    }

    return (
        <div className="movies-found-viewport">
            {props.foundContent.map((movie, index) => {
                return (
                    <div key={index}>
                        <div className="movies-found-icon" onClick={() => selectMovie(movie)}>
                            {movie.poster_path !== null ? (
                                <img className="poster-fit" src={"https://image.tmdb.org/t/p/w342" + movie.poster_path} alt={movie.title + " movie poster"}/>
                            ) : (
                                <img src={nullImage} alt={"empty image for " + movie.title}/>
                            )}
                            <p><small><strong>{movie.title}</strong> {movie.release_date !== undefined ? '('+movie.release_date.slice(0, 4)+')' : null}</small></p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default FoundMovies;