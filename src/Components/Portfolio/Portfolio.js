import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import './Portfoliostyle.css'
import portfolioContext from '../../Context/portfolioContext';
import Portfolioitem from './Portfolioitem';
import axios from 'axios';

const Portfolio = ({ currentcurrency }) => {


  const [currentBalance, setcurrentBalance] = useState(0)


  const context = useContext(portfolioContext);
  // eslint-disable-next-line
  const { portfolios, getPortfolios, editPortfolio } = context;
  useEffect(() => {
    if (localStorage.getItem('token'))
    {
       getPortfolios()
      }
   
    // eslint-disable-next-line
  }, [])
  // eslint-disable-next-line
  const ref = useRef(null)
  // eslint-disable-next-line
  const refClose = useRef(null)


  // eslint-disable-next-line
  // const [portfolio, setPortfolio] = useState({ id: "", ecoinid: "", eamount: "" })

  // const updatePortfolio = (currentPortfolio) => {
  //   ref.current.click();
  //   setPortfolio({ id: currentPortfolio._id, ecoinid: currentPortfolio.coinid, eamount: currentPortfolio.amount })
  // }

  // const handleClick = (e)=>{ 
  //     editPortfolio(portfolio.id, portfolio.ecoinid, portfolio.eamount)
  //     refClose.current.click();
  // }

  // const onChange = (e)=>{
  //     setPortfolio({...portfolio, [e.target.name]: e.target.value})
  // }


  const renderifnotloggedin = () => {
    return (
      <div className="grid full-width-layout">
        <div className="inner-container">
          <div className="link-main-container">
            <div className="link-container-1">
              <div className="link-container-2">
                <a className="link-class-1" href="/Home">
                  Home &nbsp;
                </a>
                <i className="fas fa-chevron-right" aria-hidden="true">
                </i>
                <span fontSize="2,3" color="text" className="link-class-1">
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
                  <p fontSize="16" color="neutral6" className="text-container">
                    Keep track of your profits, losses and portfolio <br /> valuation with our easy to use platform.
                  </p>
                  <div>
                    <button className=" create-portfolio-btn">
                      <Link to="/Signup"><b>+</b> &nbsp;Create your Portfolio</Link>
                    </button>
                    <button className="login-button">
                      <Link to="/Login"><b> Log In</b></Link>
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

  // console.log(portfolios.length)

  const { addPortfolio } = context;

  const [portfolio, setPortfolio] = useState({ coinid: "", amount: "" })


  const handleClick = async (e) => {
    e.preventDefault();
    addPortfolio(portfolio.coinid, portfolio.amount);
    setPortfolio({ coinid: "", amount: "" })
    // console.log(portfolio.amount)
    const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets", {
      params: {
        vs_currency: currentcurrency,
        ids: portfolio.coinid
      }
    })
    setcurrentBalance(currentBalance + (response.data[0].current_price * portfolio.amount))
    localStorage.setItem('currentBalance', currentBalance)
  }
  const onChange = (e) => {
    setPortfolio({ ...portfolio, [e.target.name]: e.target.value })
  }





  const renderIfloggedin = () => {
    return (
      <div style={{ height: "fit-content" }}>
        <div className="grid full-width-layout">
          <div className="inner-container">
            <div className="link-main-container">
              <div className="link-container-1">
                <div className="link-container-2">
                  <a className="link-class-1" href="/Home">
                    Home &nbsp;
                  </a>
                  <i className="fas fa-chevron-right" aria-hidden="true">
                  </i>
                  <span fontSize="2,3" color="text" className="link-class-1">
                    Portfolio
                  </span>
                </div>
              </div>
            </div>
            <div className="portfolio-container">
              <div display="flex" className="portfolio-innner-container">
                <div className="leftcontainer showPortfolio" style={{ display: "block" }}>
                  <div display="flex" className="left-innner-container" style={{ marginBottom: "26px" }}>
                    <div className="display-100">
                      <div>
                        <div data-rbd-droppable-id="droppable" data-rbd-droppable-context-id="1">
                          <div data-rbd-draggable-context-id="1" data-rbd-draggable-id="614238c83a7b285d2f55b044" className="left-innner-upper-container">
                            <div className="my-main-portfolio">
                              <div className="my-main-portfolio-logo" style={{ backgroundColor: "rgb(35, 220, 245)" }}>
                                M
                              </div>
                              <div style={{ display: "block" }}>
                                <p style={{ display: "flex", alignItems: "center" }}>
                                  <span style={{ marginRight: "5px" }}>
                                    <b>My Main Portfolio</b>

                                  </span>
                                </p>
                                <p>
                                  <b>{(currentcurrency === "inr") ? "₹" : "$"}&nbsp;{currentBalance}</b>

                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-container" style={{ overflowX: "auto" }}>
                  <div style={{ position: "absolute", left: "-10000px" }}>
                  </div>
                  <div style={{ position: "initial", left: "0px" }}>
                    <div className="current-balance-container">
                      <p color="neutral6" fontSize="1" className="current-balance-headline-container">
                        <span className="current-balance-headline">
                          <b>Current Balance</b>
                        </span>
                      </p>
                      <div display="flex" height="48" className="amount-container">
                        <div display="flex" width="1,1,auto" className="amount-container-left">
                          <div className="price">
                            <b>{(currentcurrency === "inr") ? "₹" : "$"}&nbsp;{currentBalance}</b>

                          </div>
                        </div>
                        <div display="none,none,flex" className="add-new">
                          <input type="text" className="form-control m-3" id="coinid" placeholder="Name a coin" name="coinid" aria-describedby="emailHelp" value={portfolio.coinid.toLowerCase()} onChange={onChange} minLength={5} required autoFocus={true} />

                          <input type="text" className="form-control m-3" id="amount" placeholder="Amount" name="amount" value={portfolio.amount} onChange={onChange} minLength={5} required />
                          <button className="btn btn-primary plus-sign-container" onClick={handleClick}>
                            Add


                          </button>
                        </div>
                      </div>

                    </div>
                    <div display="none,none,flex" className="add-new-2">
                      <input type="text" className="form-control m-3" id="coinid" placeholder="Name a coin" name="coinid" aria-describedby="emailHelp" value={portfolio.coinid} onChange={onChange} minLength={5} required />
                      <input type="text" className="form-control m-3" id="amount" placeholder="Amount" name="amount" value={portfolio.amount} onChange={onChange} minLength={5} required />
                      <button className="btn btn-primary plus-sign-container" onClick={handleClick}>
                        Add


                      </button>
                    </div>
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Remove</th>
                          <th scope="col">CoinName</th>
                          <th scope="col">Holdings</th>
                          <th scope="col">Price per Coin</th>
                          <th scope="col">Total Amount</th>

                        </tr>
                      </thead>
                    </table>
                    {portfolios.length === 0 ?
                      <div className="right-down-container">
                        <div className="portfolio-empty-box">
                          <div className="p-e-coinid">
                            <b> This portfolio is empty</b>

                          </div>
                          <div className="p-e-subcoinid">
                            <b> Add any coin to get started</b>

                          </div>

                        </div>
                      </div>
                      :





                      portfolios.map((portfolio) => {
                        return <Portfolioitem key={portfolio._id} currentcurrency={currentcurrency} currentBalance={currentBalance} setcurrentBalance={setcurrentBalance} portfolio={portfolio} />
                      })

                    }


                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      {(localStorage.getItem('token')) ? renderIfloggedin() : renderifnotloggedin()}
    </div>

  )
}

export default Portfolio
