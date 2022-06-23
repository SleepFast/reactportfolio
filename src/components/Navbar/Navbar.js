import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from '../NavLink/NavLink';
import "./Navbar.scss";

const links = [
  {
    name: "Profil",
    classSelected: "Navbar-list--active--Profil",
    classHovered: "Navbar-list--Profil",
    url: "/reactportfolio/profil"
  },
  {
    name: "Compétences",
    classSelected: "Navbar-list--active--Compétences",
    classHovered: "Navbar-list--Compétences",
    url: "/reactportfolio/competences"
  },
  {
    name: "Projets",
    classSelected: "Navbar-list--active--Projets",
    classHovered: "Navbar-list--Projets",
    url: "/reactportfolio/projets"
  },
  {
    name: "Contact",
    classSelected: "",
    classHovered: "",
    url: "/reactportfolio/contact"
  },
]

function Navbar() {

  const [state, setState] = useState({
    selected: "",
    hoveredName: "",
    isMenuBurgerOpen: false,
  })

  const {selected, hoveredName, isMenuBurgerOpen} = state

  const handleBurgerMenu = () => {
    setState((prevState) => ({
      ...prevState,
      isMenuBurgerOpen: !prevState.isMenuBurgerOpen
    }))
  }

  const HideMenu = () => {
    setState((prevState) => ({
      ...prevState,
      selected: "",
      isMenuBurgerOpen: false
    }))
  }

  return (
    <header className="Navbar">
      <h2 className="Navbar-title">
        <Link onClick={HideMenu} to='/reactportfolio'>Portfolio</Link>
      </h2>
      <nav className="Navbar-nav">
        <ul className={`Navbar-list ${selected} ${hoveredName} ${isMenuBurgerOpen ? "Navbar-list--shown" : ""}`}>
          {links.map((link) => (
            <NavLink 
              key={link.name}
              setState={setState}
              state={state}
              selected={link.name === selected ? true : false}
              classSelected={link.classSelected}
              classHovered={link.classHovered}
              name={link.name}
              url={link.url}
            />
          ))}
        </ul>
      </nav>
      <button className={`Navbar-burger ${isMenuBurgerOpen ? "Navbar-burger--shown" : ""}`} onClick={handleBurgerMenu}>
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
