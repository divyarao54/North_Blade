import "./footer.css";
import logoWhite from "../images/logoWhite.png";
import locationIcon from "../images/locationIcon.png";
import callIcon from "../images/callIcon.png";
import mailIcon from "../images/mailIcon.png";

const Footer = () => {
    return(
        <div className="footer-bg">
            <div className="footer-section-1">
                <img className="footer-logo" alt="Logo" src={logoWhite}/>
            <div className="footer-name">North Blade</div>
            </div>

            <div className="footer-text">
                <div className="footer-section-2">
                    <div className="footer-location">
                        <img className="footer-location-icon" alt="location-icon" src={locationIcon}/>
                        <div className="footer-address">North Blade Travel Co, Kingston, New York 12401</div>
                    </div>

                    <div className="footer-contact">
                        <img className="footer-call-icon" alt="call-icon" src={callIcon}/>
                        <div className="footer-number">(555) 555-1234</div>
                    </div>

                    <div className="footer-email">
                        <img className="footer-mail-icon" alt="email-icon" src={mailIcon}/>
                        <div className="footer-email-address">help@northbladesample.com</div>
                    </div>
                </div>

                <div className="footer-section-3">
                    <div className="links">Home Page</div>
                    <div className="links">Packages List</div>
                    <div className="links">About Us Page</div>
                </div>

                <div className="footer-section-4">
                    <div className="links">Terms and Conditions</div>
                    <div className="links">Privacy Policy</div>
                    <div className="links">Contact Us</div>
                </div>
            </div>

            <div className="footer-line"/>
            <div className="footer-rights">@2024 North Blade Travel Co Sample, All Rights Reserved</div>
        </div>
    );
}

export default Footer;