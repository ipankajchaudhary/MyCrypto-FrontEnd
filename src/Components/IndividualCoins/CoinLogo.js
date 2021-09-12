import React from 'react';
import "./CoinLogostyle.css";
import { Link } from 'react-router-dom';

const CoinLogo = ({ coin }) => {
    return (
        <>
            <div className="for-hover">
                <div className="index"> <p>{coin.market_cap_rank}</p> </div>
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
                        <div style={{marginLeft:"8px"}}>
                            <button className="add-logo ml-3"><i className="fa fa-plus"></i></button>
                            
                        </div>
                    
                    
                    </div>

                
                
                </div>
            </div>
        </>
    )
}

export default CoinLogo
