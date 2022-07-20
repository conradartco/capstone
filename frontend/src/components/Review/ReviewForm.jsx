// General Imports
import React, { useState } from 'react';

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
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" value={text} placeholder="Leave a Review" onChange={(event) => setText(event.target.value)} />
                </div>
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
        </div>
    )
}

export default ReviewForm;