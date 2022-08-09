// General Imports
import React, { useState } from 'react';

// Component Imports
import './SearchMovies.css';

const SearchMovies = (props) => {

    const [searchQuery, setSearchQuery] = useState('');
    const [showFilterOptions, setShowFilterOptions] = useState(false);

    const handleShowFilter = event => {
        setShowFilterOptions(current => !current);
    }

    function handleSubmit(event) {
        event.preventDefault();
        let newSearch = searchQuery.toLowerCase();
        // console.log("SearchBar handleSubmit value: ", newSearch);
        props.searchQueryData(newSearch);
    }

    function filterSearchFunction(method) {
        props.searchMethod(method);
    }


    return (
        <div>
            <form className='search-form-container' onSubmit={handleSubmit}>
                <div>
                    <input className='search-input' type="str" value={searchQuery} placeholder="Search for a movie" onChange={(event) => setSearchQuery(event.target.value)}/>
                </div>
                <div className='dropdown-container'>
                    <button onClick={() =>{
                    handleShowFilter(() => {
                        setShowFilterOptions(current => !current);
                    })}} className="filter-dropdown">Filter By...</button>
                    {showFilterOptions && (
                        <div id='filterSearch' className='filter-dropdown-content'>
                            <p >Film</p>
                            <p >TV Series</p>
                            <p >People</p>
                            <p >Companies</p>
                        </div>
                    )}
                </div>
                <div>
                    <button className='search-button' type="submit">GO</button>
                </div>
            </form>
        </div>
    )
}

export default SearchMovies;