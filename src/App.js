import "./App.css";
import Navbar from "./Components/NavBar/Navbar";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Cryptocurrencies from "./Components/Cryptocurrencies/Cryptocurrencies";
import CoinDetails from "./Components/CoinDetails/CoinDetails";
// import Cryptocurrencies from "./Components/Cryptocurrencies/Cryptocurrencies";

function App() {
  return (
    <Router>
      <Navbar />
     
      <Switch>
        <Route path="/Home">
          
          <Cryptocurrencies />
        </Route>
        <Route path="/Cryptocurrencies">
          <Redirect to="/Home" />
          <Cryptocurrencies />
        </Route>
        <Route path="/Login">

          <Login />
        </Route>
        <Route path="/SignUp">

          <SignUp />
        </Route>

        <Route path="/Coins/:id">

          <CoinDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
