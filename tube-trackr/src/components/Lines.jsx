import { useState, useEffect } from "react";
import axios from 'axios';
import Line from "./Line";
import Title from "./Title";

// Test XML Data - CORS issue on Local
// import XMLData from '../LineStatus.xml';

function Lines() {

    const [lineData, setLineData] = useState([]);

    useEffect(
        function getLineData() {
            console.log(lineData);
            axios
                .get("https://api.tfl.gov.uk/Line/Mode/tube,overground,dlr,tram,elizabeth-line/Status", {
                })
                .then(function (response) {
                    setLineData(response);
                    console.log(response.data);
                    console.log(lineData);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },[]
    );

    // // Get Line Data
    // function getLineData(xmlData) {

    //     var array = [];
    //     const x = xmlDoc.getElementsByTagName("LineStatus");

    //     for (var i = 0; i < x.length; i++) {

    //         // Line object
    //         var obj = {};

    //         // Get line name
    //         var lineList = x[i].getElementsByTagName("Line")[0];
    //         obj["id"] = lineList.getAttribute("ID");
    //         obj["lineName"] = lineList.getAttribute("Name");

    //         // Get status description
    //         var status = x[i].getElementsByTagName("Status")[0];
    //         obj["description"] = status.getAttribute("Description");

    //         // Get status update
    //         obj["update"] = x[i].getAttribute("StatusDetails");

    //         // Create line object
    //         array.push(obj);
    //         // console.log(obj)
    //     }
    //     return (array);
    // }

    return (
        <div className='lines-container'>
            <Title text={"Line Status"}/>
            {lineData.map((line) => (
                <Line key={line.id} lineName={line.lineName} description={line.description} update={line.update} />
            ))}
        </div>
    );
}

export default Lines;
