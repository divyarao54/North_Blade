import "./loginpage.css";
import loginImage from "../images/loginImage.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginComponent = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return(
        <div>
            <div className="img-group">
                
                <img className="login-image" alt="antelope-canyon" src={loginImage}/>
                
                <div className="img-shadow"/>
            </div>

            <div className="login-text">
                <div className="login-title">Login to Begin your Journey!</div>
                <form className="login-form">
                    <div className="login-form-fields">
                        <div className="login-username-group">
                            <label className="login-form-usr-label">Enter email or phone number</label>
                            <input
                                className="login-input-usr-field"
                                type="text"
                                placeholder="email@sample.com or +123-4456-789"
                                value={username}
                                onChange={handleUsernameChange}
                            />                        
                        </div>
                        
                        <div className="login-password-group">
                            <label className="login-form-pass-label">Enter password</label>
                            <input
                                className="login-input-pass-field"
                                type="password"
                                placeholder="password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </div>         
                    </div>

                    <div>
                        <div className="login-buttons">
                            <input className="login-submit" type="submit" value="LOGIN"/>
                            <input className="forgot-password-button" type="button" value="FORGOT PASSWORD?"/>
                        </div>

                        
                    </div>
                    <Link className="register-page-link" to='/register'>Don't have an account? Create One!</Link>
                </form>

            </div>

        </div>
    );
}

export default LoginComponent;