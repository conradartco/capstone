import React from 'react';


const MovieVideoMap = (props) => {

    const parentVideoResults = returnVideos(props.videoResults);

    function returnVideos(results){
        for (let v = 0; (v < results.length && v < 6); v++) {
            return (
                results[v]
            )
        }
    }

    return (
        <div>
            {parentVideoResults.map((video, index) => {
                return (
                    <div>
                        <iframe width="300" height="169" title={video.key} src={"https://www.youtube.com/embed/" + video.key} />
                    </div>
                )
            })}
        </div>
    )
}

export default MovieVideoMap;