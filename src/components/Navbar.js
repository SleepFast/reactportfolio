import { Link } from 'react-router-dom';
import "./Navbar.scss";

function Navbar() {

  function displayMenu() {
    const burger = document.querySelector(".Navbar-burger")
    
    burger.classList.toggle('Navbar-burger--shown')
  }

  return (
    <header className="Navbar">
      <h2 className="Navbar-title">
        <Link to='/reactportfolio' >Portfolio</Link>
      </h2>
      <nav className="Navbar-nav">
        <ul className="Navbar-list">
        <li className="Navbar-item">
          <Link className="Navbar-link" to='/reactportfolio/profil'>Profil</Link>
        </li>
        <li className="Navbar-item">
          <Link className="Navbar-link" to='/reactportfolio/competences'>Compétences</Link>
        </li>
        <li className="Navbar-item">
          <Link className="Navbar-link" to='/reactportfolio/projets'>Projets</Link>
        </li>
        <li className="Navbar-item">
          <Link className="Navbar-link" to='/reactportfolio/contact'>Contact</Link>
        </li>
        </ul>
        <button className="Navbar-burger" onClick={displayMenu}>
        <div className="Navbar-content">

          <span className="Navbar-line"></span>
          <span className="Navbar-line"></span>
          <span className="Navbar-line"></span>
        </div>
        </button>
      </nav>
    </header>
  );
}
export default Navbar;
