import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import destinations from "../commonComponents/sample";
import Footer from "../commonComponents/footer";
import NavBarWhite from "../commonComponents/navbarWhite";
import PackIntro from "../packageComponents/packIntro";
import PackDetails from "../packageComponents/packDetails";

const DestinationPage = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
      },[])
    const {packageId} = useParams();
    const thisPackage = destinations.find(dest => dest.id === packageId);
    
    return(
        <div style={{position:"relative", height:"auto",display: "flex", flexDirection: "column", overflow: "hidden", gap: "1750px"}}>
            <div style={{paddingBottom: "2.5rem"}}>
                <NavBarWhite/>
                <PackIntro
                    name={thisPackage.name}
                    tagline={thisPackage.tagline}
                    desc={thisPackage.card}
                    img={thisPackage.packcollage}
                />
                <PackDetails
                    id={thisPackage.id}
                    days={thisPackage.days}
                    itineraryTitles={thisPackage.itinerarytitles}
                    itineraryItems={thisPackage.itineraryitems}
                    bookText={thisPackage.booktext}
                />
            </div>
            <div>
                <Footer style={{overflow: "hidden"}}/>
            </div>
        </div>
    );
};

export default DestinationPage;