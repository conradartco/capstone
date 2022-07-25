// General Imports
import React, { useState } from 'react';

// Component Imports
import './SearchMovies.css';

const SearchMovies = (props) => {

    const [searchQuery, setSearchQuery] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newSearch = searchQuery.toLowerCase();
        // console.log("SearchBar handleSubmit value: ", newSearch);
        props.searchQueryData(newSearch);
    }

    return (
        <div>
            <form className='search-form-container' onSubmit={handleSubmit}>
                <div>
                    <input className='search-input' type="str" value={searchQuery} placeholder="Search for a movie" onChange={(event) => setSearchQuery(event.target.value)}/>
                </div>
                <div>
                    <button className='search-button' type="submit">GO</button>
                </div>
            </form>
        </div>
    )
}

export default SearchMovies;