import { Link } from "react-router-dom";
import calenderIcon from "../images/calendarIcon.png";
import cloudIcon from "../images/cloudIcon.png";
import walletIcon from "../images/walletIcon.png";
import sunnyIcon from "../images/sunnyIcon.png";
import "./bookDetails.css";
//import VerticalLine from "../commonComponents/VerticalLine";

const BookDetails = (props) => {
    return(
        <div className="book-details-components">
            
            <div className="book-sections">
                
                <div className="weather-box">
                    <div className="img-wrapper">                        
                        <img className="book-icon" alt="calenderIcon" src={calenderIcon} />
                    </div>
                    <div className="book-weather-text">
                        <div className="book-weather-title">Select dates to check weather forecast</div>
                        <div className="pack-lines" />
                        <div className="book-weather-section">
                            <input type="date" className="date-list"/>
                        <div className="book-text-info-outer">
                            {
                                [...Array(10)].map((_, i) => (
                                    <div key={i} className="book-text-info">
                                        <div className="book-text-date">April 10, 2025</div>
                                        <div className="book-text-temp">24°C</div>
                                        <div className="book-weather-icon-wrapper">
                                            <img className="book-weather-icon" alt="sunny" src={sunnyIcon}/>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        </div>
                    </div>
                </div>

                <img src={cloudIcon} alt="cloud" className="cloud-icon"/>        

                <div className="book-payment">
                    <div className="img-wrapper">
                        <img className="wallet-icon" alt="paymentIcon" src={walletIcon} />
                    </div>
                    <div className="book-payment-text">
                        <div className="book-weather-title">Check price and continue to payment</div>
                        <div className="pack-lines"/>
                        <div className="book-cost">Total Cost: ${props.cost}</div>
                        <div className="btn-wrapper" style={{order: '4'}}>
                            <Link to={`/North_Blade/booking/${props.id}`} style={{textDecoration:"none"}}>
                                <button className="payment-btn">CONTINUE TO PAYMENT</button>
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookDetails;