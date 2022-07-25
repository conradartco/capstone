// General Imports
import React, { useState } from 'react';
import axios from "axios";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

// Component Imports

const FavoritesButton = (props) => {

    const { token } = useContext(AuthContext);
    const [state, setState] = useState("active");

    async function addToFavorites(movie) {
        try {
            let response = await axios.post("http://127.0.0.1:8000/api/favorites/add/", movie, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            });
            console.log("movie added to favorites: ", movie);
            console.log("response in addToFavorites: ", response);
        } catch (err) {
            console.log("err in addToFavorites: ", err);
        }   
    }

    function handleClick(event) {
        event.preventDefault();
        setState(current => !current);
        let favoriteMovie = {
            movie_id: props.movieContent.id
        }
        addToFavorites(favoriteMovie);
    }

    return (
        <div className='add-button-effect'>
            <button style={{ backgroundColor: state === "active" ? "lightgray" : "darkseagreen" }} className="movie-add-buttons" onClick={handleClick}><i style={{ color: "black" }} className="fa-solid fa-star fa-2xl"/><span className="button-text">Favorites</span></button>
        </div>
    )
}

export default FavoritesButton;