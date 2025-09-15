import "./intro.css";

const Intro = () => {
    return(
        <div className="intro">
            <div className="intro-gif">
                <dotlottie-player src="https://lottie.host/b50f4829-a875-4938-9628-9df6b86d1440/c4bLruZbBM.json" background="transparent" speed="1" style={{width: "300px", height: "300px"}} loop autoplay></dotlottie-player>    
            </div>
            <div className="intro-text">
                <div className="intro-title">Pick a Destination, and Fly!</div>

                <div className="intro-desc">Explore our packages for various destinations for authentic and unmatched travel experiences</div>
            </div>
        </div>
    );
}

export default Intro;