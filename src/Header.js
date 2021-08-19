import React from "react";
import './App.css';
import { Link } from "react-router-dom";

function Header() {

     return (
        <header> 
        <h1 className="title">PORTOFOLIO</h1>
        <div className="navbar">
            <p><Link to="/Home" className="link">Home</Link></p>
            <p className="menu" href="https://www.molzania.com">Blog</p>
            <p href="#Work"><Link to="./Work" className="link">Work</Link></p>
           <p href="#Contact"><Link to="/Contact" className="link">Contact</Link></p>
        </div>
    </header>
     );

 }

 export default Header;