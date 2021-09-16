import React, { useState } from "react";
import "./Loginstyle.css";
import { Link ,useHistory } from "react-router-dom"

const Login = ({changeloggedin , changeauthtoken}) => {
  const [credentials, setCredentials] = useState({email: "", password: ""}) 
    let history = useHistory();
  const [wrongcredentials, setwrongcredentials] = useState("false")
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
      const json = await response.json()
      console.log(json)
      if (json.error !== "Wrong Credentials") {
        changeauthtoken(json.authtoken)
        localStorage.setItem('token', json.authtoken);
        history.push("/Home");
        changeloggedin("true");
        console.log("Logged in")
        console.log(localStorage.getItem('token'))

      }
      else {
        setwrongcredentials("true")
        console.log("wrongcredentials")
      }
    }
    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
    return (
    <>
      <div className="login">
        <div className="LoginTitle"> <h3><b> Log In</b></h3></div>
        <div className="New">New to MyCrypto?
          <Link to="/SignUp" style={{ textDecoration: "none"}}> Create an account</Link></div>
        <br />
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label"> <b> Email address</b></label>
            <input type="email" className="form-control for-email" style={{borderRadius:"10px"}} value={credentials.email} onChange={onChange} id="emailHelp" name="email"placeholder="Enter your email address..." aria-describedby="emailHelp"  autoComplete="on"/>
            
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label" id="id_password"> <b> Password</b></label>
            <button type="submit" className="FP">Forgot password?</button>
            <input type="password" className="form-control password-input" value={credentials.password} onChange={onChange} name="password" id="password" autoComplete="on" placeholder="Enter your password..." />
            <i className="far fa-eye " id="show-eye"></i>
            <i className="far fas fa-eye-slash d-none " style={{ marginLeft: "0px", cursor: "pointer" }} id="hide_eye"></i>
            <p className={(wrongcredentials === "false" ? "d-none" : "text-danger")}>Wrong Credentials</p>
          <button type="submit" className="btn btn-primary">Log In</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
