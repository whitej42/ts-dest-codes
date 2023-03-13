import Line from "./Line";
import Update from "./Update";

function Lines({ lines }) {

    // add data to state list?
    //setLines([.....])//

    return (
        <div className='lines-container'>
            {lines.map((line) => (
                <Line key={line.id} line={line.line} status={line.status} />
            ))}
        </div>
    );
}

export default Lines;
