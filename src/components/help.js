import "./help.css";
import telephone from "../images/telephone.png"

const Help = () => {
    return(
        <div className="help-div">
            <img className="help-img" alt="telephone" src={telephone}/>
            <div className="help-text">
                <div className="help-title">Need Help with Anything?</div>
                <div className="help-desc">
                    Contact us by any way you wish!<br/>
                    Write to us via our email: <label className="contact">help@northbladesample.com</label><br/>
                    Call us up at our toll-free number: <label className="contact">(555) 555-1234</label><br/>
                    Visit us at our branch office: <label className="contact">North Blade Travel Co, Kingston, New York 12401</label><br/>
                </div>
                <div className="help-btn">CONTACT US</div>
            </div>
        </div>
    );
}

export default Help;