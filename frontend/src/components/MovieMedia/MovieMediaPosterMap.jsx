// General Imports
import React from 'react';

// Component Imports
import Image from './Image';
import './Image.css';

const MovieMediaPosterMap = (props) => {

    const imageURLs = props.imageContent.posters.map((poster)  => {
        return ("https://image.tmdb.org/t/p/original" + poster.file_path)
    })

    return (
        <div className='image-container'>
            {imageURLs.map((image, index) => {
                return (
                    <div key={index}>
                        <Image className="poster_set" src={image} zoom={true}/>
                    </div>
                )
            }).slice(0, 10)}
        </div>
    )
}

export default MovieMediaPosterMap;