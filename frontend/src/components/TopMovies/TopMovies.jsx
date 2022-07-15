import React from "react";

const TopMovies = (props) => {

    return (
        <div>
            {props.foundContent.map((movie, index) => {
                return (
                    <div key={index}>
                        <div>
                            <img src={"https://image.tmdb.org/t/p/w154" + movie.poster_path} alt={movie.title + " movie poster"}/>
                            {/* <p>{movie.title}</p> */}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default TopMovies;