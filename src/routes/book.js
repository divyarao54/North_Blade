import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import destinations from "../commonComponents/sample";
import NavBarWhite from "../commonComponents/navbarWhite";
import Footer from "../commonComponents/footer";
import BookIntro from "../packageComponents/bookIntro";

const BookingPage = () =>{
    useEffect(()=>{
        window.scrollTo(0,0);
      },[])
    const {packageId} = useParams();
    const thisPackage = destinations.find(dest => dest.id === packageId);
        
    return(
        <div style={{position:"relative", height:"auto",display: "flex", flexDirection: "column", overflow: "hidden", gap: "1750px"}}>
            <div style={{paddingBottom: "2.5rem"}}>
                <NavBarWhite/>
                <BookIntro
                    dest={thisPackage.name}
                    img={thisPackage.packimage}
                />
            </div>
            <div>
                <Footer style={{overflow: "hidden"}}/>
            </div>
        </div>
    );
}

export default BookingPage;