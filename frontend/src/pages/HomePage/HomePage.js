import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import FoundMovies from "../../components/FoundMovies/FoundMovies";
import SearchMovies from "../../components/SearchMovies/SearchMovies";
import { TMDbAPIKey } from "../../keys";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  
  const [user, token] = useAuth();
  // const [cars, setCars] = useState([]);
  const [searchedMovie, setSearchedMovie] = useState([]);
  const [topMovies, setTopMovies] = useState([]);

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
        let response = await axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=" + TMDbAPIKey);
        console.log("response.data.items in getTopMovies: ", response.data.results);
        setTopMovies(response.data.results)
      } catch (err) {
        console.log("err in getTopMovies: ", err)
      }
    }
    getTopMovies();
  }, []);

  async function searchFilter(query) {
    try {
      let response = await axios.get("https://api.themoviedb.org/3/movie?api_key=" + TMDbAPIKey + "&query=" + query + "&page=1");
      console.log("response.data in searchFilter", response.data.results);
      setSearchedMovie(response.data.results);
    } catch (err) {
      console.log("err in searchFilter: ", err);
    }
  }


  return (
    <div className="container">
      <div>
        <SearchMovies searchQueryData={searchFilter}/>
      </div>
      <div>
        <FoundMovies foundContent={searchedMovie}/>
      </div>
      <div>
        <FoundMovies foundContent={topMovies}/>
      </div>
    </div>
  );
};

export default HomePage;
