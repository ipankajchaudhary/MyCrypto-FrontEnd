import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import watchlistContext from '../../Context/watchlistContext';
import Watchlistitem from './Watchlistitem';

const Watchlists = ({ currentcurrency }) => {
    const context = useContext(watchlistContext);
         // eslint-disable-next-line
    const { watchlists, getWatchlists, editWatchlist } = context;
    useEffect(() => {
        getWatchlists()
        // eslint-disable-next-line
    }, [currentcurrency])
    const ref = useRef(null)
         // eslint-disable-next-line
    const refClose = useRef(null)
         // eslint-disable-next-line
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

    const renderifnotloggedin = () => {
        return (
            <div className="grid full-width-layout">
                <div className="inner-container">
                    <div className="link-main-container">
                        <div className="link-container-1">
                            <div class="link-container-2">
                                <a class="link-class-1" href="/Home">
                                    Home &nbsp;
                                </a>
                                <i class="fas fa-chevron-right" aria-hidden="true">
                                </i>
                                <span font-size="2,3" color="text" class="link-class-1">
                                    Watchlist
                                </span>
                            </div>
                        </div>
                    </div>
                    <div style={{ visibility: "visible", minHeight: "633px" }}>
                        <div display="flex" className="container-down">
                            <div className="container-down-inner">
                                <div className="left-actions">
                                    <div className="sign-up">
                                        Sign up Today
                                    </div>
                                    <h1>
                                        Crypto Tracker
                                    </h1>
                                    <p font-size="16" color="neutral6" className="text-container">
                                        Keep track of your favourite cryptocurrency | Add them in your Watchlist
                                    </p>
                                    <div>
                                        <button className=" create-portfolio-btn">
                                            <Link to="/Signup"><b>+</b> &nbsp;Create your Watchlist</Link>
                                            
                                        </button>
                                        <button className="login-button">
                                            <Link to="/Login"><b> Log In</b></Link>
                                            
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
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
        {(localStorage.getItem('token')) ? render() : renderifnotloggedin()}
        </>
    )
}

export default Watchlists