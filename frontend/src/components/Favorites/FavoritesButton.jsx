// General Imports
import axios from "axios";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const FavoritesButton = (props) => {

    const { token } = useContext(AuthContext);

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
        let favoriteMovie = {
            movie_id: props.movieContent.id
        }
        addToFavorites(favoriteMovie);
    }

    return (
        <div>
            <button onClick={handleClick}>Favorites</button>
        </div>
    )
}

export default FavoritesButton;