import "./loginpage.css";
import "./registerpage.css";
import registerImage from "../images/registerImage.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

const RegisterComponent = () => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setrePassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handlerePasswordChange = (e) => {
        setrePassword(e.target.value);
    };

    return(
        <div>
            <div className="register-img-group">
                
                <img className="register-image" alt="leaf" src={registerImage}/>
                
                <div className="registerimg-shadow"/>
            </div>

            <div className="register-text">
                <div className="register-title">Register with us for memories of a lifetime!</div>
                <form className="register-form">
                    <div className="register-form-fields">
                        <div className="register-email-group">
                            <label className="register-form-usr-label">Enter email or phone number</label>
                            <input
                                className="register-input-usr-field"
                                type="text"
                                placeholder="email@sample.com"
                                value={email}
                                onChange={handleEmailChange}
                            />                        
                        </div>

                        <div className="register-phone-group">
                            <label className="register-form-usr-label">Enter phone number</label>
                            <input
                                className="register-input-usr-field"
                                type="text"
                                placeholder="+123-4456-789"
                                value={phone}
                                onChange={handlePhoneChange}
                            />                        
                        </div>

                        <div className="register-password-group">
                            <label className="register-form-pass-label">Enter password</label>
                            <input
                                className="register-input-pass-field"
                                type="password"
                                placeholder="password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </div>

                        <div className="register-password-reenter-group">
                            <label className="register-form-pass-label">Re-enter password</label>
                            <input
                                className="register-input-re-pass-field"
                                type="password"
                                placeholder="password"
                                value={repassword}
                                onChange={handlerePasswordChange}
                            />
                        </div>         
                    </div>

                    <div>
                        <div className="register-buttons">
                            <input className="register-submit" type="submit" value="CREATE ACCOUNT"/>
                            {/*<input className="forgot-password-button" type="button" value="FORGOT PASSWORD?"/>*/}
                        </div>

                        
                    </div>
                    <Link className="login-page-link" to='/login'>Already have an account? Login!</Link>
                </form>

            </div>

        </div>
    );
}

export default RegisterComponent;