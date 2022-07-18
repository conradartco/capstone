import React from "react";
import { useNavigate } from "react-router-dom";

const FoundMovies = (props) => {

    const navigate = useNavigate();

    function selectMovie(movie) {
        props.movieSelect(movie);
        navigate('/movie');
    }

    return (
        <div>
            {props.foundContent.map((movie, index) => {
                return (
                    <div key={index}>
                        <div onClick={() => selectMovie(movie)}>
                            <img src={"https://image.tmdb.org/t/p/w154" + movie.poster_path} alt={movie.title + " movie poster"}/>
                            {/* <p>{movie.title}</p> */}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default FoundMovies;