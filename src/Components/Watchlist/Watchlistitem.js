import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import watchlistContext from '../../Context/watchlistContext';
import './Watchlistitemstyle.css'


const Watchlistitem = (props) => {

    // const {currentcurrency} = currentcurrency



    const context = useContext(watchlistContext);
    const { deleteWatchlist } = context;
         // eslint-disable-next-line
    const { watchlist, updateWatchlist } = props;
    const { currentcurrency } = props
    const [coins, setCoins] = useState([])


    useEffect(() => {

        const fetchData1 = async () => {
            const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets", {
                params: {
                    vs_currency: currentcurrency,
                    ids: watchlist.coinid
                }
            })

            // console.log(response.data);
            setCoins(response.data);
        }
        fetchData1();
             // eslint-disable-next-line
    }, [currentcurrency])


    const renderwatchlistitems = () => {
        if (coins[0]) {
            return (
                <div>
                    <div style={{ display: "flex" }} className="my-3 border container responsive" >
                        <div className="nameSection-1 nameSection decrease-flex-23">
                            <div className="nameSection-upper-part nameHeader">
                                <img src={coins[0].image} height="32" width="32" alt={coins[0].symbol} />
                                <h2 className=" coin-name-n-logo-container h1" color="text">
                                    <div className="coinname">{coins[0].name}</div><small className="nameSymbol">{coins[0].symbol.toUpperCase()}</small></h2>
                            </div>
                            <div display="flex fw" className="rank-container">
                                <div className="namePill namePillPrimary">Rank #{coins[0].market_cap_rank}</div>
                                <div className="namePill" >Coin</div>
                                <i style={{cursor:"pointer"}}className="far fa-trash-alt mx-2" onClick={() => { deleteWatchlist(watchlist._id) }}></i>
                                <div className="text-danger"> <b>Delete</b> </div>
                            </div>
                        </div>
                        <div className="priceSection decrease-flex-21">
                            <h1 className="priceHeading">{coins[0].name} Price<small>({coins[0].symbol.toUpperCase()})</small></h1>
                            <div className="priceTitle">
                                <div className="priceValue ">{(currentcurrency === "inr") ? "₹" : "$"}&nbsp;{coins[0].current_price}</div>
                                <span className=" price-change-btn ud">
                                    <span className=" price-change-btn upd">
                                        {" "}
                                        {coins[0].price_change_percentage_24h < 0 ? <i className="fas fa-sort-down align-middle mr-3"></i> : <i className="fas fa-sort-up align-middle mr-1"></i>}
                                        {coins[0].price_change_percentage_24h < 0 ? Math.abs(coins[0].price_change_percentage_24h).toFixed(2) : coins[0].price_change_percentage_24h.toFixed(2)}
                                    </span>
                                </span>
                            </div>
                            <div className="sliderSection">
                                <div className=" low-price-container low">
                                    <span className=" Low-High-Text">
                                        Low:
                                    </span>
                                    <span className=" Low-High-data">
                                        &nbsp;{(currentcurrency === "inr") ? "₹" : "$"}&nbsp;
                                        {coins[0].low_24h}
                                    </span>
                                </div>

                                <div className=" High-price-container high">
                                    <span className=" Low-High-Text">High:
                                    </span>
                                    <span className=" Low-High-data">
                                        &nbsp;{(currentcurrency === "inr") ? "₹" : "$"}&nbsp;{coins[0].high_24h}
                                    </span>
                                </div>
                                <div className=" namePillBase" display="inline-block">24h
                                </div>
                            </div>
                        </div>
                        <div className="statsSection ecrease-flex-50">
                            <div className="statsContainer" style={{ border: "none" }}>
                                <div className="statsBlock" style={{ border: "none" }}>
                                    <div className="statsBlockInner">
                                        <div className="statsLabel">
                                            Market Cap
                                        </div>
                                        <div className="statsItemRight">
                                            <div className="statsValue">
                                                &nbsp;{(currentcurrency === "inr") ? "₹" : "$"}&nbsp;{coins[0].market_cap}
                                            </div>
                                            <span className=" percent-change">
                                                {coins[0].market_cap_change_percentage_24h}%
                                            </span>
                                        </div>
                                    </div>
                                    <div className="statsBlockInner">
                                        <div className="  statsLabel">
                                            Volume
                                            <div className="  namePill">
                                                24h
                                            </div>
                                        </div>
                                        <div className="statsItemRight">
                                            <div className="statsValue">
                                                &nbsp;{(currentcurrency === "inr") ? "₹" : "$"}&nbsp; {coins[0].total_volume}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="statsBlock" style={{ borderRight: "none" }}>
                                    <div className=" second-stateBlock">
                                        <div className="  statsLabel">
                                            Circulating Supply
                                        </div>
                                        <div display="flex" className=" circulating-supply-value">
                                            <div className="statsValue">
                                                {coins[0].circulating_supply} {coins[0].symbol.toUpperCase()}
                                            </div>
                                        </div>

                                        <div display="flex" className=" total-supply">
                                            <div className="statsLabel">
                                                Max Supply

                                            </div>
                                            <div className="statsValue">
                                                {coins[0].max_supply}
                                            </div>
                                        </div>
                                        <div display="flex" className=" total-supply">
                                            <div className="statsLabel">
                                                Total Supply
                                            </div>
                                            <div className="statsValue">
                                                18,813,762
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <>
            {renderwatchlistitems()}


        </>
    )
}

export default Watchlistitem