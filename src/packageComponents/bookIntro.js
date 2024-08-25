import "./bookIntro.css";
import BookPoints from "../images/bookPoints.png";

const BookIntro = (props) => {
    return(
        <div className="book-intro-items">

            <div className="book-img-group">
                <img className="book-image" alt="destination" src={props.img}/>
                <div className="book-img-shadow"/>
            </div>

            <div className="book-text">
                <div className="book-intro-title">Book Your Holiday -</div><div className="book-intro-title">{props.dest}</div>
                <div className="book-desc-section">
                    <img className="booking-points-img" alt="booking-points-img" src={BookPoints}/>
                    <div className="book-points">
                        <div className="book-point-text">Select your Dates</div>
                        <div className="book-point-text">Check Weather Forecasts for the Dates</div>
                        <div className="book-point-text">Book Package</div>
                        <div className="book-point-text">Start your Journey!</div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default BookIntro;