// General Imports
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TMDbAPIKey } from '../../keys';

// Component Imports
import ReviewList from '../../components/Review/ReviewList';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import MovieMedia from '../../components/MovieMedia/MovieMedia';
import MovieProviders from '../../components/MovieProviders/MovieProviders';
import TVImages from '../../components/TVImages/TVImages';
import '../MoviePage/MoviePage.css';

const TVPage = (props) => {

    const [tvSelect, setTVSelect] = useState(null);
    const navigate = useNavigate();
    // const [reRender, setReRender] = useState(true);

    const getSelectedTV = async () => {
        try {
            let response = await axios.get("https://api.themoviedb.org/3/tv/" + props.tvSelect.id + "?api_key=" + TMDbAPIKey + "&language=en-US");
            console.log("response in getSelectedTV: ", response);
            setTVSelect(response.data);
        } catch (err) {
            console.log("err in getSelectedTV: ", err);
        }
    }

    useEffect(() => {
        getSelectedTV();
        // return () => {
        //     setMovieSelect(null)
        // }
    }, [props.tvSelect.id]);
   
    return (
        <div>
            {tvSelect ?
            <>
            <div>
                <TVImages tvContent={tvSelect} />
            </div>
            </>
            : null}
            <div>
                {tvSelect ?
                <>
                <div>
                    {/* TV Details */}
                </div>
                <div className='bottom-content'>
                    <div>
                        {/* TV Providers */}
                    </div>
                    <div>
                        {/* TV Media */}
                    </div>
                    <div>
                        {/* TV Reviews */}
                    </div>
                    <div>
                        <ReviewList sourceContent={tvSelect} />
                    </div>
                </div>
                </>
                : null}
            </div>
            <div className='back-container'>
                <button className='back-button' onClick={() => navigate(-1)}>Back</button>
            </div>
        </div>
    )
}

export default TVPage;