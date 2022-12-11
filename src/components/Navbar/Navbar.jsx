import './Navbar.css'
import React, { useState } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { BiMenuAltLeft } from "react-icons/bi";
import { VscSearch } from "react-icons/vsc";
import { FaTimes, FaBars } from "react-icons/fa";
import logo from "../../images/logo.png";

const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <nav className="nav">
      <div className="navContainer">
        <img className="logoImg" src={logo} alt="Logo Principal" />

        <ul className={click ? "navLista active" : "navLista"} onClick={handleClick} click="{click}">
          <li className="navItem">
            <a className="navLink" href="#">
              home
            </a>
          </li>
          <li className="navItem">
            <a className="navLink" href="#">
              pages
            </a>
          </li>
          <li className="navItem">
            <a className="navLink" href="#">
              portifolios
            </a>
          </li>
          <li className="navItem">
            <a className="navLink" href="#">
              headers
            </a>
          </li>
          <li className="navItem">
            <a className="navLink" href="#">
              elements
            </a>
          </li>
          <li className="navItem">
            <a className="navLink" href="#">
              blogs
            </a>
          </li>
        </ul>

        <div className="navIcons">
          <div className="navIconsLink">
            <VscSearch className="search" />
          </div>
          <div className="navIconsLink">
            <RiShoppingCartLine className="cart" />
            <span>2</span>
          </div>
          <div className="navIconsLink">
            <BiMenuAltLeft className="menu" />
          </div>
        </div>

        <div className="mobileIcons" onClick={handleClick}>
          {click ? <FaTimes className="times" /> : <FaBars className="bars" />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
