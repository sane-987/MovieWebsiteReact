import React from "react";
import "./index.css";

const Nav = () => {
    return (
        <nav className = "nav">
            <a href="/" className="site-title">NETFLIX CLONE</a>
            <ul>
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