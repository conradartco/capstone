import React from 'react';
import { Slide } from 'react-slideshow-image';
import './MovieImages.css';
import '../../../node_modules/react-slideshow-image/dist/styles.css';

const MovieImagesSlideshow = (props) => {

    const images = props.imageURLs;
    // console.log("images in MovieImagesSlideshow: ", images);

    return (
        <Slide autoplay={false}>
            <div>
                <div className='bg-style-new' style={{ 'backgroundImage': 'url(' + images[0] + ')' }}>
                </div>
            </div>
            <div>
                <div className='bg-style-new' style={{ 'backgroundImage': 'url(' + images[1] + ')' }}>
                </div>
            </div>
            <div>
                <div className='bg-style-new' style={{ 'backgroundImage': 'url(' + images[2] + ')' }}>
                </div>
            </div>
        </Slide>
    )
}

export default MovieImagesSlideshow;