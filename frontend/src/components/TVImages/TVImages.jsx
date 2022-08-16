// General Imports
import React, { useState, useEffect } from 'react';
import { TMDbAPIKey } from '../../keys';
import axios from 'axios';

// Component Imports
import MovieImagesFade from '../MovieImages/MovieImagesFade';
import '../MovieImages/MovieImages.css';

const TVImages = (props) => {

    const [images, setImages] = useState(undefined);

    // console.log("props.movieContent in MovieImages: ", props.movieContent);

    const getTVImages = async () => {
        try {
            let response = await axios.get("https://api.themoviedb.org/3/tv/" + props.tvContent.id + "/images?api_key=" + TMDbAPIKey + "&language=en-US&include_image_language=en,null");
            // console.log("response in getTVImages: ", response.data);
            setImages(response.data);
        } catch (err) {
            console.log("err in getTVImages: ", err);
        }
    }

    useEffect(() => {
        getTVImages();
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

export default TVImages;