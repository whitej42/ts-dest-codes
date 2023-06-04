import { FaSubway, FaTrain, FaShip } from "react-icons/fa";

function Title({ text }) {

  // Set icon based on service
  function setIcon() {
    if (text === "Tube") {
      return <FaSubway />
    }
    if (text === "National Rail") {
      return <FaTrain />
    }
    if (text === "River Bus") {
      return <FaShip />
    }
  }

  return (
    <div className="title">
      <h2>{text} Status</h2>
      <label className="icon">{setIcon()}</label>
    </div>
  )
}

export default Title
