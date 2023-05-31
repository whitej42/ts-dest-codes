import { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Update from './Update';

function Line({ lineName, description, update }) {

    // Set classes
    const nameClasses = `line-name ${lineName.toLowerCase().split(' ').join('-')}`;
    const statusClasses = `line-status ${description.toLowerCase().split(' ').join('-')}`;

    // Toggle show updates
    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle);
    };

    const [showUpdate, setShowUpdate] = useState(false);

    useEffect(
        function getUpdates() {
            if (description !== 'Good Service') {
                console.log(description)
                setShowUpdate(true)
            }
        },[]
    );

    return (
        <div>
            <div className='line'>
                <div className={nameClasses}>
                    <label>{lineName.split('and').join('&')}</label>
                </div>
                <div className={statusClasses}>
                    <label>{description}</label>
                    {showUpdate ?
                        <div className="btn-icon" onClick={ handleClick }>{ toggle ? <FaChevronUp /> : <FaChevronDown /> }</div>
                        :
                        <></>
                    }
                </div>
            </div>
            <Update update={update} isActive={toggle} />
        </div>
    )
}

export default Line
