import { useState, useEffect } from "react";
import axios from 'axios';
import LineStatus from "./LineStatus";
import { FaMinus, FaPlus } from "react-icons/fa";
import './colours.css';
import './line-status.css';

function LineStatusList({ title, api_url }) {

    // Toggle status button
    const [toggle, setToggle] = useState(false);

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
        }, [api_url]
    );

    // Convert API data to array
    function buildStatusData(apiData) {

        var array = [];
        const x = apiData

        for (var i = 0; i < x.length; i++) {

            // Line object
            var obj = {};

            // Array variables
            var lineName = x[i]['name'];
            var statusSeverity = x[i]['lineStatuses'][0]['statusSeverityDescription'];
            var statusUpdate = x[i]['lineStatuses'][0]['reason'];
            
            // Sort values into array
            obj["id"] = i;
            obj["lineName"] = lineName;
            obj["statusSeverity"] = statusSeverity;
            obj["statusUpdate"] = checkUndefined(statusUpdate);

            // Push to array
            array.push(obj);
        }
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
            <div className="status-title" onClick={() => setToggle(!toggle)} >
                {title}
                <div className='btn btn-show icon'>{toggle ? <FaMinus /> : <FaPlus />}</div>
            </div>
            {toggle &&
                <div className="lines-container">
                {statusData.map((line) => (
                    <LineStatus key={line.id} lineName={line.lineName} statusSeverity={line.statusSeverity} statusUpdate={line.statusUpdate} />
                ))}
                </div>
            }
        </div>
    );
}

export default LineStatusList;
