import React from "react";
import Footer from "../commonComponents/footer";
import NavBarWhite from "../commonComponents/navbarWhite";
import RegisterComponent from "../commonComponents/registerpage";

const RegisterPage = () => {
    return(
        <div style={{position:"relative", height:"auto",display: "flex", flexDirection: "column", overflow: "hidden", gap: "1400px"}}>
                
                <div style={{paddingBottom: "2.5rem"}}>
                    <NavBarWhite/>                
                    <RegisterComponent/>
                </div>
                
                <div>
                    <Footer/>
                </div>
                
            </div>
    );
}

export default RegisterPage;

