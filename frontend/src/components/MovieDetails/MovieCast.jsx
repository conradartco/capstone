import React from 'react';
import nullCastImage from '../../images/CAST-NOIMAGE-1.jpg';


const MovieCast = (props) => {

    // console.log("props.crewDetails in MovieCast: ", props.crewDetails);

    return (
        <div>
            <div>
                <h2>Cast</h2>
            </div>
            <div>
                {props.crewDetails.cast.map((person, index) => {
                    return (
                        <div key={index}>
                            <div>
                            {person.profile_path !== null ? (
                                <img src={"https://image.tmdb.org/t/p/w154" + person.profile_path} alt={person.name + " profile photo"}/>
                            ) : (
                                <img src={nullCastImage} alt="no actor image available" />
                            )}
                            </div>
                            <p><strong>{person.name}</strong></p>
                            {person.character ? (
                                <p><small>{person.character}</small></p>
                            ) : (
                                <p><small>{"(role not documented)"}</small></p>
                            )}
                            
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MovieCast;