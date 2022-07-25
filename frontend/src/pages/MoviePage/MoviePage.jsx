// General Imports
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TMDbAPIKey } from '../../keys';

// Component Imports
import ReviewList from '../../components/Review/ReviewList';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import MovieMedia from '../../components/MovieMedia/MovieMedia';
import MovieProviders from '../../components/MovieProviders/MovieProviders';
import MovieImages from '../../components/MovieImages/MovieImages';
import './MoviePage.css';

const MoviePage = (props) => {

    const [movieSelect, setMovieSelect] = useState(null);
    const navigate = useNavigate();
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
        // return () => {
        //     setMovieSelect(null)
        // }
    }, [props.movieSelect.id]);
   
    return (
        <div>
            {movieSelect ?
            <>
            <div>
                <MovieImages movieContent={movieSelect} />
            </div>
            </>
            : null}
            <div>
                {movieSelect ?
                <>
                <div>
                    <MovieDetails movieContent={movieSelect}/>
                </div>
                <div className='bottom-content'>
                    <div>
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
                </div>
                </>
                :null}
            </div>
            <div className='back-container'>
                <button className='back-button' onClick={() => navigate(-1)}>Back</button>
            </div>
        </div>
    )
}

export default MoviePage;