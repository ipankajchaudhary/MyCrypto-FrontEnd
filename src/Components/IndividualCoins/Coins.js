import React from 'react';
import "./Coinsstyle.css";

const Coins = ({ coin, currentcurrency }) => {
    
    
    

    return (
        <>
            <tbody>
                <tr>
                    <td>
                        <div >
                            <div className="cmc-div"> &nbsp;{(currentcurrency==="inr")?"₹":"$"}&nbsp; {coin.current_price}</div>
                        </div>
                    </td>
                    <td>
                        <div >
                            <div className="cmc-div"> &nbsp;{(currentcurrency==="inr")?"₹":"$"}&nbsp; {coin.high_24h}</div>
                        </div>
                    </td>

                    <td>
                        <div >
                            <div className="cmc-div">  &nbsp;{(currentcurrency==="inr")?"₹":"$"}&nbsp; {coin.low_24h}</div>
                        </div>
                    </td>
                    <td>
                        <div >
                            <div className={coin.price_change_percentage_24h < 0 ? "text-danger" : "text-success"}>
                                {" "}
                                {coin.price_change_percentage_24h < 0 ? <i className="fas fa-sort-down align-middle mr-3"></i>   : <i className="fas fa-sort-up align-middle mr-1"></i>}
                                
                                {coin.price_change_percentage_24h<0?Math.abs(coin.price_change_percentage_24h):coin.price_change_percentage_24h}</div>
                        </div>
                    </td>
                    <td>
                        <div >
                            <div className="cmc-div">  &nbsp;{(currentcurrency==="inr")?"₹":"$"}&nbsp; {coin.market_cap_change_24h}</div>
                        </div>
                    </td>
                    <td>
                        <div >
                            <div className="cmc-div">{coin.circulating_supply}</div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </>
    )
}

export default Coins
