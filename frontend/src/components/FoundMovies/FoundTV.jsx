// General Imports
import React from "react";
import { useNavigate } from "react-router-dom";

// Component Imports
import nullImage from "../../images/MOVIE-NOIMAGE-2.jpg";
import "../../App.css";

const FoundTV = (props) => {

    const navigate = useNavigate();

    function selectTV(show) {
        props.tvSelect(show);
        navigate('/tv');
    }

    return (
        <div className="movies-found-viewport">
            {props.foundContent.map((show, index) => {
                return (
                    <div key={index}>
                        <div className="movies-found-icon" onClick={() => selectTV(show)}>
                            {show.poster_path !== null ? (
                                <img className="poster-fit" src={"https://image.tmdb.org/t/p/w342" + show.poster_path} alt={show.title + " show poster"}/>
                            ) : (
                                <img src={nullImage} alt={"empty image for " + show.title}/>
                            )}
                            <p><small><strong>{show.title}</strong> {show.release_date !== undefined ? '('+show.release_date.slice(0, 4)+')' : null}</small></p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default FoundTV;