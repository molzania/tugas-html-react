import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import { Link } from "react-router-dom";
import Main from "./Main"
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <>
<header> 
        <h1 className="title">PORTOFOLIO</h1>
        <div className="navbar">
            <p><Link to="/Home" className="link">Home</Link></p>
            <p className="menu" href="https://www.molzania.com">Blog</p>
            <p href="#Work"><Link to="./Work" className="link">Work</Link></p>
           <p href="#Contact"><Link to="/Contact" className="link">Contact</Link></p>
        </div>
    </header>
<Main/>
    <footer>
  <h3 className="footer-text">Copyright&copy; Molzania -2021-</h3>
</footer>
</>
  );
}

export default App;
