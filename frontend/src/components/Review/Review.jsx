// General Imports
import React, { useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';

// Component Imports
import "./Review.css";

const Review = (props) => {

    const [reRender, setReRender] = useState(true);
    // const { user } = useContext(AuthContext);

    const likeReview = async (review) => {
        try {
            review.likes += 1;
            let response = await axios.patch("http://127.0.0.1:8000/api/review/update/" + review.id + "/", review);
            // console.log("response.data in likeReview: ", response.data);
            if(response.status === 200){
                setReRender(!reRender);
            }
        } catch (err) {
            console.log("err in likeReview: ", err);
        }
    }

    // function getUserName(id) {
    //     // console.log("user in getUserName: ", user);
    //     if(id === user.id){
    //         return (user.username)
    //     }
    // }

    return (
        <div className='review-fullwidth'>
            {props.reviewContent.map((review, index) => {
                if(review) {
                    return (
                        <div className='review-container' key={index}>
                            <div className='review-text'>
                                <p style={{ fontSize: '16px' }}>{review.text}</p>
                            </div>
                            <div>
                                <button className='review-like-button' onClick={() => likeReview(review)}><i style={{ color: "gray" }} class="fa-solid fa-heart"/><span className='review-like-count'>{review.likes}</span></button>
                            </div>
                        </div>
                    )
                }
                else {
                    return (
                        <div>
                            <p>No reviews yet!</p>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default Review;