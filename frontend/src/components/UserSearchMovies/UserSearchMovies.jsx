// General Imports
import React from 'react';
import { TMDbAPIKey } from "../../keys";
import axios from "axios";

// Component Imports
import SearchMovies from "../SearchMovies/SearchMovies";

const UserSearchMovies = (props) => {

    async function searchFilter(query) {
        try {
          let response = await axios.get("https://api.themoviedb.org/3/search/movie?api_key=" + TMDbAPIKey + "&language=en-US&query=" + query + "&page=1&include_adult=false");
          console.log("response.data.results in searchFilter", response.data.results);
          props.movieFromSearch(response.data.results);
        } catch (err) {
          console.log("err in searchFilter: ", err);
        }
    }

    return (
        <div>
            <SearchMovies searchQueryData={searchFilter} />
        </div>
    )
}

export default UserSearchMovies;