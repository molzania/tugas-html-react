import React from "react";
import './App.css';
import { Link } from "react-router-dom";

function Header() {

     return (
        <header> 
        <h1 className="title">PORTOFOLIO</h1>
        <div className="navbar">
            <a><Link to="/Home" className="link">Home</Link></a>
            <a target="_blank" className="link" href="https://www.molzania.com">Blog</a>
            <a><Link to="./Work" className="link">Work</Link></a>
           <a><Link to="/Contact" className="link">Contact</Link></a>
        </div>
    </header>
     );

 }

 export default Header;