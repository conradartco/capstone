import React from "react";

const TopMovies = (props) => {

    return (
        <div>
            {props.foundContent.map((movie, index) => {
                return (
                    <div key={index}>
                        <div>
                            <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} />
                            <p>{movie.title}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default TopMovies;