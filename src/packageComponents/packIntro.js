import "./packIntro.css";

const PackIntro = (props) => {
    return(
        <div className="pack-intro-items">
            <div className="pack-text">
                <div className="pack-intro-title">{props.name} - {props.tagline}</div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    {props.desc.map((desc, index) =>(<div className="pack-desc" key={index}>{desc}</div>))}    
                </div>
            </div>
            <img className="pack-img" alt="destination-collage" src={props.img}/>
            <img className="pack-img-mobile" alt="destination-collage-mobile" src={props.mobileimg}/>
        </div>
    );
}

export default PackIntro;