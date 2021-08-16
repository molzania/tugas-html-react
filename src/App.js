import './App.css';
import molzania from './img/molzania.png';
import logo1 from './img/logo1.jpg';
import logo2 from './img/logo2.jpg';
import logo3 from './img/logo3.jpg';
import logo4 from './img/logo4.jpg';
import logo5 from './img/logo5.jpg';
import logo6 from './img/logo6.jpg';
import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <>
<header> 
        <h1 className="title">PORTOFOLIO</h1>
        <div className="navbar">
            <a className="menu" href="#Home">Home</a>
            <a className="menu" href="#About">Blog</a>
            <a className="menu" href="#Work">Work</a>
            <a className="menu" href="#Contact">Contact</a>
        </div>
    </header>
    <div className="about" alt="about">
            <img src={molzania} className="profil" alt="molzania" />
            <h2 className="h2">Hi, Saya Molzania!</h2>
            <p className="text">Saya memiliki hobi menulis sejak kecil. Saya bekerja sebagai konten kreator dan desainer grafis.
            Saya memiliki blog, youtube dan berbagai platform sosial media. </p>
            <p className="text">Nama asli saya Firsty Ukhti Molyndi. Saat ini saya tinggal di Palembang. Saya memulai blog sejak tahun 2009.</p>
        </div>
        <div className="work">
    <h1 className="portofolio">PORTOFOLIO</h1>
    <div className="flex-container">
        <img src={logo1} className="logo" alt="logo1" />
        <img src={logo2} className="logo" alt="logo2" />
        <img src={logo3} className="logo" alt="logo3" />
        <img src={logo4} className="logo" alt="logo4" />
        <img src={logo5} className="logo" alt="logo5" />
        <img src={logo6} className="logo" alt="logo6" />
    </div>
    <h1 className="portofolio">TONTON CHANNEL YOUTUBEKU YUK!</h1>
<div className="video">
    <iframe width="560" height="315" className="responsive-iframe" src="https://www.youtube.com/embed/w877_hNkXBQ" 
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
    encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    </div>
    <div className="navbar-bawah">
    <h2 className="sosial-media">Sosial Media</h2>
    <div className="flex-container">
        <i href="https://www.facebook.com/cinderella.vampire" className="fa fa-facebook"></i>
        <i href="https://www.twitter.com/vampiregadiez" className="fa fa-twitter"></i>
        <i href="https://www.instagram.com/molzania" className="fa fa-instagram"></i>
        <i href="https://www.youtube.com/channel/molzania" className="fa fa-youtube"></i>
    </div>
    </div>

    <footer>
  <h3 className="footer-text">Copyright&copy; Molzania -2021-</h3>
</footer>
</>
  );
}

export default App;
