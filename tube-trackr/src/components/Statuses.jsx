import { useState, useEffect } from "react";
import axios from 'axios';
import Status from "./Status";
import Title from "./Title";
import Filters from "./Filters";

function Statuses({ title, api_url }) {

    const [statusData, setStatusData] = useState([]);

    // Get status data from API
    useEffect(
        function getStatusData() {
            axios
                .get(api_url, {
                })
                .then(function (response) {
                    setStatusData(buildStatusData(response.data));
                })
                .catch(function (error) {
                    console.log(error);
                });
        }, []
    );

    // Convert API data to array
    function buildStatusData(apiData) {

        var array = [];
        const x = apiData

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
        return (array);
    }

    return (
        <div className='status-container'>
            <Title text={title + " Status"} />
            <Filters lines={statusData} />
            {statusData.map((line) => (
                <Status key={line.id} lineName={line.lineName} description={line.description} update={line.update} />
            ))}
        </div>
    );
}

export default Statuses;
