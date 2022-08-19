// General Imports
import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { TMDbAPIKey } from '../../keys';
import axios from 'axios';

// Component Imports
import MovieDetailsRatingBar from '../MovieDetails/MovieDetailsRatingBar';
import TVCast from './TVCast';
import WatchlistButton from '../Watchlist/WatchlistButton';
import FavoritesButton from '../Favorites/FavoritesButton';
import '../MovieDetails/MovieDetails.css';

const TVDetails = (props) => {

    const { user } = useContext(AuthContext);
    const [credits, setCredits] = useState(undefined);

    let genreArray = props.sourceContent.genres.map(genre => genre.name);

    function runtimeOperation(x) {
        var time = x;
        var hours = (time / 60);
        var totalHours = Math.floor(hours);
        var minutes = (hours - totalHours) * 60;
        var totalMinutes = Math.round(minutes);
        return totalHours + "h " + totalMinutes + "m";
    }

    const getTVCredits = async () => {
        try {
            let response = await axios.get("https://api.themoviedb.org/3/tv/" + props.sourceContent.id + "/aggregate_credits?api_key=" + TMDbAPIKey + "&language=en-US")
            console.log("response in getTVCredits: ", response.data);
            setCredits(response.data);
        } catch (err) {
            console.log("err in getTVCredits: ", err);
        }
    }

    useEffect(() => {
        getTVCredits();
    }, []);

    return (
        <div className='movie-card'>
            <div className='movie-poster-and-details'>
                <div>
                    <img className='poster-image' src={"https://image.tmdb.org/t/p/w500" + props.sourceContent.poster_path} alt={props.sourceContent.name} />
                </div>
                <div>
                    <div>
                        <h2 className='movie-headline'>{props.sourceContent.name}</h2>
                        <div className='rating-bar'>
                            <MovieDetailsRatingBar color="darkgray" percentage={Math.round((props.sourceContent.vote_average / 10) * 100)} height={25} />
                        </div>
                        <hr></hr>
                    </div>
                    <div>
                        <div className='details-flex'>
                            <div className='cert-and-info'>
                                <p>{props.sourceContent.first_air_date.slice(0, 4)} – {props.sourceContent.last_air_date.slice(0, 4)} <span className='us-tag'>{"(US)"}</span> {runtimeOperation(props.sourceContent.episode_run_time)}</p>
                            </div>
                            <p>{genreArray.join(" / ")}</p>
                            {props.sourceContent.in_production === false ? (
                                <p className='not-in-prod'><strong>No longer in production</strong></p>
                            ) : (
                                <p className='is-in-prod'><strong>Currently in production</strong></p>
                            )}
                            {user ? (
                                <div className='user-add-buttons'>
                                    <WatchlistButton movieContent={props.sourceContent}/>
                                    <FavoritesButton movieContent={props.sourceContent}/>
                                </div>
                            ) : (
                                <p></p>
                            )}
                        </div>
                        <p className='movie-tagline'>{props.sourceContent.tagline}</p>
                        <p><strong>Format: </strong>{props.sourceContent.type}</p>
                        <div>
                            <p className='overview-tag'><strong>Overview</strong></p>
                            <p className='overview-body'>{props.sourceContent.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
            {credits !== undefined ?
            <div>
                <TVCast crewDetails={credits} sourceContent={props.sourceContent}/>
            </div>
            : null}
        </div>
    )
}

export default TVDetails;