import { Component } from "react";
import { NavLink } from "react-router-dom";
import { menuItems } from "../commonComponents/menuitems";
import "./navbar.css";
import logoWhite from "../images/logoWhite.png";

class NavBar extends Component {

    render() {
        return (
                <nav className="NavbarItems">
                    <img className="nav-img" src={logoWhite} alt="white-logo" />
                    <h1 className="nav-title">North Blade</h1>
                    <ul>
                            {menuItems.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <NavLink
                                            className={({ isActive }) => isActive ? 'nav-links active' : 'nav-links'}
                                            to={item.url}
                                        >
                                            {item.title}
                                        </NavLink>
                                    </li>
                                );
                            })}
                   </ul>
                </nav>

        );
    }
}

export default NavBar;
