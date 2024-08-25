import React, { useEffect } from "react";
import "./hero.css";

const Hero = (props) => {

    const handleScroll = () => {
        const parallax = document.querySelector('.parallax');
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        parallax.style.transform = `translate3d(0px, ${rate}px, 0px)`;
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={props.cName}>
            <div className="parallax">
                <img className="hero-img" src={props.heroimg} alt="hero-img"/>
            </div>
            <div className="hero-text">
                <div className="hero-title">{props.title}</div>
                <div className="hero-para">{props.text}</div>
                <button className="hero-btn">{props.btnText}</button>
            </div>
        </div>
    );
};

export default Hero;
