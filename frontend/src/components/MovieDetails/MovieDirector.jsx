import React from 'react';

const MovieDirector = (props) => {

    // console.log("props.crewDetails in MovieDirector: ", props.crewDetails);
    
    let directorCredits = props.crewDetails.crew.filter(payroll => payroll.job === "Director");
    // console.log("directorCredits in MovieDirector: ", directorCredits);

    let directorName = directorCredits.map(property => property.name);
    // console.log(directorName);

    return (
        <div>
            {directorName.length < 2 ? (
                <p><strong>Director:</strong> {directorName}</p>
            ) : (
                <p><strong>Directors:</strong> {directorName[0]} and {directorName[1]}</p>
            )}
        </div>
    )
}

export default MovieDirector;