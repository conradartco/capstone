// General Imports
import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { TMDbAPIKey } from "../../keys";

// Component Imports
import TopMovies from "../../components/TopMovies/TopMovies";
import UserSearchMovies from "../../components/UserSearchMovies/UserSearchMovies";

const HomePage = (props) => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  
  const [user, token] = useAuth();
  // const [cars, setCars] = useState([]);
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
        let response = await axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=" + TMDbAPIKey);
        console.log("response.data.items in getTopMovies: ", response.data.results);
        setTopMovies(response.data.results)
      } catch (err) {
        console.log("err in getTopMovies: ", err)
      }
    }
    getTopMovies();
  }, []);  


  return (
    <div className="container">
      <div>
        <UserSearchMovies movieSelect={props.movieSelect}/>
      </div>
      <div>
        <TopMovies foundContent={topMovies} movieSelect={props.movieSelect}/>
      </div>
    </div>
  );
};

export default HomePage;
