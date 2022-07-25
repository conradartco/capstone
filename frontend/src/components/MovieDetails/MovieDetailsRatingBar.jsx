import React from 'react';

const RatingBar = ({color, percentage, height}) => {

    const barContainer = {
        height: height,
        width: "100%",
        backgroundColor: "whitesmoke",
        borderRadius: 40,
    }

    const barBody = {
        height: "100%",
        width: percentage + '%',
        backgroundColor: color,
        borderRadius: 40,
        textAlign: "end"
    }

    const barText = {
        padding: 15,
        color: 'black',
        textAlign: "end"
    }


    return (
        <div style={barContainer}>
            <div style={barBody}>
                {percentage !== 0 ? (
                    <span style={barText}><small>User Rating <strong>{percentage + '%'}</strong></small></span>
                ) : (
                    <span></span>
                )}
            </div>
        </div>
    )
}

export default RatingBar;