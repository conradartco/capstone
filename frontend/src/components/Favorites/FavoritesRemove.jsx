// General Imports
import React, { useState } from 'react';
import axios from "axios";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

// Component Imports
import '../../pages/UserProfilePage/UserProfilePage.css';

const FavoritesRemove = (props) => {

    const { token } = useContext(AuthContext);
    const [reRender, setReRender] = useState(true);

    async function removeFavoriteItem(movie) {
        try {
            let response = await axios.delete("http://127.0.0.1:8000/api/favorites/remove/" + movie + "/", {
                headers: {
                    Authorization: "Bearer " + token,
                },
            });
            console.log("response in removeFavoriteItem: ", response);
            if(response.status === 204){
                setReRender(!reRender);
            }
        } catch (err) {
            console.log("err in removeFavoriteItem: ", err);
        }   
    }

    return (
        <div className='remove-container'>
            <button className='remove-button' onClick={() => removeFavoriteItem(props.movieId)} ><i style={{ color: "gray" }} className="fa-solid fa-circle-minus fa-3x"/></button>
        </div>
    )
}

export default FavoritesRemove;