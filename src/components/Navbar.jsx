import React, { useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { FaShoppingBasket } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import "../style/Navbar.scss";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(true);
  };
  const handleCloseMenu= () => {
    setMenuOpen(false);
  }

  return (
    <div className='navbar'>
      <div className="navbar-item">
        <div className="appLogo">Food Delivery</div>

        {/* Desktop nav links */}
        <div className="nav-links desktop-only">
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/menu'}>Menu</NavLink>
          <NavLink to={'/contact-us'}>Contact Us</NavLink>
        </div>

        <div className="navbar-buttons">
          <IoSearchOutline className="nav-icon" size={20} />
          <FaShoppingBasket className="nav-icon" size={20} />
          <button className='signInBtn'>Sign In</button>
          <RxHamburgerMenu
            className='hamburger-icon'
            size={30}
            onClick={toggleMenu}
          />
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <RxCross2 className='closeMenu' onClick={handleCloseMenu} />
        <NavLink href="">Home</NavLink>
        <NavLink href="">Menu</NavLink>
        <NavLink href="">Contact Us</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
