import React from 'react';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const UserProfilePage = (props) => {

    const { logoutUser, user } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <div>
            <div>
                <h1>Hello {user.first_name}!</h1>
                {console.log("user in profile: ", user)}
            </div>
            <hr></hr>
            <div>
                <p>watchlist</p>
            </div>
            <div>
                <p>favorites</p>
            </div>
            <div>
                <button onClick={logoutUser}>Logout</button>
            </div>
        </div>
    )
}

export default UserProfilePage;