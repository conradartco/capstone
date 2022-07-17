// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { TMDbAPIKey } from '../../keys';


// const MoviePage = (props) => {

//     const {movieId} = useParams();
//     const [movie, setMovie] = useState([]);

//     useEffect(() => {
//         const getSelectedMovie = async () => {
//             try {
//                 let response = await axios.get("https://api.themoviedb.org/3/movie/" + movieId.id + "?api_key=" + TMDbAPIKey + "&language=en-US");
//                 console.log("response in getSelectedMovie: ", response);
//                 console.log("response.data.results in getSelectedMovie: ", response.data.results);
//                 setMovie(response.data.results);
//             } catch (err) {
//                 console.log("err in getSelectedMovie: ", err);
//             }
//         }
//         getSelectedMovie();
//     }, []);

//     return (
//         <div>
//             <img src={"https://image.tmdb.org/t/p/w154" + movie.poster_path} alt={movie.title + " movie poster"}/>
//             {console.log("movie in MoviePage body div: ", movie)}
//         </div>
//     )
// }

// export default MoviePage;