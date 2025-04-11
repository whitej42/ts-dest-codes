import { useState } from "react";
import { FaMinus, FaPlus, FaStar, FaExpandArrowsAlt, FaInfoCircle, FaEyeSlash, FaEye } from "react-icons/fa";
import './Accordian.css';
import IconButton from '../IconButton/IconButton'
import { use } from "react";

function AccordianItem({ loco }) {

    const operatorKeys = Object.keys(loco.operators || {});
    const [activeOperator, setActiveOperator] = useState(Object.keys(loco.operators)[0]);

    const [toggleExpand, setToggleExpand] = useState(false);
    const [fullHeight, setFullHeight] = useState(false);
    const [toggleHide, setToggleHide] = useState(false);

    const handleOperatorTabClick = (operator) => {
        setActiveOperator(operator);
    };

    return (
        <div className="accordion-item">
            <div className={`accordion-title ${toggleExpand ? 'active' :''}`} onClick={() => setToggleExpand(!toggleExpand)}>
                <div>{loco['name']}</div>
                <div>{toggleExpand ? <FaMinus /> : <FaPlus />}</div>
            </div>
            {toggleExpand &&
            <div className={`accordion-content ${toggleExpand ? 'show' : ''} ${fullHeight ? 'full-height' : ''}`}>
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
                            text={fullHeight  ? "Shrink" : "Expand"}
                            baseColor="#7caae6"
                            onClick={() => setFullHeight(!fullHeight)}
                        />
                    </div>

                    {operatorKeys.length > 1 && (
                        <div className="operator-tabs">
                            {operatorKeys.map((operator) => (
                                <IconButton
                                    key={operator}
                                    text={operator}
                                    baseColor={activeOperator === operator ? "#1cbc9a" : "#999"}
                                    onClick={() => handleOperatorTabClick(operator)}
                                    className={`operator-tab ${activeOperator === operator ? 'active' : ''}`}
                                />
                            ))}
                        </div>
                    )}

                    <table>
                        <thead>
                            <tr>
                                <th>Destination Code</th>
                                <th>Destination</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loco.operators[activeOperator].map((dest, index) => (
                                <tr key={index}>
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
