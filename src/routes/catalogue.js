import NavBarWhite from "../commonComponents/navbarWhite";
import Intro from "../packageComponents/intro";
import PackageList from "../packageComponents/packages";
import destinations from "../commonComponents/sample";
import Footer from "../commonComponents/footer";
import { useEffect, useState } from "react";
import "../styles/catalogue.css";

const CataloguePage = () =>{
    useEffect(()=>{
        window.scrollTo(0,0);
      },[])

    const [isMobileMenu, setIsMobileMenu] = useState(false);

    useEffect(() => {
    if (typeof window === "undefined") return;

    const checkWidth = () => {
        const width = window.innerWidth;
        setIsMobileMenu(width <= 1140);
    };

    checkWidth(); // run on mount
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
    }, []);

    useEffect(() => {
    console.log(" isMobileMenu updated:", isMobileMenu);
    }, [isMobileMenu]);

    if (isMobileMenu === null) return null;

    return(
        <div className="footer-gap-catalogue">
            <div style={{paddingBottom: "2.5rem"}}>
                <NavBarWhite/>

                <Intro/>
                {!isMobileMenu ? (
                    destinations.map((destination, index) => {
                        
                        return(
                            <div key={index} style={{ top: `${500 + (index)*979}px`, left: "93px", position: 'absolute' }}>
                                <PackageList
                                    id={destination.id}
                                    img={destination.packimage}
                                    title={destination.name}
                                    line={destination.tagline}
                                    desc={destination.card}
                                />
                            </div>
                        );
                    })
                ):(
                    destinations.map((destination, index) => {
                        
                        return(
                            <div key={index} style={{ top: `${597 + (index)*679}px`, left: "33px", position: 'absolute' }}>                            
                                <PackageList
                                    id={destination.id}
                                    img={destination.packimage}
                                    title={destination.name}
                                    line={destination.tagline}
                                    desc={destination.card}
                                />
                            </div>
                        );
                    })
                )}
            </div>
            <Footer/>
        </div>
    );
};

export default CataloguePage;