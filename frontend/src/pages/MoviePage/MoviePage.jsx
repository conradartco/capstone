// General Imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TMDbAPIKey } from '../../keys';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';

// Component Imports
import ReviewList from '../../components/Review/ReviewList';
import ReviewForm from '../../components/Review/ReviewForm';
import MovieDetails from '../../components/MovieDetails/MovieDetails';

const MoviePage = (props) => {

    const [movieSelect, setMovieSelect] = useState([]);
    const { token } = useContext(AuthContext);
    const [reRender, setReRender] = useState(true);

    useEffect(() => {
        const getSelectedMovie = async () => {
            try {
                let response = await axios.get("https://api.themoviedb.org/3/movie/" + props.movieSelect.id + "?api_key=" + TMDbAPIKey + "&language=en-US");
                console.log("response in getSelectedMovie: ", response);
                setMovieSelect(response.data);
            } catch (err) {
                console.log("err in getSelectedMovie: ", err);
            }
        }
        getSelectedMovie();
    }, [props.movieSelect]);

    async function addNewReview(newReview) {
        let response = await axios.post("http://127.0.0.1:8000/api/review/", newReview, {
            headers: {
                Authorization: "Bearer " + token,
            },
        });
        if(response.status === 201){
            console.log(newReview);
            setReRender(!reRender);
        }
    }

    return (
        <div>
            <div>
                <img src={"https://image.tmdb.org/t/p/w342" + props.movieSelect.backdrop_path} alt={props.movieSelect.title + " movie still"}/>
            </div>
            <div>
                <div>
                    <MovieDetails movieContent={movieSelect}/>
                </div>
                <div>
                    <ReviewList movieContent={movieSelect} reRender={reRender}/>
                </div>
                <div>
                    <ReviewForm movieContent={movieSelect} addNewReview={addNewReview}/>
                </div>
            </div>
            
        </div>
    )
}

export default MoviePage;