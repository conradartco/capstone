import React from 'react';


const MovieVideoMap = (props) => {

    return (
        <div>
            {props.videoResults.map((video, index) => {
                return (
                    <div key={index}>
                        <iframe width="300" height="169" title={video.name} src={"https://www.youtube.com/embed/" + video.key} />
                    </div>
                )
            })}
        </div>
    )
}

export default MovieVideoMap;