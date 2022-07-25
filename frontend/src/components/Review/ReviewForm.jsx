// General Imports
import React, { useState } from 'react';

// Component Imports
import './Review.css';

const ReviewForm = (props) => {

    const [text, setText] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newReview = {
            movie_id: props.movieContent.id,
            text: text
        }
        props.addNewReview(newReview);
    }

    return (
        <div>
            <form className='review-form' onSubmit={handleSubmit}>
                <div>
                    <input className='review-input' type="text" value={text} placeholder="Leave a Review" onChange={(event) => setText(event.target.value)} />
                </div>
                <div>
                    <button className='review-submit' type="submit">Add</button>
                </div>
            </form>
        </div>
    )
}

export default ReviewForm;