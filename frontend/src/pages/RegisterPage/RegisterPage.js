// General Imports
import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";

// Component Imports
import './RegisterPage.css';

const RegisterPage = () => {
  const { registerUser } = useContext(AuthContext);
  const defaultValues = {
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
  };
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    defaultValues,
    registerUser
  );

  return (
    <div>
      <div className="form-container">
        <div className="register-container">
          <form className="register-form" onSubmit={handleSubmit}>
            <label>Username</label>
            <input
              className="register-input"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
            <label>Email</label>
            <input
              className="register-input"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <label>Password</label>
            <input
              className="register-input"
              type="text"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <p className="password-note">
              Make this an uncommon password with characters, numbers, and
              special characters
            </p>
          </form>
        </div>
        <div className="register-container">
          <form className="info-form" onSubmit={handleSubmit}>
            <label>First Name</label>
            <input
              className="register-input"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <label>Last Name</label>
            <input
              className="register-input"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            <label>Street</label>
            <input
              className="register-input"
              type="text"
              name="street"
              value={formData.street}
              onChange={handleInputChange}
            />
            <label>City</label>
            <input
              className="register-input"
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
            />
            <div className="flex-box">
              <div className="state-zip-flex">
                <label>State</label>
                <input
                  className="state-input"
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                />
              </div>
              <div className="state-zip-flex">
                <label>Zip Code</label>
                <input
                  className="zip-input"
                  type="text"
                  name="zipcode"
                  value={formData.zipcode}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            
          </form>
        </div>
      </div>
      <div className="register-button-container">
        <button className="register-button" type="submit">Register</button>
      </div>
    </div>
  );
};

export default RegisterPage;
