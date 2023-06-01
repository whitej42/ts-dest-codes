import { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Update from './Update';

function Status({ lineName, description, update }) {

    // Set css classes
    const nameClasses = `line-name ${lineName.toLowerCase().split(' & ').join(' ').split(' ').join('-')}`;
    const statusClasses = `line-status ${description.toLowerCase().split(' ').join('-')}`;

    // Toggle show updates button
    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle);
    };

    // Show toggle status update button
    const [showUpdate, setShowUpdate] = useState(false);

    useEffect(
        function getUpdates() {
            if (description !== 'Good Service') {
                setShowUpdate(true)
            }
        }, []
    );

    return (
        <>
            <div className='status'>
                <div className={nameClasses}>
                    <label>{lineName}</label>
                </div>
                <div className={statusClasses}>
                    <label>{description}</label>
                    {showUpdate ?
                        <div className="btn" onClick={handleClick}>{toggle ? <FaChevronUp /> : <FaChevronDown />}</div>
                        :
                        <></>
                    }
                </div>
            </div>
            <Update update={update} isActive={toggle} />
        </>
    )
}

export default Status
