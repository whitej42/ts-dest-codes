import data from "../data/uk_locos.json";
import Accordian_Item from "./Accordian_Item";

function Accordian() {

    return (
        <div className="accordion">
            {data.map((loco) => (
                <Accordian_Item key={loco['key']} loco={loco} />
            ))}
        </div>
    )
}

export default Accordian
