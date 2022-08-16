// General Imports
import React, { useState, useEffect } from 'react';
import { TMDbAPIKey } from '../../keys';
import axios from 'axios';

// Component Imports
import MovieDetailsRatingBar from '../MovieDetails/MovieDetailsRatingBar';
import '../MovieDetails/MovieDetails.css';

const TVDetails = (props) => {

    return (
        <div className='movie-card'>
            <div className='movie-poster-and-details'>
                <div>
                    <img className='poster-image' src={"https://image.tmdb.org/t/p/w500" + props.sourceContent.poster_path} alt={props.sourceContent.name} />
                </div>
                <div>
                    <div>
                        <h2 className='movie-headline'>{props.sourceContent.name} <span className='release-year'>{"(" + props.sourceContent.first_air_date.slice(0, 4) + ")"}</span></h2>
                        <div className='rating-bar'>
                            <MovieDetailsRatingBar color="darkgray" percentage={Math.round((props.sourceContent.vote_average / 10) * 100)} height={25} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TVDetails;