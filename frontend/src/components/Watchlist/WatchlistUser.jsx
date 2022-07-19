// General Imports
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TMDbAPIKey } from '../../keys';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';

// Component Imports
import WatchlistRemove from './WatchlistRemove';

const WatchlistUser = (props) => {

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
                let watchArray = [];
                for (let i = 0; i < (response.data).length; i++) {
                    watchArray.push([(response.data)[i].movie_id]);
                }
                setWatchlist(watchArray);
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
                } else {
                    return (console.log("No movies in watchlist"))
                }
                movieResults.push(foundMovies);
            }
            let resultFlat = movieResults.flat(2);
            setMyMovies(resultFlat);
        }
        getMoviesById();
    }, [watchlist]);

    return (
        <div>
            {myMovies.map((movie, index) => {
                return (
                    <div key={index}>
                        <div onClick={() => selectMovie(movie)}>
                            <img src={"https://image.tmdb.org/t/p/w154" + movie.poster_path} alt={movie.title + " movie poster"}/>
                            {/* <p>{movie.title}</p> */}
                        </div>
                        <WatchlistRemove movieId={movie.id} reRender={props.reRender}/>
                    </div>
                )
            })}
        </div>
    )
}

export default WatchlistUser;