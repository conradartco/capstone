// General Imports
import React from 'react';

// Component Imports
import Image from './Image';
import './Image.css';

const MovieMediaImageMap = (props) => {

    const imageURLs = props.imageContent.backdrops.map((backdrop)  => {
        return ("https://image.tmdb.org/t/p/original" + backdrop.file_path)
    })

    return (
        <div className='image-container'>
            {imageURLs.map((image, index) => {
                return (
                    <div key={index}>
                        <Image className="image_set" src={image} zoom={true}/>
                    </div>
                )
            }).slice(0, 10)}
        </div>
    )
}

export default MovieMediaImageMap;