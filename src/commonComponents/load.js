import "./load.css";

const Load = () => {
    return(
        <div className="load-items">
            <div className="load-text">Loading your vacation...</div>
            <div className="load-gif">
                <dotlottie-player src="https://lottie.host/13f8263e-27d9-47fc-9230-0665ade5e8b3/jzqpSitWyO.json" background="transparent" speed="1" style={{width: "300px", height: "300px"}} loop autoplay></dotlottie-player>
            </div>
        </div>
    );
}

export default Load;