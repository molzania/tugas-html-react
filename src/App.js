import './App.css';
import molzania from '../img/molzania.png';

function App() {
  return (
<body>
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
</body>
  );
}

export default App;
