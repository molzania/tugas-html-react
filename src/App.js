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
            <a className="menu"><Link to="./Home">Home</Link></a>
            <a className="menu" href="https://www.molzania.com">Blog</a>
            <a className="menu"><Link to="">Work</Link></a>
           <a className="menu"><Link to="./Contact">Contact</Link></a>
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
