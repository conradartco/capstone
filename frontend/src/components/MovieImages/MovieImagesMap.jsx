// General Imports
import React from 'react';

// Component Imports
import MovieImagesSlideshow from './MovieImagesSlideshow';


const MovieImagesMap = (props) => {

    const backgroundImageURLs = props.imageContent.backdrops.map((backdrop)  => {
        return ("https://image.tmdb.org/t/p/original" + backdrop.file_path)
    })
    // console.log(backgroundImageURLs);

    return (
        <div>
            <MovieImagesSlideshow imageURLs={backgroundImageURLs} />
        </div>
    )
}

export default MovieImagesMap;