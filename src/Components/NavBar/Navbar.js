import React from 'react'
import './Navbarstyle.css';
import { Link, useHistory, useLocation } from "react-router-dom";

const Navbar = ({ currentcurrency, changecurrency, changeloggedin, changeauthtoken }) => {
    let location = useLocation();
    let history = useHistory();

    const handlesetcurrency1 = () => {

        changecurrency("inr");
    };
    const handlesetcurrency2 = () => {

        changecurrency("usd");
    };

    const handleLogout = async () => {
        localStorage.clear();
        // console.log("Logged out")
        await history.push("/");
        changeloggedin("false")
        changeauthtoken(" ")
    }
    

    return (

        <>
           <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light  bg-white" style={{ height: "52px" }}>
                <div className="container-fluid" style={{ backgroundColor: "#ffffff", borderBottom: "1px solid #eaeaea" }}>
                        <img className="main-logo mx-4 navbar-brand" src="https://user-images.githubusercontent.com/65165139/132937951-9e08e004-4943-4410-a80d-66b4e812b1f7.png" alt="Logo" style={{width:"42px", height:"49px"}}/>
                    <Link className="navbar-brand" to="/"> <b>MyCrypto</b></Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active hover-underline-animation" aria-current="page" to="/"> <b>CryptoCurrencies</b> </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==="/Portfolio"? "active hover-underline-animation": "hover-underline-animation"}`} to="/Portfolio"> <b>Portfolio</b> </Link>
                            </li>
                            <li className="nav-item">
                                
                                <Link className={`nav-link ${location.pathname==="/Watchlist"? "active hover-underline-animation": "hover-underline-animation"}`} to="/Watchlist" > <b>Watchlist</b> </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link hover-underline-animation" to="/Aboutme"> <b>About Me</b> </Link>
                            </li>
                        </ul>
                        <div className="navbar-text d-flex justify-content-between">
                            <div className="change-currency">
                                <button type="button" onClick={handlesetcurrency1} className={currentcurrency === "inr" ? "dark-grey btn-outline-secondary" : "light-grey btn-outline-secondary"}>INR</button>
                                <button type="button" onClick={handlesetcurrency2} className={currentcurrency === "usd" ? "dark-grey btn-outline-secondary" : "light-grey btn-outline-secondary"}>USD</button>
                            </div>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <i className="fas fa-bell mx-3 my-1" style={{ paddingTop: "8px", "borderRadius": "8px" }}></i>
                                </li>
                            </ul>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to='/UserDetails'><i className={(!localStorage.getItem('token')) ? "d-none" : "fa fa-user-circle-o"} style={{ fontSize: "24px", marginTop: "10px", marginRight: "10px", cursor: "pointer" }}></i></Link> 
                                </li>
                            </ul>

                            <Link to="/Login" style={{marginRight:"10px"}}><button type="button" className={(localStorage.getItem('token')) ? "d-none" : "btn-login btn btn-primary"} data-bs-toggle="modal" data-bs-target="#exampleModal" >Login</button></Link>
                            <Link to="/SignUp"><button type="button" className={(localStorage.getItem('token')) ? "d-none" : "btn-login  btn btn-primary"} >Sign Up</button> </Link>
                            <button type="button" className={(!localStorage.getItem('token')) ? "d-none" : "btn-login  btn btn-primary"} data-bs-toggle="modal" data-bs-target="#exampleModal"  onClick={handleLogout}>Log out</button>

                        </div>
                    </div>

                    
                </div>
            </nav>
        </div>
    
        </>
    )
}

export default Navbar
