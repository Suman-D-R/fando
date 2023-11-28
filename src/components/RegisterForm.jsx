import React, { useState } from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "../sass/RegisterForm.scss";
import logo from "../assets/redister-image.png";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import {signup} from "../utils/userService";

function RegisterForm() {

  const [data,setData] = useState({service:"advance"});
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  // const [isUsernameValid, setIsUsernameValid] = useState(true);


  const firstname = (e)=>{
    setData({...data,firstName:e.target.value})
  }

  const lastname = (e)=>{
    setData({...data,lastName:e.target.value})
  }

  const usernameRegex = /^[a-zA-Z0-9.]{5,}$/;

const username = (e) => {
  const value = e.target.value;
  setData({ ...data, email: value });
  // setIsUsernameValid(usernameRegex.test(value));
};

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const password = (e) => {
    const value = e.target.value;
    setData({ ...data, password: value });
    setIsPasswordValid(passwordRegex.test(value));
  };

  const conformpassword = (e) => {
    const value = e.target.value;

    setIsPasswordValid(passwordRegex.test(value) && data.password === value);
    // setData({...data ,  conformpassword: value});

  };

  function submit() {
    let signupData;
    signup(data).then((res)=>{
      signupData = res
    }).catch((err)=>{
      console.log(err);
    })
  }
  
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
                label="First Name"
                variant="outlined"
                size="small"
                required
                onChange={firstname}
              />
              <TextField
                className="text-field"
                id="outlined-basic"
                label="Last Name*"
                variant="outlined"
                size="small"
                onChange={lastname}
              />
            </div>
            <div className="input-username-container">
              <TextField
                id="outlined-basic"
                label="Username*"
                variant="outlined"
                size="small"
                onChange={username}
                // error={!isUsernameValid}
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
                  size="small"
                  onChange={password}
                  pattern={passwordRegex}
                  error={!isPasswordValid}
                />
                <TextField
                  className="text-field"
                  id="outlined-basic"
                  label="Confirm*"
                  variant="outlined"
                  size="small"
                  onChange={conformpassword}
                  pattern={passwordRegex}
                  error={!isPasswordValid}
                />
              </div>
              <span>
                Use * or more characters with a mix of letters,numbers & symbols
              </span>
            </div>
            <div className="register-button-container">
              <NavLink to="/" className="login-link">Sign in insted</NavLink>
              <NavLink to="/">
              <Button variant="contained" onClick={submit}>Register</Button>
              </NavLink>
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
