// General Imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Component Imports
import Review from './Review';

const ReviewList = (props) => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const getReviews = async () => {
            try {
                let response = await axios.get("http://127.0.0.1:8000/api/review/" + props.movieContent.id);
                setReviews(response.data);
            } catch (err) {
                console.log("err in getReviews: ", err);
            }
        }
        getReviews();
    }, [props.reRender]);

    return (
        <div>
            <Review reviewContent={reviews} reRender={props.reRender}/>
        </div>
    )
}

export default ReviewList;