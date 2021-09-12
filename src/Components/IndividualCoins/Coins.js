import React from 'react';
import "./Coinsstyle.css";

import { Link } from 'react-router-dom';


const Coins = ({ coin }) => {
    

    return (
        <>



            <tbody>
                <tr>
                    <td>
                        <div className="sc-131di3y-0 cLgOOr">
                            <Link to="/Cryptocurrencies" className="cmc-link"> ₹ {coin.current_price}</Link>
                        </div>
                    </td>


                    <td>
                        <div className="sc-131di3y-0 cLgOOr">
                            <Link to="/Cryptocurrencies" className="cmc-link"> ₹ {coin.high_24h}</Link>
                        </div>
                    </td>

                    <td>
                        <div className="sc-131di3y-0 cLgOOr">
                            <Link to="/Cryptocurrencies" className="cmc-link">  ₹ {coin.low_24h}</Link>
                        </div>
                    </td>
                    <td>
                        <div className="sc-131di3y-0 cLgOOr">
                            <Link to="/Cryptocurrencies" className={coin.price_change_percentage_24h < 0 ? "text-danger" : "text-success"}>
                                {" "}
                                {coin.price_change_percentage_24h < 0 ? <i className="fas fa-sort-down align-middle mr-3"></i>   : <i className="fas fa-sort-up align-middle mr-1"></i>}
                                
                                {coin.price_change_percentage_24h<0?Math.abs(coin.price_change_percentage_24h):coin.price_change_percentage_24h}</Link>
                        </div>
                    </td>
                    <td>
                        <div className="sc-131di3y-0 cLgOOr">
                            <Link to="/Cryptocurrencies" className="cmc-link">  ₹ {coin.market_cap_change_24h}</Link>
                        </div>
                    </td>
                    <td>
                        <div className="sc-131di3y-0 cLgOOr">
                            <Link to="/Cryptocurrencies" className="cmc-link">{coin.circulating_supply}</Link>
                        </div>
                    </td>
                    
                    
                    

                </tr>
            </tbody>



        </>
    )
}

export default Coins
