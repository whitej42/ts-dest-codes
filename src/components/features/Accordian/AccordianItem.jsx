import { useState } from "react";
import { FaMinus, FaPlus, FaStar, FaExpandArrowsAlt, FaInfoCircle } from "react-icons/fa";
import './Accordian.css';
import IconButton from '../IconButton/IconButton'

function AccordianItem({ loco }) {

    const [toggle, setToggle] = useState(false);

    return (
        <div className="accordion-item">
            <div className="accordion-title" onClick={() => setToggle(!toggle)}>
                <div>{loco['name']}</div>
                <div>{toggle ? <FaMinus color="#ea6c74" /> : <FaPlus color="#1cbc9a" />}</div>
            </div>
            {toggle &&
                <div className={`accordion-content ${toggle ? 'show' : ''}`}>
                    <div className="train-info">
                    <IconButton
                        icon={FaStar}
                        text="Favourite"
                        baseColor="#cbdf1d"
                    />
                    <IconButton
                        icon={FaInfoCircle}
                        text="More Info"
                        baseColor="#1cbc9a"
                    />
                    <IconButton
                        icon={FaExpandArrowsAlt}
                        text="Full Screen"
                        baseColor="#7caae6"
                    />
                        {/* {loco.description} */}
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Destination Code</th>
                                <th>Destination</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loco['destinations'].map((dest) => (
                                <tr key={dest.id}>
                                    <td>{dest.id}</td>
                                    <td>{dest.stop}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            }
        </div>
    )
}

export default AccordianItem
