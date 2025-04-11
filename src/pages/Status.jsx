import LineStatusList from "../components/features/LineStatus/LineStatusList";
import { SiTransportforlondon, SiNationalrail  } from "react-icons/si";
import { IoMdBoat } from "react-icons/io";

function Status() {

  const tube_api = "https://api.tfl.gov.uk/Line/Mode/tube,overground,dlr,tram,elizabeth-line/Status"
  const rail_api = "https://api.tfl.gov.uk/Line/Mode/national-rail/Status"
  const river_api = "https://api.tfl.gov.uk/Line/Mode/river-bus/Status"

  return (
    <>
    <h2 className="page-heading">Status Updates</h2>
    <div className="line-status-container">
      <LineStatusList title={"Tube"} icon={<SiTransportforlondon />} api_url={tube_api} enabled={true} />
      <LineStatusList title={"National Rail"} icon={<SiNationalrail />} api_url={rail_api} />
      <LineStatusList title={"TFL River Bus"} icon={<IoMdBoat />} api_url={river_api} />
    </div>
    </>
  );
}

export default Status;