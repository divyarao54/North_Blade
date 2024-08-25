import React, {useEffect} from 'react';
import NavBar from "../commonComponents/navbar";
import Hero from "../components/hero";
import heroImage from '../images/heroimage.jpg'; 
import Steps from '../components/steps';
import HomeCards from "../components/homecards";
import destinations from '../commonComponents/sample';
import WeatherArea from '../components/weatherarea';
import Help from '../components/help';
import Footer from '../commonComponents/footer';

const LandingPage = () => {
    /*useEffect(()=>{
        window.scrollTo(0,0);
      },[])*/
    return(
        
            <div style={{position:"relative", minHeight:"700vh",display: "flex", flexDirection: "column", overflow: 'hidden'}}>
                <div style={{display: "flex", flexDirection: "column", position: "relative"}}>
                    <div style={{order: '0'}}>
                        <Hero
                            cName="hero"
                            heroimg={heroImage}
                            title="Unlock Authentic Experiences"
                            text="Discover the world like never before to create unforgettable memories that make you want to revisit the moment for years to come"
                            btnText="START EXPLORING"
                        />

                        <NavBar />
                    </div>
                    
                    <div style={{order: '1'}}>
                        <Steps/>
                    </div>
                    
                    <div style={{order: '2', display: 'flex', flexDirection: 'row', width: '100%', marginTop: '156px', gap: '50px'}}>
                        <div style={{
                            position: "relative",
                            width: "35%",
                            height: "0px",
                            left: "0px",
                            border: "5px solid #C4C4C4"
                        }}/>
                        <p style={{
                            position: 'relative',
                            width: '22.083%',
                            height: 'auto',
                            lineHeight: '1',
                            left: '0',
                            top: '-100px',
                            fontFamily: 'Playfair Display', 
                            fontStyle: 'normal', 
                            fontWeight: '900',
                            fontSize: '64px',
                            color: '#484848'
                        }}>Must-Visit</p>

                        <div
                            style={{
                                /* Line 3 */

                                position: 'relative',
                                width: '35%',
                                height: '0px',
                                left: '0',
                                top: '0',

                                border: '5px solid #C4C4C4'

                            }}
                        />
                    </div>
                    {/*top: '1269px'*/}
                    <div style={{top: '0', left: '120px', width: '1248px',height: 'auto',position: 'relative', display: 'flex', flexDirection: 'row', gap: '17px', order: '3', objectFit: 'cover'}}>
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
