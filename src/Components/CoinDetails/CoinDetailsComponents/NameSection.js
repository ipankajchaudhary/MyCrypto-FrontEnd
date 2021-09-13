import React from 'react'

const NameSection = ({ detail }) => {

    const renderthiscomponent = () => {
        if (detail) {
            return (
              
            <div className=" nameSection-1 nameSection">
                <div className=" nameSection-upper-part nameHeader">
                    <img src={detail.image} height="32" width="32" alt={detail.symbol} />
                    <h2 className=" coin-name-n-logo-container h1" color="text">
                        <div className="coinname">{detail.name}</div><small className="nameSymbol">{detail.symbol.toUpperCase()}</small></h2>
                    <span className="watchlist-icon-container">
                        <button className="watchlist-icon watchlist-icon-1 watchlistbtn">
                            <span className="icon-Star-Filled"><i className="far fa-star"></i> </span>
                        </button>
                    </span>

                </div>
                <div display="flex fw" className="rank-container">
                    <div className="namePill namePillPrimary">Rank #{detail.market_cap_rank}</div>
                    <div className="namePill" >Coin</div>
                </div>
            </div>
   
            )
        }
    }
    return (
        <> { renderthiscomponent()}
            </>
    )
}

export default NameSection
