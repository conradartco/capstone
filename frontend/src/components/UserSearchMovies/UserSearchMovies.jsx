// General Imports
import React, { useState } from 'react';
import { TMDbAPIKey } from "../../keys";
import axios from "axios";

// Component Imports
import SearchMovies from "../SearchMovies/SearchMovies";
import FoundMovies from "../FoundMovies/FoundMovies";

const UserSearchMovies = (props) => {

    const [searchedMovie, setSearchedMovie] = useState([]);

    async function searchFilter(query) {
        try {
          let response = await axios.get("https://api.themoviedb.org/3/search/movie?api_key=" + TMDbAPIKey + "&language=en-US&query=" + query + "&page=1&include_adult=false");
          console.log("response.data.results in searchFilter", response.data.results);
          setSearchedMovie(response.data.results);
        } catch (err) {
          console.log("err in searchFilter: ", err);
        }
    }

    return (
        <div>
            <div>
                <SearchMovies searchQueryData={searchFilter} />
            </div>
            <div>
                <FoundMovies foundContent={searchedMovie} movieSelect={props.movieSelect}/>
            </div>
        </div>
    )
}

export default UserSearchMovies;