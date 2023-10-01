import React, { useState } from "react";
import "./index.css";

function Nav() {

    const [ismenuOpen, setismenuOpen] = useState(false)

    return (
        <nav className = "nav">
            <a href="/" className="site-title">NETFLIX CLONE</a>
            <div className="hamburger" onClick={() => {setismenuOpen(!ismenuOpen)}}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className = {ismenuOpen?"open":"close"}>
                <li className="active">
                    <a href="/Home">Home</a>
                </li>
                <li>
                    <a href="/Genre">Genre</a>
                </li>
                <li>
                    <a href="/AboutUs">About Us</a>
                </li>
                <li>
                    <a href="/ContactUs">Contact Us</a>
                </li>
            </ul>
            
            
        </nav>
    )
}

export default Nav