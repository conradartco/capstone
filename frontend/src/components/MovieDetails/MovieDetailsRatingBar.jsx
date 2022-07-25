import React from 'react';

const RatingBar = ({color, percentage, height}) => {

    const BarContainer = {
        height: height,
        width: "100%",
        backgroundColor: "white",
        borderRadius: 40,
        margin: 10
    }

    const BarBody = {
        height: "100%",
        width: percentage + '%',
        backgroundColor: color,
        borderRadius: 40,
        textAlign: 'right'
    }

    const BarText = {
        padding: 10,
        color: 'black'
    }

    return (
        <div style={BarContainer}>
            <div style={BarBody}>
                <span style={BarText}>{percentage + '%'} User Rating</span>
            </div>
        </div>
    )
}

export default RatingBar;