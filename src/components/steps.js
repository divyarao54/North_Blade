import './steps.css';
import stepsImg from '../images/stepsImage.jpg';
import stepsPoints from '../images/steps.png';

const Steps = () => {
    return(
        <div className="steps-items">
            <div className='steps-sec'>    
                <img className='steps-img' alt='steps-img' src={stepsImg}/>
                
                <div className='steps-gif'>

                    <dotlottie-player src="https://lottie.host/00fc864d-1603-4f1f-9d9a-49da25eefa77/tqyMHv85xC.json" background="transparent" speed="1" style={{width: '300px', height: '300px'}} loop autoplay></dotlottie-player>
                </div>
            </div>

            <div className='steps-sec-2'>

                <div className='steps-title'>Everything you need in one place</div>

                <div className='points'>
                    <img className='steps-points' alt='steps-points' src={stepsPoints}/>

                    <ul className='step-ins'>
                        <li className='steps-lines'>Pick a Destination</li>

                        <li className='steps-lines'>View Our Package</li>

                        <li className='steps-lines'>Select your Dates</li>

                        <li className='steps-lines'>Check Weather Forecasts for the Dates</li>

                        <li className='steps-lines'>Book Package</li>

                        <li className='steps-lines'>Start your Journey!</li>
                    </ul>
                </div>
                <button className='stepsBtn'>GET STARTED</button>

            </div>
        </div>
    )
}

export default Steps;