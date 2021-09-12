import React from 'react'

const NameSection = ({ detail }) => {

    const renderthiscomponent = () => {
        if (detail) {
            return (
              
            <div className="sc-16r8icm-0 kDzKwW nameSection">
                <div className="sc-16r8icm-0 gpRPnR nameHeader">
                    <img src={detail.image} height="32" width="32" alt={detail.symbol} />
                    <h2 className="sc-1q9q90x-0 jCInrl h1" color="text">
                        <div className="coinname">{detail.name}</div><small className="nameSymbol">{detail.symbol.toUpperCase()}</small></h2>
                    <span className="sc-80eeb0-1 iuAjRY is-starred">
                        <button className="x0o17e-0 eCXbyL sc-7pvt85-0 ccOrkS watchlistbtn">
                            <span className="icon-Star-Filled"><i className="far fa-star"></i> </span>
                        </button>
                    </span>

                </div>
                <div display="flex fw" className="sc-16r8icm-0 bILTHz">
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
