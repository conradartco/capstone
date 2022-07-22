// General Imports
import React from 'react';
import { Fade } from 'react-slideshow-image';

// Component Imports
import './MovieImages.css';
import '../../../node_modules/react-slideshow-image/dist/styles.css';

// Img Imports
import leftArrow from '../../images/left-arrow.png';
import rightArrow from '../../images/right-arrow.png';

const MovieImagesFade = (props) => {

    const imageURLs = props.imageContent.backdrops.map((backdrop)  => {
        return ("https://image.tmdb.org/t/p/original" + backdrop.file_path)
    })
    // console.log("imageURLs in MovieImagesSlideshow: ", imageURLs);

    const buttonStyle = {
        width: "30px",
        background: "none",
        border: "0px",
        margin: "5px",
        opacity: "65%"
    }

    const properties = {
        prevArrow: <button style={{ ...buttonStyle }}><img src={leftArrow} alt="header slideshow left arrow"/></button>,
        nextArrow: <button style={{ ...buttonStyle }}><img src={rightArrow} alt="header slideshow right arrow"/></button>
    }

    return (
        <Fade {...properties}>
            {imageURLs.map((image, index) => {
                return (
                    <div key={index}>
                        <img className='bg-style-new' src={image} alt={"header image " + index} />
                    </div>
                )
            }).slice(0, 8)}
        </Fade>
    )
}

export default MovieImagesFade;