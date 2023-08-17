import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Statuses from "./Statuses";
import { Link } from "react-router-dom";

function Navbar() {

    const tube_api = "https://api.tfl.gov.uk/Line/Mode/tube,overground,dlr,tram,elizabeth-line/Status"
    const rail_api = "https://api.tfl.gov.uk/Line/Mode/national-rail/Status"
    const river_api = "https://api.tfl.gov.uk/Line/Mode/river-bus/Status"

    // Toggle sidebar button
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar);
    };

  return (
    <>
        <div className="navbar">
            <h1>TubeTrackr
            <div onClick={showSidebar} className='btn btn-menu'><FaBars /></div>
            </h1>
        </div>
        <nav className={sidebar ? "sidebar active" : "sidebar"}>
            <div className="nav-toggle">
                <div onClick={showSidebar} className='btn'><FaTimes /></div>
            </div>
            <h2 className="network-title">Network Status</h2>
            <Statuses title={"Tube"} api_url={ tube_api } />
            <Statuses title={"National Rail"} api_url={ rail_api } />
            <Statuses title={"River Bus"} api_url={ river_api } />
        </nav>
    </>
  )
}

export default Navbar
