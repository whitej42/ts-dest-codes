import { useState } from "react";
import { FaMinus, FaPlus, FaInfoCircle } from "react-icons/fa";

function Accordian_Item({ loco }) {

    const [toggle, setToggle] = useState(false);

    return (
        <div className="accordion-item">
            <div className="accordion-title" onClick={() => setToggle(!toggle)}>
                <div>{loco['name']}</div>
                <div>{toggle ? <FaMinus /> : <FaPlus />}</div>
            </div>
            {toggle &&
                <div className="accordion-content">
                    <div className="train-info">
                        <FaInfoCircle />
                    </div>
                    <table>
                        <tr>
                            <th>Destination Code</th>
                            <th>Destination</th>
                        </tr>
                        {loco['destinations'].map((dest) => (
                            <tr>
                                <td>{dest.id}</td>
                                <td>{dest.stop}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            }
        </div>
    )
}

export default Accordian_Item
