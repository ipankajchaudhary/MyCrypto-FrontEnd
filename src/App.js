import "./App.css";
import Navbar from "./Components/NavBar/Navbar";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Cryptocurrencies from "./Components/Cryptocurrencies/Cryptocurrencies";
import CoinDetails from "./Components/CoinDetails/CoinDetails";
import Portfolio from "./Components/Portfolio/Portfolio";
import Watchlist from "./Components/Watchlist/Watchlist";
import WatchlistState from './Context/WatchlistState';
import PortfolioState from "./Context/PortfolioState";
import UserDetails from "./Components/UserDetails/UserDetails";
import Aboutus from "./Components/Aboutus/Aboutus";

function App() {

  const [currency, setcurrency] = useState("inr")
  const [loggedin, setloggedin] = useState("false")
  const [authtoken, setauthtoken] = useState("")




  return (
    <>
    <div id="container">
      <PortfolioState>
        <WatchlistState>
          <Router>
            <Navbar currentcurrency={currency} changecurrency={setcurrency} currentlyloggedin={loggedin} changeloggedin={setloggedin} currentlyauthtoken={authtoken} changeauthtoken={setauthtoken} />
            <div id="main-content">

            <Switch>
              <Route exact path="/">

                <Cryptocurrencies currentcurrency={currency} />
              </Route>
              
              <Route exact path="/Login">

                <Login currentlyloggedin={loggedin} changeloggedin={setloggedin} currentlyauthtoken={authtoken} changeauthtoken={setauthtoken} />
              </Route>
              <Route exact path="/SignUp">

                <SignUp currentlyloggedin={loggedin} changeloggedin={setloggedin} currentlyauthtoken={authtoken} changeauthtoken={setauthtoken} />
              </Route>

              <Route exact path="/Coins/:id">

                <CoinDetails currentcurrency={currency} />
              </Route>
              <Route exact path="/Portfolio">

                <Portfolio currentcurrency={currency} />
              </Route>
              <Route exact path="/Watchlist">

                <Watchlist currentcurrency={currency} />
              </Route>
              <Route exact path="/UserDetails">

                <UserDetails />
                  </Route>
                  <Route exact path="/Aboutme">

                  <Aboutus />
                </Route>
            </Switch>
            </div>
            </Router>
        </WatchlistState>
        </PortfolioState>
        </div>
      </>
      );
}

      export default App;
