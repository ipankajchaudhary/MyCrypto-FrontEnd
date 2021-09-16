import React, { useState } from 'react'
import './Navbarstyle.css';
import { Link ,useHistory, useLocation } from "react-router-dom";

const Navbar = ({ currentcurrency, changecurrency, currentlyloggedin, changeloggedin, changeauthtoken, currentlyauthtoken }) => {
    let location = useLocation();
    let history = useHistory();
    const [height, setheight] = useState('55px')
    const [display, setdisplay] = useState('block')

    const handlesetcurrency1 = () => {

        changecurrency("inr");
    };
    const handlesetcurrency2 = () => {

        changecurrency("usd");
    };

    const handleLogout = () => {
        localStorage.clear();
        console.log("Logged out")
        history.push("/Home");
        changeloggedin("false")
        changeauthtoken(" ")        
    }
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light  bg-white" style={{ height: "52px" }}>
                <div className="container-fluid" style={{ backgroundColor: "#ffffff", borderBottom: "1px solid #eaeaea" }}>
                    <img className="main-logo mx-4 navbar-brand" src="https://user-images.githubusercontent.com/65165139/132937951-9e08e004-4943-4410-a80d-66b4e812b1f7.png" alt="Logo" />
                    <Link className="navbar-brand" to="/Home"> <b>MyCrypto</b></Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse pull-left" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 pull-left">
                            <li className="nav-item c">
                                <Link className="nav-link active" aria-current="page" to="/Cryptocurrencies"> <b>CryptoCurrencies</b> </Link>
                            </li>
                            <li className="nav-item p">
                                <Link className={`nav-link ${location.pathname==="/Portfolio"? "active": ""}`} to="/Portfolio"> <b>Portfolio</b> </Link>
                            </li>
                            <li className="nav-item w">
                                
                                <Link className={`nav-link ${location.pathname==="/Watchlist"? "active": ""}`} to="/Watchlist" > <b>Watchlist</b> </Link>
                            </li>
                            <li className="nav-item a">
                                <Link className="nav-link" to="/Aboutus"> <b>About Us</b> </Link>
                            </li>
                        </ul>
                        <div className="navbar-text d-flex justify-content-between cc">
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
                                    <i className={(!localStorage.getItem('token')) ? "d-none" : "fa fa-user-circle-o"} style={{ fontSize: "24px", marginTop: "10px", marginRight: "10px", cursor: "pointer" }}></i>
                                </li>
                            </ul>

                            <Link to="/Login"><button type="button" className={(localStorage.getItem('token')) ? "d-none" : "btn-login"} data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ height: "40px" }}>Login</button></Link>
                            <Link to="/SignUp"><button type="button" className={(localStorage.getItem('token')) ? "d-none" : "btn"}>Sign Up</button> </Link>
                            <button type="button" className={(!localStorage.getItem('token')) ? "d-none" : "btn-login"} data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ height: "40px" }} onClick={handleLogout}>Log out</button>

                        </div>
                    </div>

                    <form className="d-flex for-desktop search-form mobileHide" >
                        <input className="searchbox  margin-right" type="search" placeholder="Search" aria-label="Search" style={{ width: "100px", marginLeft: "10px" }} />
                        <button className="btn btn-outline-success margin-right" type="submit"><i className="fas fa-search"></i></button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
