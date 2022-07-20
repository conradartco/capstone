// General Imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TMDbAPIKey } from '../../keys';

// Component Imports
// import MovieProvidersBuy from './MovieProvidersBuy';

const MovieProviders = (props) => {

    const [providers, setProviders] = useState([]);

    useEffect(() => {
        const getProviders = async () => {
            try {
                let response = await axios.get("https://api.themoviedb.org/3/movie/" + props.movieContent.id + "/watch/providers?api_key=" + TMDbAPIKey);
                console.log("response.data.results.US in getProviders: ", response.data.results.US);
                setProviders(response.data.results.US);
            } catch (err) {
                console.log("err in getProviders: ", err);
            }
        }
        getProviders();
    }, [props.movieContent.id]);

    return (
        <div>
            {/* <MovieProvidersBuy providerResults={providers} /> */}
        </div>
    )
}

export default MovieProviders;