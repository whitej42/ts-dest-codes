import { useState, useEffect } from "react";
import axios from 'axios';
import LineStatus from "./LineStatus";
import { FaMinus, FaPlus } from "react-icons/fa";
import './LineStatus.css';
import './Colours.css';

function LineStatusList({ title, api_url, enabled }) {

    const [toggle, setToggle] = useState(false);
    const [issueCount, setIssueCount] = useState(0);

    // If enabled show status list
    useEffect(
        function toggleEnabled() {
            if (enabled == true) {
                setToggle(true)
            }
        }, [enabled]
    );

    // Set status data
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

    // Convert API data to array format
    function buildStatusData(apiData) {
        return apiData.map((item, index) => {
            const lineName = item.name;
            const statusSeverity = item.lineStatuses?.[0]?.statusSeverityDescription || 'Good Service';
            const statusUpdate = item.lineStatuses?.[0]?.reason || '';

            return {
                id: index,
                lineName,
                statusSeverity,
                statusUpdate
            };
        });
    }

    useEffect(() => {
        const countIssues = () => {
            const count = statusData.reduce((acc, line) => {
                return line.statusSeverity !== 'Good Service' ? acc + 1 : acc;
            }, 0);
            setIssueCount(count);
        };

        countIssues();
    }, [statusData]);

    return (
        <div className='status-container'>
            <div className="status-header">
                <div className="title-container">
                    <span className="title">{title}</span>
                    <span className="issue-count">
                        {issueCount > 0 ? `${issueCount} line(s) with issues` : 'Good service on all lines'}
                    </span>
                </div>
                <div className="btn btn-show icon" onClick={() => setToggle(!toggle)}>
                    {toggle ? <FaMinus color="#ea6c74" /> : <FaPlus color="#1cbc9a" />}
                </div>
            </div>

            {toggle &&
                <div className="lines-container">
                {statusData.map((line) => (
                    <LineStatus 
                        key={line.id} 
                        lineName={line.lineName} 
                        statusSeverity={line.statusSeverity} 
                        statusUpdate={line.statusUpdate} 
                    />
                ))}
                </div>
            }
        </div>
    );
}

export default LineStatusList;
