import { useState, useEffect } from "react";
import axios from 'axios';
import Line from "./Line";
import Title from "./Title";

function Lines({ title, api_url }) {

    const [lineData, setLineData] = useState([]);

    // Get Tube Line Data
    useEffect(
        function getLineData() {
            axios
                .get(api_url, {
                })
                .then(function (response) {
                    setLineData(constructLineData(response.data));
                })
                .catch(function (error) {
                    console.log(error);
                });
        },[]
    );

    // Build Tube Line Data
    function constructLineData(xmlData) {

        var array = [];
        const x = xmlData

        for (var i = 0; i < x.length; i++) {

            // Line object
            var obj = {};

            // Get line name
            obj["id"] = i;
            obj["lineName"] = x[i]['name'];

            // Get status description
            obj["description"] = x[i]['lineStatuses'][0]['statusSeverityDescription'];

            // Get status update
            obj["update"] = x[i]['lineStatuses'][0]['reason'];

            // Create line object
            array.push(obj);
        }
        console.log(array)
        return (array);
    }

    return (
        <div className='lines-container'>
            <Title text={title + " Status"}/>
            {lineData.map((line) => (
                <Line key={line.id} lineName={line.lineName} description={line.description} update={line.update} />
            ))}
        </div>
    );
}

export default Lines;
