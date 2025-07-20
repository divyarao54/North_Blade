import React from "react";
import Footer from "../commonComponents/footer";
import NavBarWhite from "../commonComponents/navbarWhite";
import ErrorComponent from "../commonComponents/errorpage";


const ErrorPage = () => {
    return(
        <div style={{position:"relative", height:"auto", display: "flex", flexDirection: "column", overflow: "hidden", gap: "1400px"}}>
                
                <div style={{height:"auto"}}>
                    <NavBarWhite/>   
                    <ErrorComponent/>             
                </div>
                
                <div>
                    <Footer/>
                </div>
                
         </div>
    );
}

export default ErrorPage;


