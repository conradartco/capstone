import React from 'react';

const MovieDirector = (props) => {

    console.log("props.crewDetails in MovieDirector: ", props.crewDetails);
    
    let directorCredits = props.crewDetails.crew.filter(payroll => payroll.job === "Director");
    console.log("directorCredits in MovieDirector: ", directorCredits);

    // const returnFlatObject = (arr) => {
    //     const flatObject = {};
    //     for (let i = 0; i < arr.length; i++) {
    //         for(const property in arr[i]) {
    //             flatObject['${property}_${i}'] = arr[i][property];
    //         }
    //     };
    //     return flatObject;
    // }

    // let directorSelect = returnFlatObject(directorCredits);
    // console.log("directorSelect: ", directorSelect);

    let directorName = directorCredits.map(property => property.name);
    console.log(directorName);

    return (
        <div>
            {directorName.length < 2 ? (
                <p>Director: {directorName}</p>
            ) : (
                <p>Directors: {directorName[0]} and {directorName[1]}</p>
            )}
        </div>
    )
}

export default MovieDirector;