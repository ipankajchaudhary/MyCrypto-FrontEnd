import React, { useState } from 'react'
import "./SignUpstyle.css"
import { Link ,useHistory } from 'react-router-dom'

function SignUp({currentlyloggedin, changeloggedin ,currentlyauthtoken, changeauthtoken}) {

    const [credentials, setCredentials] = useState({name: "", email: "", password: ""}) 
    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name,email,password})
        });
        const json = await response.json()
        changeauthtoken(json.authtoken)
        console.log(json);
            // Save the auth token and redirect
        localStorage.setItem('token', json.authtoken); 
        history.push("/Home");
        changeloggedin("true")
        console.log("Logged in")
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }













    return (
        <div>
            <div className="signup">
                <div className="Head"> <h3><b> Create an account</b></h3></div>
                <div className="New">Gain access to additional features such as Watchlist and Portfolio tracking.
                    <br />Already have an account?
                    <Link to="/Login" style={{ textDecoration: "none" }}> Log In</Link></div>
                <form onSubmit ={handleSubmit}>
                    <div>
                        <label for="exampleInputEmail1" className="form-label"> <b> Full Name</b></label>
                        <input type="text" className="form-control" id="NameInput" name="name" placeholder="Enter your full name...." aria-describedby="name" onChange={ onChange}/>

                    </div>
                    <div>
                        <label for="exampleInputEmail1" className="form-label"> <b> Email address</b></label>
                        <input type="email" className="form-control" id="EmailInput" name="email" placeholder="Enter your email address..." aria-describedby="emailHelp" onChange={ onChange} />

                    </div>
                    <div>
                        <label for="exampleInputPassword1" className="form-label" id="id_password"> <b> Password</b></label>
                        <input type="password" className="form-control password-input" id="Password" name="password" placeholder="Enter your password..."  onChange={ onChange}/>
                        <i className="far fa-eye " id="show-eye" style={{ marginLeft: "0px", cursor: "pointer" }}></i>
                        <i className="far fas fa-eye-slash d-none " style={{ marginLeft: "0px", cursor: "pointer" }} id="hide_eye"></i>
                        <label for="exampleInputPassword1" className="form-label" id="id_password"> <b> Confirm Password</b></label>
                        <input type="text" className="form-control password-input" id="cpassword" name="cpassword"  placeholder="Enter your password again..." onChange={ onChange}/>
                        <div className="New">Password should contain both letter and number, with minimum length of 8 characters. </div>
                        <br />
                        <button type="submit" className="btn btn-primary"> <b> Create an account</b></button>
                    </div>


                </form>
            </div>
        </div>
    )
}

export default SignUp
