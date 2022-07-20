// General Imports
import React from 'react';
import { useContext } from 'react';
import AuthContext from "../../context/AuthContext";

// Component Imports
import WatchlistUser from '../../components/Watchlist/WatchlistUser';
import FavoritesUser from '../../components/Favorites/FavoritesUser';

const UserProfilePage = (props) => {

    const { logoutUser, user } = useContext(AuthContext);

    return (
        <div>
            <div>
                <h1>Hello {user.first_name}!</h1>
            </div>
            <hr></hr>
            <div>
                <h2>Watchlist</h2>
                <hr></hr>
                <WatchlistUser movieSelect={props.movieSelect}/>
            </div>
            <div>
                <h2>Favorites</h2>
                <hr></hr>
                <FavoritesUser movieSelect={props.movieSelect}/>
            </div>
            <div>
                <button onClick={logoutUser}>Logout</button>
            </div>
        </div>
    )
}

export default UserProfilePage;