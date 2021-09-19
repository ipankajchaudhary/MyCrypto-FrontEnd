import React , {useContext, useState}  from 'react'
import watchlistContext from '../../../Context/watchlistContext';

const NameSection = ({ detail }) => {

    const context = useContext(watchlistContext);
    const {addWatchlist} = context;
    // eslint-disable-next-line
    const [watchlist, setWatchlist] = useState({ coinid: "" })
    const [turnyellow, setturnyellow] = useState("false")

    const handleClick = (e)=>{
        e.preventDefault();
        addWatchlist(detail.id);
        setWatchlist({ coinid: "" })
        setturnyellow("true")
    }
    
    const renderthiscomponent = () => {
        if (detail) {
            return (
              
            <div className=" nameSection-1 nameSection">
                <div className=" nameSection-upper-part nameHeader">
                    <img src={detail.image} height="32" width="32" alt={detail.symbol} />
                    <h2 className=" coin-name-n-logo-container h1" color="text">
                        <div className="coinname">{detail.name}</div><small className="nameSymbol">{detail.symbol.toUpperCase()}</small></h2>
                    <span className="watchlist-icon-container">
                        <button className="watchlist-icon watchlist-icon-1 watchlistbtn" onClick={handleClick}>
                                <span className="icon-Star-Filled">
                                {" "}
                                {(turnyellow === "true") ?  <i className="fa fa-star yellow-color " style={{color:"blue"}} ></i>   : <i className="fa fa-star"></i>}
                                    </span>
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
