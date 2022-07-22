// General Imports
import React from 'react';
import { Slide } from 'react-slideshow-image';

// Component Imports
import './MovieImages.css';
import '../../../node_modules/react-slideshow-image/dist/styles.css';

const MovieImagesSlideshow = (props) => {

    const imageURLs = props.imageContent.backdrops.map((backdrop)  => {
        return ("https://image.tmdb.org/t/p/original" + backdrop.file_path)
    })
    // console.log("imageURLs in MovieImagesSlideshow: ", imageURLs);

    return (
        <Slide autoplay={false}>
            {imageURLs.map((image, index) => {
                return (
                    <div key={index}>
                        <div className='bg-style-new' style={{ 'backgroundImage': 'url(' + image + ')' }} />
                    </div>
                )
            }).slice(0, 6)}
        </Slide>
    )
}

export default MovieImagesSlideshow;