import React from 'react';
import './MovieDetails.css';

const MovieCert = (props) => {

    console.log("props.releaseInfo in MovieCert", props.releaseInfo);

    let localeRelease = props.releaseInfo.filter(locale => locale.iso_3166_1 === 'US');
    // console.log("localeRelease in MovieCert: ", localeRelease);

    let crushRelease = localeRelease.map(data => data.release_dates).flat(1);
    console.log("crushRelease in MovieCert: ", crushRelease);

    let movieGrade = crushRelease.filter((grade) => {
        if (grade.certification === 'G' || grade.certification === 'PG-13' || grade.certification === 'R' || grade.certification === 'NC-17' || grade.certification === 'NR' || grade.certification === 'PG') {
            return grade.certification;
        }
    })
    console.log("movieGrade in MovieCert: ", movieGrade);

    let gradeCrush = movieGrade.find(grade => grade.certification);
    console.log("gradeCrush in MovieCert: ", gradeCrush);

    return (
        <div className='cert-date-flex'>
            <div>
                <p className='cert-grade'>{gradeCrush.certification}</p>
            </div>
            <div>
                <p>{gradeCrush.release_date.slice(5, 7)} . {gradeCrush.release_date.slice(8, 10)} . {gradeCrush.release_date.slice(0, 4)} <span className='us-tag'>{"(US)"}</span></p>
            </div>
        </div>
    )
}

export default MovieCert;