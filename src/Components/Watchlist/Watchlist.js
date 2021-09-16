import React, { useContext, useEffect, useRef, useState } from 'react'
import watchlistContext from '../../Context/watchlistContext';
import Watchlistitem from '../Watchlistitem';

const Watchlists = ({ currentcurrency }) => {
    const context = useContext(watchlistContext);
    const { watchlists, getWatchlists, editWatchlist } = context;
    useEffect(() => {
        getWatchlists()
    }, [currentcurrency])
    const ref = useRef(null)
    const refClose = useRef(null)
    const [watchlist, setWatchlist] = useState({ id: "", ecoinid: "" })

    const updateWatchlist = (currentWatchlist) => {
        ref.current.click();
        setWatchlist({ id: currentWatchlist._id, ecoinid: currentWatchlist.coinid })
    }
    var stylingObject = {
        h3: {
            position: "relative",
            left: "35vw",
            width: "300px"
        }
    }


    const render = () => {
        if (watchlists) {
            return (


                <div className="row my-3">

                    {(watchlists.length === 0) ? <div><h3 style={stylingObject.h3}>Your watchlist is empty</h3> <br />  <b> <p style={stylingObject.h3}>Start building your watchlist now</p> </b></div> : <h2 style={stylingObject.h3}>Your Watchlists</h2>}
                    <div className="container mx-2">

                    </div>
                    {watchlists.map((watchlist) => {
                        return <Watchlistitem key={watchlist._id} updateWatchlist={updateWatchlist} watchlist={watchlist} currentcurrency={currentcurrency} />
                    })}
                </div>
            )
        }
    }
    return (
        <>
            {render()}
        </>
    )
}

export default Watchlists