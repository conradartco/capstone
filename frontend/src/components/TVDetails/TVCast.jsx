// Generat Imports
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Component Imports
import nullCastImage from '../../images/CAST-NOIMAGE-1.jpg';
import '../MovieDetails/MovieDetails.css';

const TVCast = (props) => {

    const navigate = useNavigate();

    function getCastCrew() {
        navigate('/cast');
    }

    return (
        <div>
            <div className='cast-headline'>
                <h2>Top Billed Cast</h2>
                <hr></hr>
            </div>
            <div className='cast-container'>
                {props.crewDetails.cast.map((person, index) => {
                    return (
                        <div className='cast-card' key={index} >
                            <div>
                            {person.profile_path !== null ? (
                                <img className='cast-profile' src={"https://image.tmdb.org/t/p/w185" + person.profile_path} alt={person.name + " profile"}/>
                            ) : (
                                <img className='cast-profile' src={nullCastImage} alt="no actor image available" />
                            )}
                            </div>
                            <div className='cast-name'>
                                <p><strong>{person.name}</strong></p>
                                {person.roles.character ? (
                                    <p><small>{person.roles.character}</small></p>
                                ) : (
                                    <p><small>{"(role not documented)"}</small></p>
                                )}
                            </div>
                        </div>
                    )
                }).slice(0, 10)}
                <div onClick={() => getCastCrew()}>
                    <button className='full-cast-button'>{"View Full Cast & Crew"}</button>
                </div>
            </div>
        </div>
    )
}

export default TVCast;