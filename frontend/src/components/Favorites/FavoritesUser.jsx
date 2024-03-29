// General Imports
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TMDbAPIKey } from '../../keys';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';

// Component Imports
import FavoritesRemove from './FavoritesRemove';
import '../../pages/UserProfilePage/UserProfilePage.css';

const FavoritesUser = (props) => {

    const navigate = useNavigate();
    const [favorites, setFavorites] = useState([]);
    const [myMovies, setMyMovies] = useState(undefined);
    const { token } = useContext(AuthContext);

    function selectMovie(movie) {
        props.movieSelect(movie);
        navigate('/movie');
    }

    const getFavorites = async () => {
        try {
            let response = await axios.get("http://127.0.0.1:8000/api/favorites/", {
                headers: {
                    Authorization: "Bearer " + token,
                },
            });
            let favoriteArray = [];
            for (let i = 0; i < (response.data).length; i++) {
                favoriteArray.push([(response.data)[i].movie_id]);
            }
            setFavorites(favoriteArray);
        } catch (err) {
            console.log("err in getFavorites: ", err);
        }
    }

    useEffect(() => {
        getFavorites();
    }, [favorites]);

    const getMoviesById = async () => {
        let movieResults = [];
        for (let i = 0; i < favorites.length; i++) {
            let foundMovies = [];
            if(favorites.length > 0){
                let response = await axios.get("https://api.themoviedb.org/3/movie/" + favorites[i] + "?api_key=" + TMDbAPIKey + "&language=en-US");
                foundMovies.push(response.data);
            } else {
                return (console.log("No movies in favorites"))
            }
            movieResults.push(foundMovies);
        }
        let resultFlat = movieResults.flat(2);
        setMyMovies(resultFlat);
    }

    useEffect(() => {
        getMoviesById();
    }, [myMovies]);

    return (
        <div className="user-list-viewport">
            {myMovies !== undefined ?
            <>
            {myMovies.map((movie, index) => {
                return (
                    <div className='user-list-container' key={index}>
                        <FavoritesRemove movieId={movie.id}/>
                        <div className='movie-list-icon' onClick={() => selectMovie(movie)}>
                            <img src={"https://image.tmdb.org/t/p/w154" + movie.poster_path} alt={movie.title + " movie poster"}/>
                            <p><small><strong>{movie.title}</strong> {'('+movie.release_date.slice(0, 4)+')'}</small></p>
                        </div>
                        
                    </div>
                )
            })}
            </>
            : null }
        </div>
    )
}

export default FavoritesUser;