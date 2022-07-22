import React, { useState, useEffect } from 'react';

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
            <div>
                <h3>Available to Stream with</h3>
                {streaming.map((provider, index) => {
                    return (
                        <div key={index}>
                            <a href={props.providerDetails.results.US.link} target="_blank">
                                <img src={"https://image.tmdb.org/t/p/w92" + provider.logo_path} alt={provider.provider_name} /> 
                            </a>
                        </div>
                    )
                })}
            </div>
            : null}
            {buyOrRent !== undefined ?
            <div>
                <h3>Available to Buy or Rent with</h3>
                {buyOrRent.map((provider, index) => {
                    return(
                        <div key={index}>
                            <a href={props.providerDetails.results.US.link} target="_blank">
                                <img src={"https://image.tmdb.org/t/p/w92" + provider.logo_path} alt={provider.provider_name} />
                            </a>
                        </div>
                    )
                })}
            </div>
            : null }
        </div>
    )
}

export default MovieProvidersMap;