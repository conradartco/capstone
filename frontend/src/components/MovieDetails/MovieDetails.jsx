// General Imports
import React, { useState, useEffect } from 'react';
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { TMDbAPIKey } from '../../keys';
import axios from 'axios';

// Component Imports
import WatchlistButton from "../Watchlist/WatchlistButton";
import FavoritesButton from "../Favorites/FavoritesButton";
import MovieDirector from "./MovieDirector";
import MovieCast from './MovieCast';

const MovieDetails = (props) => {

    const { user } = useContext(AuthContext);
    const [credits, setCredits] = useState(undefined);
 
    const getMovieCredits = async () => {
        try {
            let response = await axios.get("https://api.themoviedb.org/3/movie/" + props.movieContent.id + "/credits?api_key=" + TMDbAPIKey + "&language=en-US");
            // console.log("response in getMovieCredits: ", response.data);
            setCredits(response.data);
        } catch (err) {
            console.log("err in getMovieCredits: ", err);
        }
    }

    useEffect(() => {
        getMovieCredits();
    }, []);

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
                            <p>{props.movieContent.release_date.slice(0, 4)} / {props.movieContent.runtime} minutes</p>
                        </div>
                        {credits !== undefined ?
                        <>
                        <div>
                            <MovieDirector crewDetails={credits} />
                        </div>
                        </>
                        : null}
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
                        {credits !== undefined ?
                        <>
                        <div>
                            <MovieCast crewDetails={credits} />
                        </div>
                        </>
                        : null}
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default MovieDetails;