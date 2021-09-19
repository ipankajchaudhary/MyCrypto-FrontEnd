import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

const UserDetails = () => {
    const host = "http://localhost:5000"
    const [userData, setuserData] = useState({})

    // let location = useLocation();
    let history = useHistory();

    useEffect(() => {

        const fetchData1 = async () => {
            const response = await fetch(`${host}/api/auth/getuser`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "auth-token": localStorage.getItem('token')
                }

            })
            const json = await response.json()
            setuserData(json)
        }
        fetchData1();

    }, [])

    const handleLogout = () => {
        localStorage.clear();
        console.log("Logged out")
        history.push("/");
    }

    return (
        <div style={{height:"90vh"}}>
        <div className="login" style={{height:"fit-content"}}>
            <div className="LoginTitle">
                <h3>
                    <b>
                        YOUR ACCOUNT
                    </b>
                </h3>
            </div>
            <div className="New">
                Details

            </div>
            <br />

            <div className="mb-3 d-flex flex-row justify-content-between">
                <div>
                    <b> NAME - </b></div>

                <div >
                    <b>{userData.name}</b>
                </div>

            </div>
            <div className="mb-3 d-flex flex-row justify-content-between">
                <div >
                    <b> Email Address - </b></div>

                <div>
                    <b>{userData.email}</b>
                </div>
            </div>
            <br />

            <ul className="mb-3 d-flex  flex-row justify-content-between">
                <li className="hover-underline-animation"><Link className="align-items-center" to="/Portfolio"> <b>Your Assets</b> </Link></li>
                <li className="hover-underline-animation"><Link to="/Watchlist"> <b> Your Watchlist</b></Link></li>
                <li className="hover-underline-animation" onClick={handleLogout} style={{cursor:"pointer"}}> <b>Logout</b></li>
            </ul>
            
            </div>
            </div>
    )
}

export default UserDetails
