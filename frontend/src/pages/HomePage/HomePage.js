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
import TopRatedMovies from "../../components/TopRatedMovies/TopRatedMovies";
import DiscoverMovies from "../../components/DiscoverMovies/DiscoverMovies";
import FoundMovies from "../../components/FoundMovies/FoundMovies";
import homeHeroImage from "../../images/CAPSTONE-HEROIMAGE-01-test.jpg";

const HomePage = (props) => {
  
  const { user } = useContext(AuthContext);
  const [topMovies, setTopMovies] = useState([]);
  const [soonMovies, setSoonMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [searchedMovie, setSearchedMovie] = useState(undefined);

  const getTopMovies = async () => {
    try {
      let response = await axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=" + TMDbAPIKey);
      // console.log("response.data.items in getTopMovies: ", response.data.results);
      setTopMovies(response.data.results)
    } catch (err) {
      console.log("err in getTopMovies: ", err)
    }
  }

  useEffect(() => {
    getTopMovies();
  }, []);  

  const getSoonMovies = async () => {
    try {
      let response = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=" + TMDbAPIKey + "&language=en-US&page=1&region=us");
      // console.log("response.data.items in getSoonMovies: ", response.data.results);
      setSoonMovies(response.data.results)
    } catch (err) {
      console.log("err in getSoonMovies: ", err)
    }
  }

  useEffect(() => {
    getSoonMovies();
  }, []);

  const getTopRatedMovies = async () => {
    try {
      let response = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=" + TMDbAPIKey + "&language=en-US&page=1&region=us");
      // console.log("response.data.items in getTopRatedMovies: ", response.data.results);
      setTopRatedMovies(response.data.results)
    } catch (err) {
      console.log("err in getTopRatedMovies: ", err)
    }
  }

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  function movieHeader() {
      return (
          <div className="home-header-container" style={{ backgroundImage: 'url(' + homeHeroImage + ')' }}>
            <UserSearchMovies movieSelect={props.movieSelect} movieFromSearch={setSearchedMovie}/>
          </div>
      )
  }

  return (
    <div>
      <div>
        {movieHeader()}
      </div>
      <div className="container">
        {searchedMovie !== undefined ?
        <div>
          <FoundMovies movieSelect={props.movieSelect} foundContent={searchedMovie} />
        </div>
        : null}
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
          <h2>Trending</h2>
          <hr></hr>
          <TopMovies foundContent={topMovies} movieSelect={props.movieSelect}/>
        </div>
        <div>
          <h2>Coming Soon</h2>
          <hr></hr>
          <NewReleaseMovies foundContent={soonMovies} movieSelect={props.movieSelect}/>
        </div>
        <div>
          <h2>Top Rated</h2>
          <hr></hr>
          <TopRatedMovies foundContent={topRatedMovies} movieSelect={props.movieSelect}/>
        </div>
        <div>
          <h2>Discover</h2>
          <hr></hr>
          <DiscoverMovies movieSelect={props.movieSelect}/>
        </div>
      </div>
      
    </div>
  );
};

export default HomePage;
