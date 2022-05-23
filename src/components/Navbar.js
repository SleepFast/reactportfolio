import { Link } from 'react-router-dom';
import "./Navbar.scss";

function Navbar() {
  
  function displayMenu() {
    const burger = document.querySelector(".Navbar-burger")
    const navlist = document.querySelector(".Navbar-list")
    
    navlist.classList.toggle('Navbar-list--shown')
    burger.classList.toggle('Navbar-burger--shown')
  }
  
  function HideMenu() {
    const burger = document.querySelector(".Navbar-burger")
    const navlist = document.querySelector(".Navbar-list")
    
    if (navlist.classList.contains('Navbar-list--shown')) {
      navlist.classList.remove('Navbar-list--shown')
      burger.classList.remove('Navbar-burger--shown')
    }
  }

  return (
    <header className="Navbar">
      <h2 className="Navbar-title">
        <Link onClick={HideMenu} to='/reactportfolio'>Portfolio</Link>
      </h2>
      <nav className="Navbar-nav">
        <ul className="Navbar-list">
          <li className="Navbar-item">
            <Link className="Navbar-link" onClick={displayMenu} to='/reactportfolio/profil'>Profil</Link>
          </li>
          <li className="Navbar-item">
            <Link className="Navbar-link" onClick={displayMenu} to='/reactportfolio/competences'>Compétences</Link>
          </li>
          <li className="Navbar-item">
            <Link className="Navbar-link" onClick={displayMenu} to='/reactportfolio/projets'>Projets</Link>
          </li>
          <li className="Navbar-item">
            <Link className="Navbar-link" onClick={displayMenu} to='/reactportfolio/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
      <button className="Navbar-burger" onClick={displayMenu}>
        <div className="Navbar-content">
          <span className="Navbar-line"></span>
          <span className="Navbar-line"></span>
          <span className="Navbar-line"></span>
        </div>
      </button>
    </header>
  );
}
export default Navbar;
