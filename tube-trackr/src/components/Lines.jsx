import Line from "./Line";
import { useState } from "react";
import axios from 'axios';

// Test XML Data - CORS issue on Local
import XMLData from '../LineStatus.xml';

function Lines() {

    const [lineData, setLineData] = useState([]);

    //// Get XML Data
    const XmlParser = () => {
        // var url = "http://cloud.tfl.gov.uk/TrackerNet/LineStatus"
        axios
            .get(XMLData, {
                "Content-Type": "application/xml; charset=utf-8"
            })
            .then(function (response) {
                const parsedXml = convertJson(response.data);

                // convertJson(response.data)
                setLineData(parsedXml);
                
                console.log(parsedXml);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    XmlParser()

    // Convert to JSON
    const convertJson = (parsedXml) => {
        var convert = require('xml-js');
        var parsedJson = convert.xml2json(parsedXml, { compact: true, spaces: 3 }).toLowerCase();

        return(parsedJson);
    }

    return (
        <div className='lines-container'>
            {lineData.map((line) => (
                <Line lineName={line.LineStatus.Line.Name} status={line.LineStatus.Line.Status.Description} />
            ))};
        </div>
    );
}

export default Lines;
