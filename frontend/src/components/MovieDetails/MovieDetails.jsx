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
import MovieCert from './MovieCert';
import MovieDetailsRatingBar from './MovieDetailsRatingBar';
import './MovieDetails.css';

const MovieDetails = (props) => {

    const { user } = useContext(AuthContext);
    const [credits, setCredits] = useState(undefined);
    const [cert, getCert] = useState(undefined);
 
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

    const getMovieCert = async () => {
        try {
            let response = await axios.get("https://api.themoviedb.org/3/movie/" + props.movieContent.id + "/release_dates?api_key=" + TMDbAPIKey);
            // console.log("response.data.results in getMovieCert: ", response.data.results);
            getCert(response.data.results)
        } catch (err) {
            console.log("err in getMovieCert: ", err);
        }
    }

    useEffect(() => {
        getMovieCert();
    }, []);

    let genreArray = props.movieContent.genres.map(genre => genre.name);

    function runtimeOperation(x) {
        var time = x;
        var hours = (time / 60);
        var totalHours = Math.floor(hours);
        var minutes = (hours - totalHours) * 60;
        var totalMinutes = Math.round(minutes);
        return totalHours + "h " + totalMinutes + "m";
    }

    return (
        <div className='movie-card'>
            <div className='movie-poster-and-details'>
                <div>
                    <img className='poster-image' src={"https://image.tmdb.org/t/p/w500" + props.movieContent.poster_path} alt={props.movieContent.title + " movie poster"}/>
                </div>
                <div>
                    <div>
                        <h2 className='movie-headline'>{props.movieContent.title} <span className='release-year'>{"(" + props.movieContent.release_date.slice(0, 4) + ")"}</span></h2>
                        <div className="rating-bar">
                            <MovieDetailsRatingBar color="darkgray" percentage={Math.round((props.movieContent.vote_average / 10) * 100)} height={25} />
                        </div>
                        <hr></hr>
                    </div>
                    <div>
                        <div className='details-flex'>
                            <div className='cert-and-info'>
                                {cert !== undefined ?
                                    <MovieCert releaseInfo={cert} />
                                : null}
                                <p>{props.movieContent.release_date.slice(5, 7)} . {props.movieContent.release_date.slice(8, 10)} . {props.movieContent.release_date.slice(0, 4)} <span className='us-tag'>{"(US)"}</span> {runtimeOperation(props.movieContent.runtime)}</p>
                            </div>
                            
                            <p>{genreArray.join(" / ")}</p>
                            {credits !== undefined ?
                                <MovieDirector crewDetails={credits} />
                            : null}
                            {user ? (
                                <div className='user-add-buttons'>
                                    <WatchlistButton movieContent={props.movieContent}/>
                                    <FavoritesButton movieContent={props.movieContent}/>
                                </div>
                            ) : (
                                <p></p>
                            )}
                        </div>
                        
                        <p className='movie-tagline'>{props.movieContent.tagline}</p>
                        <div>
                            <p className='overview-tag'><strong>Overview</strong></p>
                            <p className='overview-body'>{props.movieContent.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
            {credits !== undefined ?
            <div>
                <MovieCast crewDetails={credits} movieContent={props.movieContent}/>
            </div>
            : null}
        </div>
    )
}

export default MovieDetails;