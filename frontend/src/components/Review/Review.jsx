// General Imports
import React, { useState } from 'react';
import axios from 'axios';

const Review = (props) => {

    const [reRender, setReRender] = useState(true);

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

    return (
        <div>
            {props.reviewContent.map((review, index) => {
                if(review) {
                    return (
                        <div key={index}>
                            <div>
                                <p>{review.text}</p>
                            </div>
                            <div>
                                <p>{review.likes}</p>
                                <button onClick={() => likeReview(review)}>Like</button>
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