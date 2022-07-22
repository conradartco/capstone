import React from 'react';
import './MovieMedia.css';

const MovieVideoMap = (props) => {

    return (
        <div className='video-container'>
            {props.videoResults.map((video, index) => {
                return (
                    <div key={index}>
                        <iframe className='video-player' width="1920" height="1080" frameBorder="0" allowFullScreen='allowFullScreen' title={video.name} src={"https://www.youtube.com/embed/" + video.key} />
                    </div>
                )
            }).slice(0, 8)}
        </div>
    )
}

export default MovieVideoMap;