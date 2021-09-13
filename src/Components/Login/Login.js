import React from "react";
// import Navbar from "../../NavBar/Navbar";
// import { Link } from "react-router-dom";
import "./Loginstyle.css";
import { Link } from "react-router-dom";
// import { useState } from "react";
// import ReactDOM from 'react-dom' 

const Login = () => {


  
  // var myModal = new bootstrap.Modal(document.getElementById('myModal'), options)
  return (
    <>
      <div className="container login">
        <div className="LoginTitle"> <h3><b> Log In</b></h3></div>
        <div className="New">New to MyCrypto?
          <Link to="/SignUp" style={{ textDecoration: "none"}}> Create an account</Link></div>
        <br />
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label"> <b> Email address</b></label>
            <input type="email" className="form-control for-email" style={{borderRadius:"10px"}} id="exampleInputEmail1" placeholder="Enter your email address..." aria-describedby="emailHelp"  autoComplete="on"/>
            
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label" id="id_password"> <b> Password</b></label>
            <button type="submit" className="FP">Forgot password?</button>
            <input type="password" className="form-control password-input" id="Password"  autoComplete="on" placeholder="Enter your password..." />
            <i className="far fa-eye " id="show-eye"></i>
            <i className="far fas fa-eye-slash d-none " style={{ marginLeft: "0px", cursor: "pointer" }} id="hide_eye"></i>
          <button type="submit" className="btn btn-primary">Log In</button>
          </div>
          

        </form>
      </div>
    </>
  );
};

export default Login;
