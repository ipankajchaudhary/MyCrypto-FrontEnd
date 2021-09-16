import "./App.css";
import Navbar from "./Components/NavBar/Navbar";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Cryptocurrencies from "./Components/Cryptocurrencies/Cryptocurrencies";
import CoinDetails from "./Components/CoinDetails/CoinDetails";
import Portfolio from "./Components/Portfolio/Portfolio";
import Watchlist from "./Components/Watchlist/Watchlist";
import WatchlistState from './Context/WatchlistState';

function App() {

  const [currency, setcurrency] = useState("inr")
  const [loggedin, setloggedin] = useState("false")
  const [authtoken, setauthtoken] = useState("")



  return (
    <>
      <WatchlistState>
    <Router>
      <Navbar currentcurrency={currency} changecurrency={setcurrency} currentlyloggedin={loggedin} changeloggedin={setloggedin} currentlyauthtoken={authtoken} changeauthtoken={setauthtoken}/>
     
      <Switch>
        <Route path="/Home">
          
              <Cryptocurrencies currentcurrency={currency}/>
        </Route>
        <Route path="/Cryptocurrencies">
          <Redirect to="/Home" />
              <Cryptocurrencies currentcurrency={currency}/>
        </Route>
        <Route path="/Login">

          <Login currentlyloggedin={loggedin} changeloggedin={setloggedin} currentlyauthtoken={authtoken} changeauthtoken={setauthtoken} />
        </Route>
        <Route path="/SignUp">

          <SignUp currentlyloggedin={loggedin} changeloggedin={setloggedin} currentlyauthtoken={authtoken} changeauthtoken={setauthtoken}/>
        </Route>

        <Route path="/Coins/:id">

          <CoinDetails currentcurrency={currency}/>
        </Route>
        <Route exact path="/Portfolio">

          <Portfolio currentlyloggedin={loggedin} currentlyauthtoken={authtoken}/>
        </Route>
        <Route exact path="/Watchlist">

              <Watchlist currentcurrency={currency}/>
        </Route>
      </Switch>
        </Router>
        </WatchlistState>
      </>
  );
}

export default App;
