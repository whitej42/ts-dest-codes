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

            var lineName = x[i]['name'];
            var statusSeverity = x[i]['lineStatuses'][0]['statusSeverityDescription'];
            var statusUpdate = x[i]['lineStatuses'][0]['reason'];
            
            obj["id"] = i;
            obj["lineName"] = lineName;
            obj["severity"] = statusSeverity;
            obj["update"] = checkUndefined(statusUpdate);

            // Create line object
            array.push(obj);
        }
        console.log(array)
        return (array);
    }

    // Check if string is undefined
    function checkUndefined(string) {
        if (typeof string === 'undefined') {
            return '';
        }
        return string
    }

    return (
        <div className='status-container'>
            <Title text={title + " Status"} />
            <Filters lines={statusData} />
            {statusData.map((line) => (
                <Status key={line.id} lineName={line.lineName} severity={line.severity} update={line.update} />
            ))}
        </div>
    );
}

export default Statuses;
