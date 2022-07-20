import React from 'react';

const MovieProvidersBuy = (props) => {

    return (
        <div>
            {props.providerResults.map((source, index) => {
                return(
                    <div key={index}>
                        <img src={"https://image.tmdb.org/t/p/w45" + source.buy.logo_path} alt={source.buy.provider_name} />
                    </div>
                )
            })}
        </div>
    )
}

export default MovieProvidersBuy;