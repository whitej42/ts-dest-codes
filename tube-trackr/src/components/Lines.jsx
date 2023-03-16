import Line from "./Line";
import { useState, useEffect } from "react";
import axios from 'axios';

// Test XML Data - CORS issue on Local
import XMLData from '../LineStatus.xml';

function Lines() {

    const [lineData, setLineData] = useState([]);

    useEffect(
        function getApiData() {
            // Parse XML
            axios
                .get(XMLData, {
                    "Content-Type": "application/xml; charset=utf-8"
                })
                .then(function (response) {
                    const parsedXml = response.data;
                    setLineData(getLineData(parsedXml));
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        []
    );

    // Get Line Data
    function getLineData(xmlData) {
        const xmlDoc = new DOMParser().parseFromString(xmlData, 'text/xml')

        var array = [];
        const x = xmlDoc.getElementsByTagName("LineStatus");

        for (var i = 0; i < x.length; i++) {

            // Line object
            var obj = {};

            // Get line name
            var lineList = x[i].getElementsByTagName("Line")[0];
            obj["id"] = lineList.getAttribute("ID");
            obj["lineName"] = lineList.getAttribute("Name");

            // Get status description
            var status = x[i].getElementsByTagName("Status")[0];
            obj["description"] = status.getAttribute("Description");

            // Get status update
            obj["update"] = x[i].getAttribute("StatusDetails");

            // Create line object
            array.push(obj);
            // console.log(obj)
        }
        return (array);
    }

    return (
        <div className='lines-container'>
            {lineData.map((line) => (
                <Line key={line.id} lineName={line.lineName} description={line.description} update={line.update} />
            ))}
        </div>
    );
}

export default Lines;