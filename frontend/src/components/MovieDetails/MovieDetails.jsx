// General Imports
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

// Component Imports
import WatchlistButton from "../Watchlist/WatchlistButton";
import FavoritesButton from "../Favorites/FavoritesButton";


const MovieDetails = (props) => {

    const { user } = useContext(AuthContext);

    return (
        <div>
            <div>
                <img src={"https://image.tmdb.org/t/p/w342" + props.movieContent.poster_path} alt={props.movieContent.title + " movie poster"}/>
            </div>
            <div>
                <div>
                    <h2>{props.movieContent.title}</h2>
                </div>
                <div>
                    <div>
                        <div>
                            <p>{props.movieContent.release_date} / {props.movieContent.runtime} minutes</p>
                        </div>
                        <div>
                            <p>Director: </p>
                        </div>
                        <div>
                            {user ? (
                                <div>
                                    <WatchlistButton movieContent={props.movieContent}/>
                                    <FavoritesButton movieContent={props.movieContent}/>
                                </div>
                            ) : (
                                <p></p>
                            )}
                        </div>
                        <div>
                            <p>{props.movieContent.overview}</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>{props.movieContent.vote_average}/10</p>
                        </div>
                        <div>
                            <p>cast</p>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default MovieDetails;