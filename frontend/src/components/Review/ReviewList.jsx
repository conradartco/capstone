// General Imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth'

// Component Imports
import Review from './Review';
import ReviewForm from './ReviewForm';

const ReviewList = (props) => {

    const [user, token] = useAuth();
    const [reviews, setReviews] = useState([]);

    const getReviews = async () => {
        try {
            let response = await axios.get("http://127.0.0.1:8000/api/review/" + props.movieContent.id + "/");
            // console.log("response.data in getReviews: ", response.data);
            setReviews(response.data);
        } catch (err) {
            console.log("err in getReviews: ", err);
        }
    }
    
    async function addNewReview(newReview) {
        let response = await axios.post("http://127.0.0.1:8000/api/review/", newReview, {
            headers: {
                Authorization: "Bearer " + token,
            },
        });
        if(response.status === 201){
            console.log(newReview);
            getReviews()
        }
    }

    useEffect(() => {
        getReviews();
    }, [props.movieContent.id]);

    return (
        <div>
            <div>
                <Review reviewContent={reviews} />
            </div>
            
            {user ? (
                <div>
                    <ReviewForm movieContent={props.movieContent} addNewReview={addNewReview}/>
                </div>
            ) : (
                <p>Login or Register to leave a review!</p>
            )}
        </div>
    )
}

export default ReviewList;