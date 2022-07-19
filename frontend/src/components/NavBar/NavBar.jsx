// General Imports
import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

// Component Imports
import "./NavBar.css";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" >
            <button>Home</button>
          </Link>
        </li>
        <li>
          {user ? (
            <button onClick={() => navigate("/profile")}>Profile</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login/Register</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
