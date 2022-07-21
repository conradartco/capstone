// General Imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TMDbAPIKey } from '../../keys';

// Component Imports
import ReviewList from '../../components/Review/ReviewList';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import MovieMedia from '../../components/MovieMedia/MovieMedia';
import MovieProviders from '../../components/MovieProviders/MovieProviders';

const MoviePage = (props) => {

    const [movieSelect, setMovieSelect] = useState(null);
    // const [reRender, setReRender] = useState(true);

    const getSelectedMovie = async () => {
        try {
            let response = await axios.get("https://api.themoviedb.org/3/movie/" + props.movieSelect.id + "?api_key=" + TMDbAPIKey + "&language=en-US");
            // console.log("response in getSelectedMovie: ", response);
            setMovieSelect(response.data);
        } catch (err) {
            console.log("err in getSelectedMovie: ", err);
        }
    }

    useEffect(() => {
        getSelectedMovie();
    }, [props.movieSelect.id]);

   
    return (
        <div>
            <div>
                <img src={"https://image.tmdb.org/t/p/w342" + props.movieSelect.backdrop_path} alt={props.movieSelect.title + " movie still"}/>
            </div>
            <div>
                {movieSelect ?
                <>
                <div>
                    <MovieDetails movieContent={movieSelect}/>
                </div>
                <div>
                    <h2>Watch Providers</h2>
                    <hr></hr>
                    <MovieProviders movieContent={movieSelect} />
                </div>
                <div>
                    <h2>Media</h2>
                    <hr></hr>
                    <MovieMedia movieContent={movieSelect}/>
                </div>
                <div>
                    <h2>Reviews</h2>
                    <hr></hr>
                </div>
                <div>
                    <ReviewList movieContent={movieSelect} />
                </div>
                </>
                :null}
            </div>
        </div>
    )
}

export default MoviePage;