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
            <a><Link to="/Home" className="link">Home</Link></a>
            <a className="menu" href="https://www.molzania.com">Blog</a>
            <a><Link to="./Work" className="link">Work</Link></a>
           <a><Link to="/Contact" className="link">Contact</Link></a>
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
