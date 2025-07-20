import NavBarWhite from "../commonComponents/navbarWhite";
import Contacts from "../contactComponents/contacts";
import Footer from "../commonComponents/footer";

const ContactPage = () => {
    return(
        <div style={{position:"relative", minHeight:"300vh",display: "flex", flexDirection: "column", overflow: 'hidden'}}>
            <div style={{display: "flex", flexDirection: "column", position: "relative", gap: "50px"}}>
                <NavBarWhite />
                <Contacts />
            </div>
            <div>
                <Footer style={{overflow: "hidden"}}/>
            </div>
        </div>
    );
};

export default ContactPage;
