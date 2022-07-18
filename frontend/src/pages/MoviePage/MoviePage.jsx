import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TMDbAPIKey } from '../../keys';


const MoviePage = (props) => {

    const [movieSelect, setMovieSelect] = useState([]);

    useEffect(() => {
        const getSelectedMovie = async () => {
            try {
                let response = await axios.get("https://api.themoviedb.org/3/movie/" + props.movieSelect.id + "?api_key=" + TMDbAPIKey + "&language=en-US");
                console.log("response in getSelectedMovie: ", response);
                setMovieSelect(response.data);
            } catch (err) {
                console.log("err in getSelectedMovie: ", err);
            }
        }
        getSelectedMovie();
    }, [props.movieSelect]);

    return (
        <div>
            <img src={"https://image.tmdb.org/t/p/w342" + movieSelect.poster_path} alt={movieSelect.title + " movie poster"}/>
            {console.log("movieSelect in MoviePage body div: ", movieSelect)}
            <p>{movieSelect.title}</p>
        </div>
    )
}

export default MoviePage;