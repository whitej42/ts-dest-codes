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
                        {loco.description}
                        <div className="btn btn-modal"><FaInfoCircle /></div>
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

export default Accordian_Item
