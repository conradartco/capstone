// General Imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TMDbAPIKey } from '../../keys';

// Component Imports
import MovieVideoMap from './MovieVideoMap';
import MovieMediaImageMap from './MovieMediaImageMap';
import MovieMediaPosterMap from './MovieMediaPosterMap';

const MovieMedia = (props) => {

    const [movieVideos, setMovieVideos] = useState(undefined);
    const [images, setImages] = useState(undefined);

    const [showVideos, setShowVideos] = useState(false);
    const [showImages, setShowImages] = useState(false);
    const [showPosters, setShowPosters] = useState(false);

    const getMovieVideos = async () => {
        try {
            let response = await axios.get("https://api.themoviedb.org/3/movie/" + props.movieContent.id + "/videos?api_key=" + TMDbAPIKey + "&language=en-US");
            // console.log("response.data.results in getMovieVideos: ", response.data.results);
            setMovieVideos(response.data.results);
        } catch (err) {
            console.log("err in getMovieVideos: ", err);
        }
    }

    useEffect(() => {
        getMovieVideos();
    }, [props.movieContent]);

    const getMovieImages = async () => {
        try {
            let response = await axios.get("https://api.themoviedb.org/3/movie/" + props.movieContent.id + "/images?api_key=" + TMDbAPIKey + "&language=en-US&include_image_language=en,null");
            // console.log("response in getMovieImages: ", response.data);
            setImages(response.data);
        } catch (err) {
            console.log("err in getMovieImages: ", err);
        }
    }

    useEffect(() => {
        getMovieImages();
    }, []);

    const handleClickVideos = event => {
        setShowVideos(current => !current);
    }

    const handleClickImages = event => {
        setShowImages(current => !current);
    }
    
    const handleClickPosters = event => {
        setShowPosters(current => !current);
    }

    return (
        <div>
            <div>
                <button onClick={() => {
                    handleClickVideos(() => {
                        setShowVideos(current => !current);
                    })
                }}>Trailers</button>
                <button onClick={() => {
                    handleClickImages(() => {
                        setShowImages(current => !current);
                    })
                }}>Images</button>
                <button onClick={() => {
                    handleClickPosters(() => {
                        setShowPosters(current => !current);
                    })
                }}>Posters</button>
            </div>
            <div>
                {movieVideos !== undefined ?
                <div>
                    {showVideos && (
                    <MovieVideoMap videoResults={movieVideos}/>
                    )}
                </div>
                : null}
                {images !== undefined ?
                <div>
                    {showImages && (
                    <MovieMediaImageMap imageContent={images} />
                    )}
                </div>
                : null}
                {images !== undefined ?
                <div>
                    {showPosters && (
                    <MovieMediaPosterMap imageContent={images} />
                    )}
                </div>
                : null}
            </div>
            
        </div>
    )
}

export default MovieMedia;