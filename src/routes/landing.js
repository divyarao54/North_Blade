import React, {useEffect} from 'react';
import NavBar from "../commonComponents/navbar";
import Hero from "../homeComponents/hero";
import heroImage from '../images/heroImage.jpg'; 
import Steps from '../homeComponents/steps';
import HomeCards from "../homeComponents/homecards";
import destinations from '../commonComponents/sample';
import WeatherArea from '../homeComponents/weatherarea';
import Help from '../homeComponents/help';
import Footer from '../commonComponents/footer';
import MustVisit from '../homeComponents/mustvisit';
import '../styles/landing.css'


const LandingPage = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
      },[])
    return(
        
            <div className='footer-gap'>
                <div style={{display: "flex", flexDirection: "column", position: "relative"}}>
                    <div style={{order: '0'}}>
                        
                        <Hero
                            cName="hero"
                            heroimg={heroImage}
                            title="Unlock Authentic Experiences"
                            text="Discover the world like never before to create unforgettable memories that make you want to revisit the moment for years to come"
                            btnText="START EXPLORING"
                            style={{zindex: '0'}}
                        />
                        <NavBar style={{zIndex: '1000'}}/>
                    </div>
                    
                    <div style={{order: '1'}}>
                        <Steps/>
                    </div>
                    
                    <div style={{order: '2'}}>
                        <MustVisit/>
                    </div>
                    {/*top: '1269px'*/}
                    <div className='landing-cards'>
                        {destinations.map((destination, index) => {
                            
                            return(
                                    <div key={index}>
                                        <HomeCards
                                            id={destination.id}
                                            img={destination.homeimage}
                                            title={destination.name}
                                            desc={destination.hometext}
                                        />
                                    </div>
                            );
                        })}
                    </div>

                    <div style={{order: '4'}}>    
                        <WeatherArea/>
                    </div>
                    
                    <div style={{order: '5'}}>
                        <Help/>
                    </div>
                </div>

                <div>
                    <Footer/>
                </div>
            </div>
        
    );
};

export default LandingPage;
