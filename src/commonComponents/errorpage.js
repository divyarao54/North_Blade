import "./errorpage.css";
import ErrorImage from "../images/errorImage.jpg";
import { Link } from "react-router-dom";

const ErrorComponent = () => {
    return(
        <div className="error-box">
            <img className="error-img" alt="error-img" src={ErrorImage}/>
            <div className="error-text-box">
                <div className="error-title">Oopsie! Wrong Destination!</div>
                <div className="error-first-line">You have landed at the destination of... 404 error!</div>
                <div className="error-desc">The page you were looking for likely doesn’t exist anymore :( </div>
                <div className="error-desc">(or never existed at all!)</div>
                <div className="error-desc">Do search again by going to our home page or feel free to contact us via email if you think we’ve made a mistake!</div>

                <div className="error-buttons">
                    <Link to="/home" style={{ textDecoration: "none" }}>
                        <button className="to-home-btn">GO TO HOME PAGE</button>
                    </Link>
                    <Link to="/contact" style={{ textDecoration: "none" }}>
                        <button className="to-contact-email">CONTACT US ON EMAIL</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ErrorComponent;
