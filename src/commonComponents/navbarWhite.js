import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { menuItems } from "../commonComponents/menuitems";
import "./navbarWhite.css";
import LogoBlack from "../images/Logo.png";

const NavBarWhite =() => {
    const [isMenuActive, setIsMenuActive] = useState(false);
    
    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    };
    
    const closeMenu = () => {
        setIsMenuActive(false);
    };

        return (
            <header className="header-white">
                <nav className={`NavbarWhiteItems ${isMenuActive ? "menu-active": ""}`}>
                <img className="nav-white-img" src={LogoBlack} alt="white-logo" />
                <h1 className="nav-white-title">North Blade</h1>

                <div className={`nav-white-menu ${isMenuActive ? "active" : ""}`}>
                    <ul onClick={closeMenu}>
                    {menuItems.map((item, index) => (
                        <li key={index} className="white-li">
                        <NavLink
                            className={({ isActive }) =>
                            isActive ? "nav-white-links active" : "nav-white-links"
                            }
                            to={item.url}
                        >
                            {item.title}
                        </NavLink>
                        </li>
                    ))}
                    </ul>
                </div>

                <div className={`hamburger-white ${isMenuActive ? "active" : ""}`} onClick={toggleMenu}>
                    <span className="bar-white"></span>
                    <span className="bar-white"></span>
                    <span className="bar-white"></span>
                </div>
                </nav>

            </header>
        );
    
}

export default NavBarWhite;
