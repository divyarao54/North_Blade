import { Component } from "react";
import { NavLink } from "react-router-dom";
import { menuItems } from "../commonComponents/menuitems";
import "./navbarWhite.css";
import Logo from "../images/Logo.png";

class NavBarWhite extends Component {
    state = {
        clicked: false
    };

    handleclick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    render() {
        return (
            <div>
                <nav className="NavbarWhiteItems">
                    <img className="nav-white-img" src={Logo} alt="black-logo" />
                    <h1 className="nav-white-title">North Blade</h1>
                    <ul>
                        {menuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <NavLink
                                        className={({ isActive }) => isActive ? 'nav-white-links active' : 'nav-white-links'}
                                        to={item.url}
                                    >
                                        {item.title}
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        );
    }
}

export default NavBarWhite;
