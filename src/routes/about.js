import AboutUsVideo from "../aboutComponents/AboutVideo";
import Footer from "../commonComponents/footer";
import NavBarWhite from "../commonComponents/navbarWhite";

const AboutUs = () => {
    return(
        <div style={{position:"relative", minHeight:"165vh",display: "flex", flexDirection: "column", overflow: 'hidden'}}>
            <div style={{display: "flex", flexDirection: "column", position: "relative", gap: "50px"}}>
                <NavBarWhite />
                <AboutUsVideo />
            </div>
            <div>
                <Footer style={{overflow: "hidden"}}/>
            </div>
        </div>
    );
}

export default AboutUs;