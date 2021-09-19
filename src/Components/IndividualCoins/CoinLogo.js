import React, { useContext, useState } from 'react';
import "./CoinLogostyle.css";
import { Link } from 'react-router-dom';
import watchlistContext from '../../Context/watchlistContext';


const CoinLogo = ({ coin }) => {

    const context = useContext(watchlistContext);
    const { addWatchlist } = context;
    const [turnyellow, setturnyellow] = useState("false")

    // eslint-disable-next-line
    const [watchlist, setWatchlist] = useState({ coinid: "" })

    const handleClick = (e) => {
        e.preventDefault();
        addWatchlist(coin.id);
        // localStorage.setItem()
        setWatchlist({ coinid: "" })
        setturnyellow("true")
        alert("Added to watchlist")
    }

   
    return (
        <>
            <div className="for-hover">
                <span className="watchlist-icon-container-upper">
                    <button className="watchlist-icon watchlist-icon-12 watchlistbtn" style={{ border: "none" }} onClick={handleClick}>
                        <span className="icon-Star-Filled">
                            {" "}
                            {(turnyellow === "true") ? <i className="fa fa-star yellow-color " style={{ color: "blue" }} ></i> : <i className="fa fa-star"></i>}
                        </span>
                    </button>
                </span>
                <div className="index"> <p>{coin.market_cap_rank}</p>
                </div>
                <div className="logo-name-box">
                    <div display="flex" className="escjih">
                        <Link to={`/Coins/${coin.id}`} className="Link-to-detail-Page">
                            <div className="logo-name-container">
                                <img className="coin-logo" src={coin.image} alt="" />
                                <div className="coinname">
                                    <p>{coin.name}</p>
                                    <div className="coin-symbol">
                                        <p>{coin.symbol}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <div style={{ marginLeft: "8px" }}>
                            <button className="add-logo ml-3"><Link to="/Portfolio"><i className="fa fa-plus" ></i></Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoinLogo
