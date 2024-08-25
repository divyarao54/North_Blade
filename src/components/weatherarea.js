import "./weatherarea.css";
import waRainy from "../images/waRainy.jpg";
import waSunny from "../images/waSunny.jpg";
import { Link } from 'react-router-dom';


const WeatherArea = () => {
    return(
        <div className="wa-bg">
            <div className="wa-text">
                <div className="wa-title">Worried about the Weather?</div>
                <div className="wa-desc">When you select a package and pick your dates for travel, our site will show you the weather forecast for each of the places to be visited side-by-side to help you make the best choice possible.</div>
                <Link to='/packages' style={{textDecoration : 'none'}}>
                    <button className="wa-btn">SELECT PACKAGE TO SEE WEATHER</button>
                </Link>
            </div>

            <div className="wa-collage">
                <img className="wa-city" alt="raining-city" src={waRainy}/>
                <img className="wa-hill" alt="sunrise-in-hilly-area" src={waSunny}/>
                
            </div>

            <div className="wa-gif">
                    <dotlottie-player src="https://lottie.host/0730b1fa-a064-47c1-a5ca-9e2baadb3558/tWKq8vIPpC.json" background="transparent" speed="1" style={{width: "300px", height: "300px"}} loop autoplay></dotlottie-player>
            </div>
        </div>
    );
}

export default WeatherArea;