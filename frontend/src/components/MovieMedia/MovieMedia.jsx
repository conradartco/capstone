// General Imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TMDbAPIKey } from '../../keys';

// Component Imports
import MovieVideoMap from './MovieVideoMap';

const MovieMedia = (props) => {

    const [movieVideos, setMovieVideos] = useState([]);

    const getMovieVideos = async () => {
        try {
            let response = await axios.get("https://api.themoviedb.org/3/movie/" + props.movieContent.id + "/videos?api_key=" + TMDbAPIKey + "&language=en-US");
            // console.log("response.data.results in getMovieVideos: ", response.data.results);
            setMovieVideos(response.data.results);
        } catch (err) {
            console.log("err in getMovieVideos: ", err);
        }
    }

    useEffect(() => {
        getMovieVideos();
    }, [props.movieContent]);

    return (
        <div>
            <MovieVideoMap videoResults={movieVideos}/>
        </div>
    )
}

export default MovieMedia;