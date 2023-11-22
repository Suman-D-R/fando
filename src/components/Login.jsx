import React from "react";
import "../sass/Login.scss";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import Footer from "./Footer";

function Login() {
  return (
    <div className="login-container">
      <div className="login-form-container">
        <div className="login-card-container">
          <div className="form-content">
            <div className="login-title">Fundo</div>
            <div className="login-heading">Sign in</div>
            <span>Use your Fundo Account</span>
            <TextField
              id="outlined-basic"
              label="Email or phone*"
              variant="outlined"
              size="small"
            />
            <div className="password-container">
              <TextField
                id="outlined-basic"
                label="Password*"
                variant="outlined"
                size="small"
              />
              <span>Forget password</span>
            </div>
            <div className="login-button-container">
              <NavLink to="/" className="login-link">Create account</NavLink>
              <Button variant="contained">Login</Button>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Login;
