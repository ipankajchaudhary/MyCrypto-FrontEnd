import React,  { useState } from 'react';
import './Portfoliostyle.css'
const Portfolio = ({ currentlyloggedin , currentlyauthtoken }) => {

  const host = "http://localhost:5000"
  const portfolioInitial = []
  const [portfolio, setPortfolio] = useState(portfolioInitial)

  // Get all Portfolio
  const getPortfolio = async () => {
    // API Call 
    const response = await fetch(`${host}/api/portfolio/fetchallportfolios`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
          "auth-token":  localStorage.getItem('token')
            //   localStorage.getItem('token')
      }
    });
      const json = await response.json()
    setPortfolio(json)
  }

  // Add a Portfolio
  const addPortfolio = async (coinid, amount, tag) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/portfolio/addportfolio`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({coinid, amount, tag})
    });

    const portfolio = await response.json();
    setPortfolio(portfolio.concat(portfolio))
  }

  // Delete a Portfolio
  const deletePortfolio = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/portfolio/deleteportfolio/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = response.json(); 
    const newPortfolio = portfolio.filter((portfolio) => { return portfolio._id !== id })
    setPortfolio(newPortfolio)
  }

  // Edit a Portfolio
  const editPortfolio = async (id, coinid, amount) => {
    // API Call 
    const response = await fetch(`${host}/api/portfolio/updateportfolio/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({coinid, amount})
    });
    const json = await response.json(); 

     let newPortfolio = JSON.parse(JSON.stringify(portfolio))
    // Logic to edit in client
    for (let index = 0; index < newPortfolio.length; index++) {
      const element = newPortfolio[index];
      if (element._id === id) {
        newPortfolio[index].coinid = coinid;
        newPortfolio[index].amount = amount;
        break; 
      }
    }  
    setPortfolio(newPortfolio);
  }
 



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

    console.log(portfolio)

    const renderIfloggedin = () => {
        return (
            <div>

            </div>
        )
    }

    return (
        <>
            {(localStorage.getItem('token')) ? renderIfloggedin() : renderifnotloggedin()}
        </>
        
    )
}

export default Portfolio
