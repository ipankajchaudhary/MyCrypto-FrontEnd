import React from 'react'
import "./SignUpstyle.css"
import { Link } from 'react-router-dom'

function SignUp() {
    return (
        <div>
            <div className="signup">
                <div className="Head"> <h3><b> Create an account</b></h3></div>
                <div className="New">Gain access to additional features such as Watchlist and Portfolio tracking.
                    <br />Already have an account?
                    <Link to="/Login" style={{ textDecoration: "none" }}> Log In</Link></div>
                <form>
                    <div>
                        <label for="exampleInputEmail1" className="form-label"> <b> Full Name</b></label>
                        <input type="text" className="form-control" id="NameInput" placeholder="Enter your full name...." aria-describedby="name" />

                    </div>
                    <div>
                        <label for="exampleInputEmail1" className="form-label"> <b> Email address</b></label>
                        <input type="email" className="form-control" id="EmailInput" placeholder="Enter your email address..." aria-describedby="emailHelp" />

                    </div>
                    <div>
                        <label for="exampleInputPassword1" className="form-label" id="id_password"> <b> Password</b></label>
                        <input type="password" className="form-control password-input" id="Password" placeholder="Enter your password..." />
                        <i className="far fa-eye " id="show-eye" style={{ marginLeft: "0px", cursor: "pointer" }}></i>
                        <i className="far fas fa-eye-slash d-none " style={{ marginLeft: "0px", cursor: "pointer" }} id="hide_eye"></i>
                        <label for="exampleInputPassword1" className="form-label" id="id_password"> <b> Confirm Password</b></label>
                        <input type="text" className="form-control password-input"  placeholder="Enter your password again..." />
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
