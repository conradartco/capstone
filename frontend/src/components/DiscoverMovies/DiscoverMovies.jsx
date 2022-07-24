// General Imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TMDbAPIKey } from '../../keys';

// Component Imports
import DiscoverMoviesMap from './DiscoverMoviesMap';

const DiscoverMovies = (props) => {

    const [netflixMovies, setNetflixMovies] = useState(undefined);
    const [showNetflix, setShowNetflix] = useState(false);

    const handleClickNetflix = event => {
        setShowNetflix(current => !current);
    }

    const getNetflix = async () => {
        try {
            let response = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=" + TMDbAPIKey + "&language=en-US&sort_by=popularity.desc&certification_country=US&certification.gte=G&include_adult=false&include_video=false&page=1&with_watch_providers=8&watch_region=US&with_watch_monetization_types=flatrate");
            // console.log("response in getNetflix: ", response);
            setNetflixMovies(response.data.results);
        } catch (err) {
            console.log("err in getNetflix: ", err)
        }
    }
    
    useEffect(() => {
        getNetflix();
    }, []);
    
    const [amazonMovies, setAmazonMovies] = useState(undefined);
    const [showAmazon, setShowAmazon] = useState(false);

    const handleClickAmazon = event => {
        setShowAmazon(current => !current);
    }

    const getAmazon = async () => {
        try {
            let response = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=" + TMDbAPIKey + "&language=en-US&sort_by=popularity.desc&certification_country=US&certification.gte=G&include_adult=false&include_video=false&page=1&with_watch_providers=9&watch_region=US&with_watch_monetization_types=flatrate");
            // console.log("response in getAmazon: ", response);
            setAmazonMovies(response.data.results);
        } catch (err) {
            console.log("err in getAmazon: ", err)
        }
    }
    
    useEffect(() => {
        getAmazon();
    }, []);

    const [hboMovies, setHboMovies] = useState(undefined);
    const [showHbo, setShowHbo] = useState(false);

    const handleClickHbo = event => {
        setShowHbo(current => !current);
    }

    const getHbo = async () => {
        try {
            let response = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=" + TMDbAPIKey + "&language=en-US&sort_by=popularity.desc&certification_country=US&certification.gte=G&include_adult=false&include_video=false&page=1&with_watch_providers=384&watch_region=US&with_watch_monetization_types=flatrate");
            // console.log("response in getHbo: ", response);
            setHboMovies(response.data.results);
        } catch (err) {
            console.log("err in getHbo: ", err)
        }
    }
    
    useEffect(() => {
        getHbo();
    }, []);

    const [disneyMovies, setDisneyMovies] = useState(undefined);
    const [showDisney, setShowDisney] = useState(false);

    const handleClickDisney = event => {
        setShowDisney(current => !current);
    }

    const getDisney = async () => {
        try {
            let response = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=" + TMDbAPIKey + "&language=en-US&sort_by=popularity.desc&certification_country=US&certification.gte=G&include_adult=false&include_video=false&page=1&with_watch_providers=337&watch_region=US&with_watch_monetization_types=flatrate");
            // console.log("response in getDisney: ", response);
            setDisneyMovies(response.data.results);
        } catch (err) {
            console.log("err in getDisney: ", err)
        }
    }
    
    useEffect(() => {
        getDisney();
    }, []);

    const [huluMovies, setHuluMovies] = useState(undefined);
    const [showHulu, setShowHulu] = useState(false);

    const handleClickHulu = event => {
        setShowHulu(current => !current);
    }

    const getHulu = async () => {
        try {
            let response = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=" + TMDbAPIKey + "&language=en-US&sort_by=popularity.desc&certification_country=US&certification.gte=G&include_adult=false&include_video=false&page=1&with_watch_providers=15&watch_region=US&with_watch_monetization_types=flatrate");
            // console.log("response in getHulu: ", response);
            setHuluMovies(response.data.results);
        } catch (err) {
            console.log("err in getHulu: ", err)
        }
    }
    
    useEffect(() => {
        getHulu();
    }, []);

    return(
        <div>
            <div>
                <button onClick={() =>{
                    handleClickNetflix(() => {
                        setShowNetflix(current => !current);
                    });
                }}>Netflix</button>
                <button onClick={() =>{
                    handleClickAmazon(() => {
                        setShowAmazon(current => !current);
                    });
                }}>Amazon Prime</button>
                <button onClick={() =>{
                    handleClickHbo(() => {
                        setShowHbo(current => !current);
                    });
                }}>HBO Max</button>
                <button onClick={() =>{
                    handleClickDisney(() => {
                        setShowDisney(current => !current);
                    });
                }}>Disney+</button>
                <button onClick={() =>{
                    handleClickHulu(() => {
                        setShowHulu(current => !current);
                    });
                }}>Hulu</button>
            </div>
            {netflixMovies !== undefined ?
            <div>
                {showNetflix && (
                    <DiscoverMoviesMap discoverResults={netflixMovies} movieSelect={props.movieSelect} />
                )}
            </div>
            :null}
            {amazonMovies !== undefined ?
            <div>
                {showAmazon && (
                    <DiscoverMoviesMap discoverResults={amazonMovies} movieSelect={props.movieSelect} />
                )}
            </div>
            :null}
            {hboMovies !== undefined ?
            <div>
                {showHbo && (
                    <DiscoverMoviesMap discoverResults={hboMovies} movieSelect={props.movieSelect} />
                )}
            </div>
            :null}
            {disneyMovies !== undefined ?
            <div>
                {showDisney && (
                    <DiscoverMoviesMap discoverResults={disneyMovies} movieSelect={props.movieSelect} />
                )}
            </div>
            :null}
            {huluMovies !== undefined ?
            <div>
                {showHulu && (
                    <DiscoverMoviesMap discoverResults={huluMovies} movieSelect={props.movieSelect} />
                )}
            </div>
            :null}
        </div>
    )
}

export default DiscoverMovies;