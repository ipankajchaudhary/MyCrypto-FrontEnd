import WatchlistContext from "./watchlistContext";
import { useState } from "react";

const WatchlistState = (props) => {
  const host = "https://my--crypto.herokuapp.com"
    // "https://git.heroku.com/my--crypto.git"
  // "http://localhost:5000"
  const watchlistsInitial = []
  const [watchlists, setWatchlists] = useState(watchlistsInitial)

  // Get all Watchlists
  const getWatchlists = async () => {
    // API Call 
    const response = await fetch(`${host}/api/watchlist/fetchallwatchlists`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });

    const json = await response.json() 
    setWatchlists(json)
  }

  // Add a Watchlist
  const addWatchlist = async (coinid) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/watchlist/addwatchlist`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({coinid})
    });

      const watchlist = await response.json();
      console.log(watchlist)
    setWatchlists(watchlists.concat(watchlist))
  }

  // Delete a Watchlist
  const deleteWatchlist = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/watchlist/deletewatchlist/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
         // eslint-disable-next-line
    const json = response.json(); 
    const newWatchlists = watchlists.filter((watchlist) => { return watchlist._id !== id })
    setWatchlists(newWatchlists)
  }

  // Edit a Watchlist
  const editWatchlist = async (id, coinid) => {
    // API Call 
    const response = await fetch(`${host}/api/watchlist/updatewatchlist/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({coinid})
    });
         // eslint-disable-next-line
    const json = await response.json(); 

     let newWatchlists = JSON.parse(JSON.stringify(watchlists))
    // Logic to edit in client
    for (let index = 0; index < newWatchlists.length; index++) {
      const element = newWatchlists[index];
      if (element._id === id) {
        newWatchlists[index].coinid = coinid;

        break; 
      }
    }  
    setWatchlists(newWatchlists);
  }

  return (
    <WatchlistContext.Provider value={{ watchlists, addWatchlist, deleteWatchlist, editWatchlist, getWatchlists }}>
      {props.children}
    </WatchlistContext.Provider>
  )

}
export default WatchlistState;