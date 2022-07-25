// General Imports
import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import { Link } from "react-router-dom";

// Component Imports
import "./LoginPage.css";

const LoginPage = () => {
  const { loginUser, isServerError } = useContext(AuthContext);
  const defaultValues = { username: "", password: "" };
  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    defaultValues,
    loginUser
  );

  useEffect(() => {
    if (isServerError) {
      reset();
    }
  }, [isServerError]);

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-field">
          <label>Username</label>
          <input
            className="login-input"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-field">
          <label>Password</label>
          <input
            className="login-input secret"
            type="text"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="link-field">
          {isServerError ? (
            <p className="error">Login failed, incorrect credentials</p>
          ) : null}
          <Link to="/register"><span className="register-link">Register</span></Link>
          <button className="login-submit">Login</button>
        </div>
        
      </form>
    </div>
  );
};

export default LoginPage;
