import { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Update from './Update';

function Status({ lineName, severity, update }) {

    // Set css classes
    const nameClasses = `line-name ${lineName.toLowerCase().split(' & ').join(' ').split(' ').join('-')}`;
    const statusClasses = `line-status ${severity.toLowerCase().split(' ').join('-')}`;

    // Toggle show updates button
    const [toggle, setToggle] = useState(false);

    // Show toggle status update button
    const [showUpdate, setShowUpdate] = useState(false);

    useEffect(
        function getUpdates() {
            if (severity !== 'Good Service') {
                setShowUpdate(true)
            }
        }, [severity]
    );

    return (
        <>
            <div className='status'>
                <div className={nameClasses}>
                    <label>{lineName}</label>
                </div>
                <div className={statusClasses}>
                    <label>{severity}</label>
                    {showUpdate &&
                        <div className="btn" onClick={() => setToggle(!toggle)}>{toggle ? <FaChevronUp /> : <FaChevronDown />}</div>
                    }
                </div>
            </div>
            <Update update={update} isActive={toggle} />
        </>
    )
}

export default Status
