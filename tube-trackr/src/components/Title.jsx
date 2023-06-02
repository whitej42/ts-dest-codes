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
    <h2 className='title'>
      {text} Status {setIcon()}
    </h2>
  )
}

export default Title
