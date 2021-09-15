import React from 'react';
import './Portfoliostyle.css'
const Portfolio = ({ currentlyloggedin }) => {




    const renderifnotloggedin = () => {
        return (
            <div className="grid full-width-layout">
                <div className="inner-container">
                    <div className="link-main-container">
                        <div className="link-container-1">
                            <div class="link-container-2">
                                <a class="link-class-1" href="/Home">
                                    Home &nbsp;
                                </a>
                                <i class="fas fa-chevron-right" aria-hidden="true">
                                </i>
                                <span font-size="2,3" color="text" class="link-class-1">
                                    Portfolio
                                </span>
                            </div>
                        </div>
                    </div>
                    <div style={{ visibility: "visible", minHeight: "633px" }}>
                        <div display="flex" className="container-down">
                            <div className="container-down-inner">
                                <div className="left-actions">
                                    <div className="sign-up">
                                        Sign up Today
                                    </div>
                                    <h1>
                                        Crypto Portfolio Tracker
                                    </h1>
                                    <p font-size="16" color="neutral6" className="text-container">
                                        Keep track of your profits, losses and portfolio <br /> valuation with our easy to use platform.
                                    </p>
                                    <div>
                                        <button className=" create-portfolio-btn">
                                            <b>+</b> &nbsp;Create your Portfolio
                                        </button>
                                        <button className="login-button">
                                            <b> Log In</b>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    const renderIfloggedin = () => {
        return (
            <div>
                Logged in
            </div>
        )
    }

    return (
        <>
            {currentlyloggedin === "true" ? renderIfloggedin() : renderifnotloggedin()}
        </>
        
    )
}

export default Portfolio
