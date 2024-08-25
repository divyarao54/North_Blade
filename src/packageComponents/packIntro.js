import "./packIntro.css";

const PackIntro = (props) => {
    return(
        <div className="pack-intro-items">
            <div className="pack-text">
                <div className="pack-intro-title">{props.name} - {props.tagline}</div>
                {props.desc.map((desc, index) =>(<div className="pack-desc" key={index}>{desc}</div>))}                
            </div>
            <img className="pack-img" alt="destination-collage" src={props.img}/>
        </div>
    );
}

export default PackIntro;