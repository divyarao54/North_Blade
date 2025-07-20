import { Link } from "react-router-dom";
import "./packages.css";

const PackageList = (props) =>{


    return(
        <div className="package">
            <img className="package-img" alt="destination" src={props.img}/>

            <div className="package-box">
                <div className="package-text">
                    <div className="package-title">{props.title}</div>

                    <div className="package-line">{props.line}</div>

                    {props.desc.map((desc, index) => (<div className="package-desc" key={index}>{desc}</div>))}

                    <Link to={`/packages/${props.id}`} style={{textDecoration:"none"}}>
                        <button className="package-btn">SELECT DESTINATION</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default PackageList;