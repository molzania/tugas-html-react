import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import Main from './Main';
import { Link } from "react-router-dom";


function App() {
  return (
    <>
<header> 
        <h1 className="title">PORTOFOLIO</h1>
        <div className="navbar">
            <a><Link to="./Home" className="link">Home</Link></a>
            <a className="menu" href="https://www.molzania.com">Blog</a>
            <a><Link to="" className="link">Work</Link></a>
           <a><Link to="./Contact" className="link">Contact</Link></a>
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
