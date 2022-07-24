// General Imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TMDbAPIKey } from '../../keys';

// Component Imports
import './CastPage.css';

const CastPage = (props) => {

    const [credits, setCredits] = useState(undefined);
    const [logo, setLogo] = useState(undefined);

    console.log("props.movieSelect in CastPage: ", props.movieSelect);

    const getMovieCredits = async () => {
        try {
            let response = await axios.get("https://api.themoviedb.org/3/movie/" + props.movieSelect.id + "/credits?api_key=" + TMDbAPIKey + "&language=en-US");
            console.log("response in getMovieCredits: ", response.data);
            setCredits(response.data);
        } catch (err) {
            console.log("err in getMovieCredits: ", err);
        }
    }

    useEffect(() => {
        getMovieCredits();
    }, []);

    const getMovieLogo = async () => {
        try {
            let response = await axios.get("https://api.themoviedb.org/3/movie/" + props.movieSelect.id + "/images?api_key=" + TMDbAPIKey + "&language=en-US&include_image_language=en,null");
            console.log("response in getMovieLogo: ", response.data.logos);
            setLogo(response.data.logos);
        } catch (err) {
            console.log("err in getMovieLogo: ", err);
        }
    }

    useEffect(() => {
        getMovieLogo();
    }, []);

    function movieHeader() {
        return (
            <div>
                <div className='cast-header-container' style={{
                    backgroundImage: 'url(' + "https://image.tmdb.org/t/p/original" + props.movieSelect.backdrop_path + ')'
                }}>
                {logo !== undefined ?    
                    <img className='logo-header' src={"https://image.tmdb.org/t/p/original" + logo[0].file_path} alt={props.movieSelect.title + " logo"}/>
                : null}
                </div>
            </div>
        )
    }

    return (
        <div>
            {movieHeader()}
            <div>
                <h2>Cast</h2>
            </div>
            <div>
                {credits !== undefined ?
                <div>
                    {credits.cast.map((actor, index) => {
                        return(
                            <div key={index} className="cast-id">
                                <p><strong>{actor.name}</strong></p>
                                {actor.character ? (
                                    <p><small>{actor.character}</small></p>
                                ) : (
                                    <p><small>{"(role not documented)"}</small></p>
                                )}
                            </div>
                        )
                    })}
                </div>
                : null}
            </div>
            <div>
                <h2>Crew</h2>
            </div>
            <div>
                {credits !== undefined ?
                <div>
                    {credits.crew.map((crew, index) => {
                        return(
                            <div key={index} className="cast-id">
                                <p><strong>{crew.name}</strong></p>
                                {crew.department ? (
                                    <p><small>Department: {crew.department}</small></p>
                                ) : (
                                    <p><small>Department: {"(not documented)"}</small></p>
                                )}
                                {crew.job ? (
                                    <p><small>Job: {crew.job}</small></p>
                                ) : (
                                    <p><small>Job: {"(not documented)"}</small></p>
                                )}
                            </div>
                        )
                    })}
                </div>
                : null}
            </div>
        </div>
    )
}

export default CastPage;