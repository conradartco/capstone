// General Imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TMDbAPIKey } from '../../keys';

// Component Imports


const MovieProviders = (props) => {

    const [providers, setProviders] = useState({}); 

    const getProviders = async () => {
        // console.log("props.movieContent.id in getProviders: ", props.movieContent.id);
        try {
            let response = await axios.get("https://api.themoviedb.org/3/movie/" + props.movieContent.id + "/watch/providers?api_key=" + TMDbAPIKey);
            // console.log("response in getProviders: ", response);
            // console.log("response.data in getProviders: ", response.data);
            // setProviders(response.data.results);
        } catch (err) {
            console.log("err in getProviders: ", err);
        }
    }

    useEffect(() => {
        getProviders();
    }, []);

    return (
        <div>
            <div>
                {/* {console.log("providers in MovieProviders: ", providers)} */}
            </div>
        </div>
    )
}

export default MovieProviders;