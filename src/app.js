import './app.scss';
import Home from './pages/home/home';
import OurCoffee from './pages/our-coffee/our-coffee';
import Pleasure from './pages/pleasure/pleasure';
import { Routes, Route, Link } from "react-router-dom";
import LogoBlock from './components/logo-block/logo-block';


const App = () => {
  return (
    <div>
      
      <header className="header">
        <ul className="header__block">
          <li className="header__item"><Link className="header__item-link" to="/">Coffee house</Link></li>
          <li className="header__item"><Link className="header__item-link" to="/our-coffee">Our coffee</Link></li>
          <li className="header__item"><Link className="header__item-link" to="/pleasure">For your pleasure</Link></li>
        </ul>
      </header>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/our-coffee" element={<OurCoffee/>} />
        <Route path="/pleasure" element={<Pleasure/>} />
      </Routes>
      <footer className="footer">
        <ul className="footer__block">
          <li className="header__item"><Link className="header__item-link" to="/">Coffee house</Link></li>
          <li className="header__item"><Link className="header__item-link" to="/our-coffee">Our coffee</Link></li>
          <li className="header__item"><Link className="header__item-link" to="/pleasure">For your pleasure</Link></li>
        </ul>
        <LogoBlock/>
      </footer>
    </div>
  )
}

export default App;