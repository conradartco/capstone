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

    function filterSelection() {
        console.log('filterSearch.value in handleSubmit: ', document.getElementById('filterSearch').value);
        if (document.getElementById('filterSearch').value === '1') {
            props.searchMethod("movie");
        } else if (document.getElementById('filterSearch').value === '2') {
            props.searchMethod("tv");
        } else if (document.getElementById('filterSearch').value === '3') {
            props.searchMethod("person");
        } else if (document.getElementById('filterSearch').value === '4') {
            props.searchMethod("company");
        }
    }


    return (
        <div>
            <form className='search-form-container' onSubmit={handleSubmit}>
                <div>
                    <input className='search-input' type="str" value={searchQuery} placeholder="Search for a movie" onChange={(event) => setSearchQuery(event.target.value)}/>
                </div>
                <div>
                    <select name='filterSearch' id='filterSearch' onChange={filterSelection} required>
                        <option>Select...</option>
                        <option value="1">Film</option>
                        <option value="2">TV Series</option>
                        <option value="3">People</option>
                        <option value="4">Companies</option>
                    </select>
                </div>
                <div>
                    <button className='search-button' type="submit">GO</button>
                </div>
            </form>
        </div>
    )
}

export default SearchMovies;