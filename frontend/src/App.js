// General Imports
import { Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import MoviePage from "./pages/MoviePage/MoviePage";
import CastPage from "./pages/CastPage/CastPage";
import UserProfilePage from "./pages/UserProfilePage/UserProfilePage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {

  const [movie, setMovie] = useState([]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage movieSelect={setMovie}/>} />
        <Route path="/movie" element={<MoviePage movieSelect={movie}/>} />
        <Route path="/cast" element={<CastPage movieSelect={movie}/>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={
            <PrivateRoute>
              <UserProfilePage movieSelect={setMovie}/>
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
