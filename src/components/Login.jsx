import React, { useState } from "react";
import "../sass/Login.scss";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import Footer from "./Footer";
import { getDetails, login } from "../utils/userService";
import { useNavigate } from "react-router-dom";

function Login() {
  const [data, setData] = useState();
  const navigate = useNavigate();

  const email = (e) => {
    setData({ ...data, email: e.target.value });
  };

  const passowrd = (e) => {
    setData({ ...data, password: e.target.value });
  };

  const submit = async () => {
    await login(data)
      .then((response) => {
        const data = response.data.data;

        localStorage.setItem("accessToken", data);

        getDetails(data).then((response) => {
          const { firstName, lastName, email } = response.data;

          localStorage.setItem("userName", firstName + " " + lastName);
          localStorage.setItem("email", email);
        });

        navigate("/notes");
      })
      .catch((err) => console.log(err));
  };

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
              onChange={email}
            />
            <div className="password-container">
              <TextField
                id="outlined-basic"
                label="Password*"
                variant="outlined"
                size="small"
                onChange={passowrd}
              />
              <span>Forget password</span>
            </div>
            <div className="login-button-container">
              <NavLink to="/signup" className="login-link">
                Create account
              </NavLink>
              <Button variant="contained" onClick={submit}>
                Login
              </Button>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Login;
