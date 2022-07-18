// General Imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TMDbAPIKey } from '../../keys';
import useAuth from '../../hooks/useAuth';

// Component Imports
import ReviewList from '../../components/Review/ReviewList';
import ReviewForm from '../../components/Review/ReviewForm';

const MoviePage = (props) => {

    const [movieSelect, setMovieSelect] = useState([]);
    const [user, token] = useAuth();
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
                <img src={"https://image.tmdb.org/t/p/w342" + movieSelect.poster_path} alt={movieSelect.title + " movie poster"}/>
                {console.log("movieSelect in MoviePage body div: ", movieSelect)}
                <p>{movieSelect.title}</p>
            </div>
            <div>
                <ReviewList movieContent={movieSelect} reRender={reRender}/>
            </div>
            <div>
                <ReviewForm movieContent={movieSelect} addNewReview={addNewReview}/>
            </div>
        </div>
    )
}

export default MoviePage;