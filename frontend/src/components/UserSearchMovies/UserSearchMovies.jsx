// General Imports
import React, { useState } from 'react';

import { TMDbAPIKey } from "../../keys";
import axios from "axios";

// Component Imports
import SearchMovies from "../SearchMovies/SearchMovies";
import "../../App.css";

const UserSearchMovies = (props) => {

    const [method, setMethod] = useState('movie');

    async function searchFilter(query) {
      console.log('method in searchFilter: ', method);
        try {
          let response = await axios.get("https://api.themoviedb.org/3/search/" + method + "?api_key=" + TMDbAPIKey + "&language=en-US&query=" + query + "&page=1&include_adult=false");
          console.log("response.data.results in searchFilter", response.data.results);
          props.movieFromSearch(response.data.results);
        } catch (err) {
          console.log("err in searchFilter: ", err);
        }
    }

    return (
        <div className='search-container'>
            <SearchMovies searchQueryData={searchFilter} searchMethod={setMethod}/>
        </div>
    )
}

export default UserSearchMovies;