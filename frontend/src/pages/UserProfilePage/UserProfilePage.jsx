// General Imports
import React from 'react';
import { useContext } from 'react';
// import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

// Component Imports
import WatchlistUser from '../../components/Watchlist/WatchlistUser';

const UserProfilePage = (props) => {

    const { logoutUser, user } = useContext(AuthContext);
    // const navigate = useNavigate();

    return (
        <div>
            <div>
                <h1>Hello {user.first_name}!</h1>
            </div>
            <hr></hr>
            <div>
                <WatchlistUser movieSelect={props.movieSelect}/>
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