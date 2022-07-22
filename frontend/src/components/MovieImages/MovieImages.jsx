// General Imports
import React, { useState, useEffect } from 'react';
import { TMDbAPIKey } from '../../keys';
import axios from 'axios';

// Component Imports
import MovieImagesFade from './MovieImagesFade';
import './MovieImages.css';

const MovieImages = (props) => {

    const [images, setImages] = useState(undefined);

    // console.log("props.movieContent in MovieImages: ", props.movieContent);

    const getMovieImages = async () => {
        try {
            let response = await axios.get("https://api.themoviedb.org/3/movie/" + props.movieContent.id + "/images?api_key=" + TMDbAPIKey + "&language=en-US&include_image_language=en,null");
            // console.log("response in getMovieImages: ", response.data);
            setImages(response.data);
        } catch (err) {
            console.log("err in getMovieImages: ", err);
        }
    }

    useEffect(() => {
        getMovieImages();
    }, []);

    return (
        <div className='fade-container'>
            {images !== undefined ?
            <>
            <MovieImagesFade imageContent={images}/>
            </>
            : null}
        </div>
    )
}

export default MovieImages;