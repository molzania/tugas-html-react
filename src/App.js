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
            <p className="menu" href="#Home">Home</p>
            <p className="menu" href="https://www.molzania.com">Blog</p>
            <p className="menu" href="#Work"><Link to="">Work</Link></p>
           <p className="menu" href="#Contact"><Link to="./Contact">Contact</Link></p>
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
