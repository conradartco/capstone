import React from "react";


const FoundMovies = (props) => {

    return (
        <div>
            {props.foundContent.map((movie, index) => {
                return (
                    <div key={index}>
                        <div>
                            {console.log("movie in FoundMovies map: ", movie)}
                            <p>{movie.title}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default FoundMovies;