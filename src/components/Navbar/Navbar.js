import { Link } from 'react-router-dom';
import "./Navbar.scss";

function Navbar() {
  
  function displayMenu(event) {
    const burger = document.querySelector(".Navbar-burger")
    const navlist = document.querySelector(".Navbar-list")
    const item = {
      one : document.querySelector('[data-nav1]'), 
      two : document.querySelector('[data-nav2]'),
      tree : document.querySelector('[data-nav3]')
    }

    navlist.classList.toggle('Navbar-list--shown')
    burger.classList.toggle('Navbar-burger--shown')

    if (event.target === item.one) {
      navlist.classList.add('Navbar-list--active1')
      navlist.classList.remove('Navbar-list--active2')
      navlist.classList.remove('Navbar-list--active3')
    }

    if (event.target === item.two) {
      navlist.classList.add('Navbar-list--active2')
      navlist.classList.remove('Navbar-list--active1')
      navlist.classList.remove('Navbar-list--active3')
    }

    if (event.target === item.tree) {
      navlist.classList.add('Navbar-list--active3')
      navlist.classList.remove('Navbar-list--active2')
      navlist.classList.remove('Navbar-list--active1')
    }
  }
  
  function HideMenu() {
    const burger = document.querySelector(".Navbar-burger")
    const navlist = document.querySelector(".Navbar-list")
    
    if (navlist.classList.contains('Navbar-list--shown')) {
      navlist.classList.remove('Navbar-list--shown')
      burger.classList.remove('Navbar-burger--shown')
    }

    navlist.classList.remove('Navbar-list--active1')
    navlist.classList.remove('Navbar-list--active2')
    navlist.classList.remove('Navbar-list--active3')
  }

  
  function animeNav(event) {
    const navlist = document.querySelector(".Navbar-list")
    const item = {
      one : document.querySelector('[data-nav1]'), 
      two : document.querySelector('[data-nav2]'),
      tree : document.querySelector('[data-nav3]')
    }

    if (event.target === item.one) {
      navlist.classList.add('Navbar-list1')
    }

    if (event.target === item.two) {
      navlist.classList.add('Navbar-list2')
    }

    if (event.target === item.tree) {
      navlist.classList.add('Navbar-list3')
    }
  }

  function animeNavRemove(event) {
    const navlist = document.querySelector(".Navbar-list")
    const item = {
      one : document.querySelector('[data-nav1]'), 
      two : document.querySelector('[data-nav2]'),
      tree : document.querySelector('[data-nav3]')
    }

    if (event.target === item.one) {
      navlist.classList.remove('Navbar-list1')
    }

    if (event.target === item.two) {
      navlist.classList.remove('Navbar-list2')
    }

    if (event.target === item.tree) {
      navlist.classList.remove('Navbar-list3')
    }
  }

  return (
    <header className="Navbar">
      <h2 className="Navbar-title">
        <Link onClick={HideMenu} to='/reactportfolio'>Portfolio</Link>
      </h2>
      <nav className="Navbar-nav">
        <ul className="Navbar-list" onMouseOver={animeNav}>
          <li className="Navbar-item">
            <Link className="Navbar-link" data-nav1 onMouseLeave={animeNavRemove} onClick={displayMenu} to='/reactportfolio/profil'>Profil</Link>
          </li>
          <li className="Navbar-item">
            <Link className="Navbar-link" data-nav2 onMouseLeave={animeNavRemove} onClick={displayMenu} to='/reactportfolio/competences'>Compétences</Link>
          </li>
          <li className="Navbar-item">
            <Link className="Navbar-link" data-nav3 onMouseLeave={animeNavRemove} onClick={displayMenu} to='/reactportfolio/projets'>Projets</Link>
          </li>
          <li className="Navbar-item">
            <Link className="Navbar-link" onClick={(event) => [displayMenu(event), HideMenu()]} to='/reactportfolio/contact'>Contact</Link>
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
