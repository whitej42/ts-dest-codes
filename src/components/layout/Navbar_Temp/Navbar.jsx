import { useState } from "react";
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { InstagramEmbed } from 'react-social-media-embed';
import LineStatusList from "../../features/LineStatus/LineStatusList";
import IconBar from "./IconBar";
import './Navbar.css';

function Navbar() {

    const tube_api = "https://api.tfl.gov.uk/Line/Mode/tube,overground,dlr,tram,elizabeth-line/Status"
    const rail_api = "https://api.tfl.gov.uk/Line/Mode/national-rail/Status"
    const river_api = "https://api.tfl.gov.uk/Line/Mode/river-bus/Status"

    // Toggle sidebar button
    const [sidebar, setSidebar] = useState(false);

    // Toggle light/dark
    const [darkMode, setdarkMode] = useState(false);

    return (
        <>
            <div className="navbar">
                <h2>Train Sim Classic - Scenario Helper
                    <div onClick={() => setSidebar(!sidebar)} className='btn btn-menu'><FaBars /></div>
                    <div onClick={() => setdarkMode(!darkMode)} className="dark-mode">
                        <div className={darkMode ? "btn-dark-mode" : "btn-dark-mode active"}>{darkMode ? <FaSun /> : <FaMoon />}</div>
                    </div>
                </h2>
            </div>
            <nav className={sidebar ? "sidebar active" : "sidebar"}>
                <div className="nav-toggle">
                    <div onClick={() => setSidebar(!sidebar)} className='btn btn-times'><FaTimes /></div>
                </div>
                <ul className="nav-list">
                    <li><Link to="/" className="no-text-decoration">Home</Link></li>
                    <li><Link to="/destinations" className="no-text-decoration">Destination Codes</Link></li>
                    <li><Link to="/headcodes" className="no-text-decoration">Headcode Generator</Link></li>
                    <li><Link to="/lines" className="no-text-decoration">Routes</Link></li>
                    <li><Link to="/guides" className="no-text-decoration">Guides</Link></li>
                </ul>
                <h2 className="network-title"><Link to="/status" className="no-text-decoration">Live Status Updates</Link></h2>
                <LineStatusList title={"Tube"} api_url={tube_api} />
                <LineStatusList title={"National Rail"} api_url={rail_api} />
                <LineStatusList title={"TFL River Bus"} api_url={river_api} />

                <IconBar />

                {/* <div className="insta-embed">
                    <InstagramEmbed url="https://www.instagram.com/p/CvAyirJNYp6/" width={328} />
                </div> */}
            </nav>
        </>
    )
}

export default Navbar
