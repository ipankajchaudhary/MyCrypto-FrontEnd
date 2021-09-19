import React from 'react'
import { Link } from 'react-router-dom'

const Aboutus = () => {
    return (
        <div>
            <div style={{ height: "80vh" }}>
                <div className="signup">
                    <h4> <b>Building According to the latest web standards</b> </h4>
                    <br />
                    <b style={{ borderBottom: "2px solid grey" }}> Talking about Myself....</b>

                    <br />
                    <br />
                    I am Pankaj Chaudhary, a computer science engineering student from Noida. <br /> I design and develop full stack web applications
                    <br />
                    Connect with me...
                    <br />
                    <br />
                    <ul className="footer-links">
                                <li><Link target="_blank" to="https://www.linkedin.com/in/pankaj-chaudhary-067b041a6/">  <b>Linkedin</b> </Link></li>
                                <li><Link target="_blank" to="https://github.com/ipankajchaudhary">      <b>Github</b>  </Link></li>
                                <li><Link target="_blank" to="https://www.instagram.com/i_pankajchaudhary/">  <b>Instagram</b>    </Link></li>
                    </ul>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Aboutus
