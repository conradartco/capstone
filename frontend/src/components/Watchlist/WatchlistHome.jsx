// General Imports
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TMDbAPIKey } from '../../keys';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';

// Component Imports
import '../../App.css';

const WatchlistHome = (props) => {

    const navigate = useNavigate();
    const [watchlist, setWatchlist] = useState([]);
    const [myMovies, setMyMovies] = useState([]);
    const { token } = useContext(AuthContext);

    function selectMovie(movie) {
        props.movieSelect(movie);
        navigate('/movie');
    }

    useEffect(() => {
        const getWatchlist = async () => {
            try {
                let response = await axios.get("http://127.0.0.1:8000/api/watchlist/", {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                });
                // console.log("response.data in getWatchlist: ", response.data);
                let watchArray = [];
                for (let i = 0; i < (response.data).length; i++) {
                    watchArray.push([(response.data)[i].movie_id]);
                }
                // console.log("watchArray in getWatchList: ", watchArray);
                setWatchlist(watchArray);
                // console.log("watchlist after for loop: ", watchlist);
            } catch (err) {
                console.log("err in getWatchlist: ", err);
            }
        }
        getWatchlist();
    }, []);

    useEffect(() => {
        const getMoviesById = async () => {
            let movieResults = [];
            for (let i = 0; i < watchlist.length; i++) {
                let foundMovies = [];
                if(watchlist.length > 0){
                    let response = await axios.get("https://api.themoviedb.org/3/movie/" + watchlist[i] + "?api_key=" + TMDbAPIKey + "&language=en-US");
                    foundMovies.push(response.data);
                    // console.log("response.data in getMoviesById: ", response.data);
                } else {
                    return (console.log("No movies in watchlist"))
                }
                // console.log("foundMovies in getMoviesById: ", foundMovies);
                movieResults.push(foundMovies);
            }
            // console.log("movieResults in getMoviesById: ", movieResults);
            let resultFlat = movieResults.flat(2);
            // console.log("resultFlat in getMoviesById: ", resultFlat);
            setMyMovies(resultFlat);
        }
        getMoviesById();
    }, [watchlist]);

    return (
        <div className="movie-list-viewport">
            {myMovies.map((movie, index) => {
                return (
                    <div key={index}>
                        <div className='movie-list-icon' onClick={() => selectMovie(movie)}>
                            <img src={"https://image.tmdb.org/t/p/w154" + movie.poster_path} alt={movie.title + " movie poster"}/>
                            {/* <p>{movie.title}</p> */}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default WatchlistHome;