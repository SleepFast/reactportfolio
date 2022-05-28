import { Link } from 'react-router-dom'
import "./Navbar.scss"

export const NavLink = ({url, name, setState, state, classSelected, classHovered}) => {
    const {selected} = state

    const handleOnMouseLeave = () => {
        setState((prevState) => ({
            ...prevState,
            hoveredName: "",
        }))
    }

    const handleOnMouseOver = () => {
        setState((prevState) => ({
            ...prevState,
            hoveredName: classHovered
        }))
    }

    const handleClick = () => {
        setState((prevState) => ({
            ...prevState,
            selected: classSelected,
            isMenuBurgerOpen: !prevState.isMenuBurgerOpen
        }))
    }

    return (
      <li className="Navbar-item">
        <Link className="Navbar-link" data-nav={name} onMouseLeave={handleOnMouseLeave} onMouseOver={handleOnMouseOver} onClick={handleClick} to={url} selected={selected === name}>{name}</Link>
      </li>
    )
  }
