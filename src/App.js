import "./App.css";
import Navbar from "./Components/NavBar/Navbar";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Cryptocurrencies from "./Components/Cryptocurrencies/Cryptocurrencies";
import CoinDetails from "./Components/CoinDetails/CoinDetails";
// import Cryptocurrencies from "./Components/Cryptocurrencies/Cryptocurrencies";

function App() {

  const [currency, setcurrency] = useState("inr")

  return (
    <Router>
      <Navbar currentcurrency={currency} changecurrency={setcurrency}/>
     
      <Switch>
        <Route path="/Home">
          
          <Cryptocurrencies currentcurrency={currency}/>
        </Route>
        <Route path="/Cryptocurrencies">
          <Redirect to="/Home" />
          <Cryptocurrencies currentcurrency={currency}/>
        </Route>
        <Route path="/Login">

          <Login />
        </Route>
        <Route path="/SignUp">

          <SignUp />
        </Route>

        <Route path="/Coins/:id">

          <CoinDetails currentcurrency={currency}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
