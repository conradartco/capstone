// General Imports
import React, { useState } from 'react';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const ReviewForm = (props) => {

    const [text, setText] = useState('');
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

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
            <form>
                <div>
                    <input type="text" value={text} placeholder="Leave a Review" onChange={(event) => setText(event.target.value)} />
                </div>
                <div>
                    {user ? (
                        <button type="submit">Add</button>
                    ) : (
                        <button onClick={() => navigate("/login")}>Login</button>
                    )}
                </div>
            </form>
        </div>
    )
}

export default ReviewForm;