import React from 'react';


const MovieVideoMap = (props) => {

    return (
        <div>
            {props.videoResults.slice(0, 3).map((video, index) => {
                return (
                    <div key={index}>
                        <iframe width="300" height="169" allow='fullscreen' title={video.name} src={"https://www.youtube.com/embed/" + video.key} />
                    </div>
                )
            })}
        </div>
    )
}

export default MovieVideoMap;