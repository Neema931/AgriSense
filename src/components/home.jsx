import { useState } from "react";

import "./style.css";

export default function Home({ onNavigate }) {
    return(
        <div className = "navbar">
            <h1>AGRI SENSE 🌱</h1>
            <div className="nav-links">
                <a href="/about-us">About Us</a>
                <a href="/contact-us">Contact Us</a>
                <a href="/services">Services</a>
                <a href="/blog">Blog</a>
               <div className = "buttons"> 
                <button onClick={() => onNavigate("login")}>Login</button>
                </div>
            </div>
        </div>
    );
}