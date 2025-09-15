import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { menuItems } from "../commonComponents/menuitems";
import "./navbar.css";
import logoWhite from "../images/logoWhite.png";

const NavBar = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);

    const toggleMenu = () => {
            setIsMenuActive(!isMenuActive);
    };

    const closeMenu = () => {
            setIsMenuActive(false);
    };

        return (
            <header className="header">
                <nav className={`NavbarItems ${isMenuActive ? "menu-active": ""}`}>
                <img className="nav-img" src={logoWhite} alt="white-logo" />
                <h1 className="nav-title">North Blade</h1>

                <div className={`nav-menu ${isMenuActive ? "active" : ""}`}>
                    <ul onClick={closeMenu}>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                        <NavLink
                            className={({ isActive }) =>
                            isActive ? "nav-links active" : "nav-links"
                            }
                            to={item.url}
                        >
                            {item.title}
                        </NavLink>
                        </li>
                    ))}
                    </ul>
                </div>

                <div className={`hamburger ${isMenuActive ? "active" : ""}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                </nav>

            </header>
        );
}

export default NavBar;
