// General Imports
import React, { useState, useEffect } from 'react';
import { TMDbAPIKey } from '../../keys';
import axios from 'axios';

// Component Imports

const TVSeasons = (props) => {

    

    return (
        <div>
            {props.sourceContent.seasons.map((season, index) => {
                return (
                    <div key={index}>
                        <div>
                        <img className='poster-image' src={"https://image.tmdb.org/t/p/w500" + season.poster_path} alt={props.sourceContent.name + ' / ' + season.name}/>
                        </div>
                        <div>
                            <p><strong>{season.name}</strong></p>
                            <p>{season.overview}</p>
                            <p>Episodes: {season.episode_count}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default TVSeasons;