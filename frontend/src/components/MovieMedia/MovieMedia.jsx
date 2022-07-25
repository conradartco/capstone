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
                <button className='click-tab media' onClick={() => {
                    handleClickVideos(() => {
                        setShowVideos(current => !current);
                    })
                }}>Trailers</button>
                <button className='click-tab media' onClick={() => {
                    handleClickImages(() => {
                        setShowImages(current => !current);
                    })
                }}>Images</button>
                <button className='click-tab media' onClick={() => {
                    handleClickPosters(() => {
                        setShowPosters(current => !current);
                    })
                }}>Posters</button>
            </div>
            <div>
                {movieVideos !== undefined ?
                <div>
                    {showVideos && (
                        <>
                        <h3>Trailers and Other Media</h3>
                        <hr></hr>
                        <MovieVideoMap videoResults={movieVideos}/>
                        </>
                    )}
                </div>
                : null}
                {images !== undefined ?
                <div>
                    {showImages && (
                        <>
                        <h3>Images</h3>
                        <hr></hr>
                        <MovieMediaImageMap imageContent={images} />
                        </>
                    )}
                </div>
                : null}
                {images !== undefined ?
                <div>
                    {showPosters && (
                        <>
                        <h3>Posters</h3>
                        <hr></hr>
                        <MovieMediaPosterMap imageContent={images} />
                        </>
                    )}
                </div>
                : null}
            </div>
            
        </div>
    )
}

export default MovieMedia;