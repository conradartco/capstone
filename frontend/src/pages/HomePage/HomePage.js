// General Imports
import React from "react";
import { useEffect, useState } from "react";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import axios from "axios";
import { TMDbAPIKey } from "../../keys";

// Component Imports
import TopMovies from "../../components/TopMovies/TopMovies";
import NewReleaseMovies from "../../components/NewReleaseMovies/NewReleaseMovies";
import UserSearchMovies from "../../components/UserSearchMovies/UserSearchMovies";
import WatchlistHome from "../../components/Watchlist/WatchlistHome";

const HomePage = (props) => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  
  const { user } = useContext(AuthContext);
  // const [cars, setCars] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [soonMovies, setSoonMovies] = useState([]);

  // useEffect(() => {
  //   const fetchCars = async () => {
  //     try {
  //       let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
  //         headers: {
  //           Authorization: "Bearer " + token,
  //         },
  //       });
  //       setCars(response.data);
  //     } catch (error) {
  //       console.log(error.response.data);
  //     }
  //   };
  //   fetchCars();
  // }, [token]);

  useEffect(() => {
    const getTopMovies = async () => {
      try {
        let response = await axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=" + TMDbAPIKey);
        console.log("response.data.items in getTopMovies: ", response.data.results);
        setTopMovies(response.data.results)
      } catch (err) {
        console.log("err in getTopMovies: ", err)
      }
    }
    getTopMovies();
  }, []);  

  useEffect(() => {
    const getSoonMovies = async () => {
      try {
        let response = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=" + TMDbAPIKey + "&language=en-US&page=1");
        console.log("response.data.items in getSoonMovies: ", response.data.results);
        setSoonMovies(response.data.results)
      } catch (err) {
        console.log("err in getSoonMovies: ", err)
      }
    }
    getSoonMovies();
  }, []);
  
  

  return (
    <div className="container">
      <div>
        <UserSearchMovies movieSelect={props.movieSelect}/>
      </div>
      <div>
        {user ? (
          <div>
            <h2>My Watchlist</h2>
            <hr></hr>
            <WatchlistHome movieSelect={props.movieSelect}/>
          </div>
        ) : (
          <p></p>
        )}
      </div>
      <div>
        <h2>Top Trending Movies</h2>
        <hr></hr>
        <TopMovies foundContent={topMovies} movieSelect={props.movieSelect}/>
      </div>
      <div>
        <h2>Coming Soon</h2>
        <hr></hr>
        <NewReleaseMovies foundContent={soonMovies} movieSelect={props.movieSelect}/>
      </div>
    </div>
  );
};

export default HomePage;
