import { Link } from 'react-router-dom';
import "./Navbar.scss";
import menu from "../images/menu.svg";

function Navbar() {
  return (
    <header className="Navbar">
      <h2 className="Navbar-title">Portfolio</h2>
      <nav className="Navbar-nav">
        <ul className="Navbar-list">
        <li className="Navbar-item">
          <Link to='/reactportfolio/profil'>Profil</Link>
        </li>
        <li className="Navbar-item">
          <Link to='/reactportfolio/competences'>Compétences</Link>
        </li>
        <li className="Navbar-item">
          <Link to='/reactportfolio/projets'>Projets</Link>
        </li>
        <li className="Navbar-item">
          <Link to='/reactportfolio/contact'>Contact</Link>
        </li>
        </ul>
        <button className="Navbar-burger">
            <img className="Navbar-icon" src={ menu } alt="" />
        </button>
      </nav>
    </header>
  );
}
export default Navbar;
