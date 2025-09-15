import { Link } from "react-router-dom";
import "./contacts.css"

const Contacts = () => {
    return(
        <div className="contacts">
            <h1 className="contact-heading">Divya Rao - Web Developer</h1>
            <ul className="contact-points-section">
                <li className="contact-points">Github: <Link to={"https://github.com/divyarao54"} target="__blank">https://github.com/divyarao54</Link></li>
                <li className="contact-points">LinkedIn: <Link to={"https://www.linkedin.com/in/divyarao54/"} target="__blank">https://www.linkedin.com/in/divyarao54/</Link></li>
            </ul>
            <h1 className="contact-heading">Rashmi Rao - UI and UX Designer</h1>
            <ul className="contact-points-section">
                <li className="contact-points">Behance: <Link to={"https://www.behance.net/rashmi16267"} target="__blank">https://www.behance.net/rashmi16267</Link></li>
            </ul>
        </div>
    );
}

export default Contacts;

/*

Divya Rao - Web Developer
Github
LinkedIn
Rashmi Rao - UI and UX Designer
Behance: https://www.behance.net/rashmi16267
*/