import React from "react";
import "./packDetails.css";
/*import destinations from "../commonComponents/sample";*/
import activityPoints from "../images/activityPoints.png";
import activityIcon from "../images/activityIcon.png";
import itineraryIcon from "../images/itineraryIcon.png";
import bookingIcon from "../images/bookingIcon.png";
import { Link } from "react-router-dom";

const PackDetails = (props) => {
    const lastIndex = props.days.length -1;
    return (
        <div className="pack-details">
            <div className="pack-sections">

                <div className="activity-box">
                <img className="pack-icon" alt="activities" src={activityIcon} />
                        <div className="activity-text">
                            <div className="pack-title">Activities</div>
                            <div className="pack-lines" />
                            <div className="pack-activity-section">
                                <img className="pack-icons" alt="activity-icons" src={activityPoints} />
                                <div className="pack-activity-list">
                                    <div className="activity-items">Sightseeing</div>
                                    <div className="activity-items">Adventure</div>
                                    <div className="activity-items">Cultural Experience</div>
                                    <div className="activity-items">Wildlife and Nature</div>
                                    <div className="activity-items">Trekking(Optional)</div>
                                    <div className="activity-items">Leisure and Relaxation</div>
                                </div>
                            </div>
                        </div>
                </div>
                

                <div className="itinerary-box">
                    <img className="pack-icon" alt="itinerary" src={itineraryIcon} />
                        <div className="itinerary-text">
                            <div className="pack-title">Itinerary</div>
                            <div className="pack-lines" />

                            {props.days.map((day, index) => (
                                <div className="day-group" key={index}>
                                    <div className="itinerary-days">{day}:</div>
                                    <div className="day-section">    
                                        <div className="itinerary-titles">{props.itineraryTitles[index]}</div>
                                        <ul className="itinerary-desc">
                                                    {props.itineraryItems[index].map((item, idx) => (
                                                        <li key={idx} className="itinerary-desc-item">{item}</li>
                                                    ))}
                                        </ul>
                                        
                                        {index !== lastIndex && (<div className="itinerary-lines"/>)}
                                        
                                        
                                        
                                        
                                    </div>
                                </div>
                            ))}
                        </div>
                </div>
                
                
                <div className="booking-box">
                        <img className="pack-icon" alt="booking" src={bookingIcon}/>

                        <div className="booking-frame">
                            <div className="pack-title">Book Now!</div>
                            <div className="pack-lines" />
                            <div className="pack-book-text">{props.bookText}</div>
                            <Link to={`/booking/${props.id}`} style={{textDecoration:"none"}}>
                                <button className="book-btn">BOOK YOUR VACATION NOW</button>
                            </Link>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default PackDetails;
