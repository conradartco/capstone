// General Imports
import axios from "axios";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const WatchlistButton = (props) => {

    const { token } = useContext(AuthContext);

    async function addToWatchlist(movie) {
        try {
            let response = await axios.post("http://127.0.0.1:8000/api/watchlist/add/", movie, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            });
            console.log("movie added to watchlist: ", movie);
            console.log("response in addToWatchList: ", response);
        } catch (err) {
            console.log("err in addToWatchlist: ", err);
        }   
    }

    function handleClick(event) {
        event.preventDefault();
        let watchlistMovie = {
            movie_id: props.movieContent.id
        }
        addToWatchlist(watchlistMovie);
    }

    return (
        <div>
            <button className="movie-add-buttons" onClick={handleClick}><i style={{ color: "gray" }} className="fa-solid fa-circle-plus fa-2xl"/><span className="button-text">Watchlist</span></button>
        </div>
    )
}

export default WatchlistButton;