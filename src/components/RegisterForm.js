import React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "../sass/RegisterForm.scss";
import logo from "../assets/redister-image.png";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

function RegisterForm() {
  return (
    <div className="register-form">
      <div className="register-container">
        <Container className="register-card">
          <div className="form-content-one">
            <span className="register-form-title">Fundo</span>
            <span className="register-form-heading">
              Create your Fundo Account
            </span>
            <div className="input-text-container">
              <TextField
                className="text-field"
                id="outlined-basic"
                label="First Name*"
                variant="outlined"
              />
              <TextField
                className="text-field"
                id="outlined-basic"
                label="Last Name*"
                variant="outlined"
              />
            </div>
            <div className="input-username-container">
              <TextField
                id="outlined-basic"
                label="Username*"
                variant="outlined"
              />
              <span>You can use letters, numbers & periods</span>
            </div>
            <div className="password-container">
              <div className="input-text-container">
                <TextField
                  className="text-field"
                  id="outlined-basic"
                  label="Password*"
                  variant="outlined"
                />
                <TextField
                  className="text-field"
                  id="outlined-basic"
                  label="Confirm*"
                  variant="outlined"
                />
              </div>
              <span>
                Use * or more characters with a mix of letters,numbers & symbols
              </span>
            </div>
            <div className="register-button-container">
              <NavLink to="/login" className="login-link">Sign in insted</NavLink>
              <Button variant="contained">Register</Button>
            </div>
          </div>
          <div className="form-content-two">
            <img src={logo} alt="register-img"></img>
            <span>One account. All of Fundo working for you</span>
          </div>
        </Container>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default RegisterForm;
