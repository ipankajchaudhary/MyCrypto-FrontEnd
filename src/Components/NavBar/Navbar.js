import React from 'react'
import './Navbarstyle.css';
import {
    Link
} from "react-router-dom";

const Navbar = ({ currentcurrency, changecurrency}) => {
    
    const handlesetcurrency1 = () => {
        
        changecurrency("inr");
    };
    const handlesetcurrency2 = () => {
        
        changecurrency("usd");
    };
    console.log(currentcurrency)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ height: "52px" }}>
                <div className="container-fluid" style={{ backgroundColor: "#ffffff", borderBottom: "1px solid #eaeaea" }}>
                    <img className="main-logo mx-4 navbar-brand" src="https://user-images.githubusercontent.com/65165139/132937951-9e08e004-4943-4410-a80d-66b4e812b1f7.png" alt="Logo" />
                    <Link className="navbar-brand" to="/Home"> <b>MyCrypto</b></Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse pull-left" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 pull-left">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/Cryptocurrencies"> <b>CryptoCurrencies</b> </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Portfolio"> <b>Portfolio</b> </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Watchlist"> <b>Watchlist</b> </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Aboutus"> <b>About Us</b> </Link>
                            </li>
                        </ul>
                        <div className="navbar-text d-flex justify-content-between">
                            <div className="change-currency">
                            <button type="button" onClick={handlesetcurrency1} className="btn-outline-secondary">INR</button>
                            <button type="button" onClick={handlesetcurrency2} className="btn-outline-secondary">USD</button>
                            </div>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <i className="fas fa-bell mx-3 my-1" style={{ paddingTop: "8px", "borderRadius": "8px" }}></i>
                                </li>
                            </ul>
                            <Link to="/Login"><button type="button" className="btn-login" data-bs-toggle="modal"
                                data-bs-target="#exampleModal" style={{ height: "40px" }}>Login</button></Link>
                            <Link to="/SignUp"><button type="button" className="btn">Sign Up</button> </Link>

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
