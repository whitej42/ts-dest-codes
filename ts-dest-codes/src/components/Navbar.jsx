import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Statuses from "./Statuses";

function Navbar() {

    const tube_api = "https://api.tfl.gov.uk/Line/Mode/tube,overground,dlr,tram,elizabeth-line/Status"
    const rail_api = "https://api.tfl.gov.uk/Line/Mode/national-rail/Status"
    const river_api = "https://api.tfl.gov.uk/Line/Mode/river-bus/Status"

    // Toggle sidebar button
    const [sidebar, setSidebar] = useState(false);

  return (
    <>
        <div className="navbar">
            <h2>Train Sim Classic Destination Codes
                <div onClick={() => setSidebar(!sidebar)} className='btn btn-menu'><FaBars /></div>
            </h2>
        </div>
        <nav className={sidebar ? "sidebar active" : "sidebar"}>
            <div className="nav-toggle">
                <div onClick={() => setSidebar(!sidebar)} className='btn btn-times'><FaTimes /></div>
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
