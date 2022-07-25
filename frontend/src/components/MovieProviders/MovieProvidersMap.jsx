// General Imports
import React, { useState, useEffect } from 'react';

// Component Imports
import './MovieProviders.css';


const MovieProvidersMap = (props) => {

    const [streaming, setStreaming] = useState(undefined);
    const [buyOrRent, setBuyOrRent] = useState(undefined);

    // console.log("props.providerDetails in MovieProvidersMap: ", props.providerDetails);

    // let isStreaming = props.providerDetails.results.US.flatrate;
    // let isBuyable = props.providerDetails.results.US.buy;

    function getStreaming(){
        try {
            if (props.providerDetails.results.US.flatrate) {
                setStreaming(props.providerDetails.results.US.flatrate);
            }
        } catch (err) {
            console.log("err in getStreaming: ", err);
        }
    }

    useEffect(() => {
        getStreaming();
    }, []);

    function getBuyOrRent(){
        try {
            if (props.providerDetails.results.US.buy) {
                setBuyOrRent(props.providerDetails.results.US.buy);
            }
        } catch (err) {
            console.log("err in getBuyOrRent: ", err);
        }
    }

    useEffect(() => {
        getBuyOrRent();
    }, []);

    return (
        <div>
            {streaming !== undefined ?
            <div className='watch-provider-box'>
                <h3 className='provider-monetype'>Streaming</h3>
                <div className='provider-container'>
                    {streaming.map((provider, index) => {
                        return (
                            <div key={index}>
                                <a href={props.providerDetails.results.US.link} target="_blank" rel="noreferrer">
                                    <img className='provider-icon' src={"https://image.tmdb.org/t/p/w300" + provider.logo_path} alt={provider.provider_name} /> 
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
            : null}
            {buyOrRent !== undefined ?
            <div className='watch-provider-box'>
                <h3 className='provider-monetype'>Buy or Rent</h3>
                <div className='provider-container'>
                    {buyOrRent.map((provider, index) => {
                        return(
                            <div key={index}>
                                <a href={props.providerDetails.results.US.link} target="_blank" rel="noreferrer">
                                    <img className='provider-icon' src={"https://image.tmdb.org/t/p/w300" + provider.logo_path} alt={provider.provider_name} />
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
            : null }
        </div>
    )
}

export default MovieProvidersMap;