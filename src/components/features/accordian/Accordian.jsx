import './accordian.css';
import data from "../../../data/uk_locos.json";
import AccordianItem from "./AccordianItem";

function Accordian() {

    return (
        <div className="accordion">
            <div className="accordian-search">
                <input type="text" id="search" name="search" placeholder="Search"/>
            </div>
            {data.map((loco) => (
                <AccordianItem key={loco['key']} loco={loco} />
            ))}
        </div>
    )
}

export default Accordian
