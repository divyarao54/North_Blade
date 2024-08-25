import './homecards.css';
import { Link } from 'react-router-dom';

const HomeCards = (props) => {
    return(
        <div className='card'>
            <img className='card-img' alt='destination' src={props.img}/>
            <div className='card-text'>
                <div className='card-title'>{props.title}</div>
                <div className='card-desc'>{props.desc}</div>
                <Link to={`/packages/${props.id}`} style={{textDecoration:"none"}}>
                    <button className='card-btn'>LEARN MORE</button>
                </Link>
            </div>
            
        </div>
    );
}

export default HomeCards;