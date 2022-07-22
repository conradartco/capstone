// General Imports
import React, { useState, useEffect } from 'react';
import { TMDbAPIKey } from '../../keys';
import axios from 'axios';

// Component Imports
import MovieImagesMap from './MovieImagesMap';

const MovieImages = (props) => {

    const [images, setImages] = useState(undefined);

    // console.log("props.movieContent in MovieImages: ", props.movieContent);

    const getMovieImages = async () => {
        try {
            let response = await axios.get("https://api.themoviedb.org/3/movie/" + props.movieContent.id + "/images?api_key=" + TMDbAPIKey + "&language=en-US&include_image_language=en,null");
            console.log("response in getMovieImages: ", response.data);
            setImages(response.data);
        } catch (err) {
            console.log("err in getMovieImages: ", err);
        }
    }

    useEffect(() => {
        getMovieImages();
    }, []);

    return (
        <div>
            {images !== undefined ?
            <>
            <MovieImagesMap imageContent={images}/>
            {images.logos.map((logo, index) => {
                return(
                    <div key={index}>
                        <img src={"https://image.tmdb.org/t/p/w154" + logo.file_path} alt={props.movieContent.title + " logo image " + index}/>
                    </div>
                )
            })}
            {images.backdrops.map((backdrop, index) => {
                return(
                    <div key={index}>
                        <img src={"https://image.tmdb.org/t/p/w300" + backdrop.file_path} alt={props.movieContent.title + " backdrop image " + index}/>
                    </div>
                )
            })}
            {/* {images.posters.map((poster, index) => {
                return(
                    <div key={index}>
                        <img src={"https://image.tmdb.org/t/p/w185" + poster.file_path} alt={props.movieContent.title + " poster image " + index}/>
                    </div>
                )
            })} */}
            </>
            : null}
        </div>
    )
}

export default MovieImages;