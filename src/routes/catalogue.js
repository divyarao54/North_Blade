import NavBarWhite from "../commonComponents/navbarWhite";
import Intro from "../packageComponents/intro";
import PackageList from "../packageComponents/packages";
import destinations from "../commonComponents/sample";
import Footer from "../commonComponents/footer";
import { useEffect } from "react";

const CataloguePage = () =>{
    useEffect(()=>{
        window.scrollTo(0,0);
      },[])
    return(
        <div style={{position:"relative", minHeight:"550vh",display: "flex", flexDirection: "column", overflow: "hidden"}}>
            <div style={{paddingBottom: "2.5rem"}}>
                <NavBarWhite/>

                <Intro/>

                {destinations.map((destination, index) => {
                    
                    return(
                        <div key={index} style={{ top: `${497 + (index)*979}px`, left: "93px", position: 'absolute' }}>
                            <PackageList
                                id={destination.id}
                                img={destination.packimage}
                                title={destination.name}
                                line={destination.tagline}
                                desc={destination.card}
                            />
                        </div>
                    );
                })}
            </div>
            <Footer/>
        </div>
    );
};

export default CataloguePage;