import { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";
import Update from "./Update";

function Line({ line, status }) {
    const nameClasses = `line-name ${line.toLowerCase().split(' ').join('-')}`;
    const statusClasses = `line-status ${status.toLowerCase().split(' ').join('-')}`;

    const [updateIsOpen, setUpdateIsOpen] = useState(false)

    function showUpdate() {
        setUpdateIsOpen(true)
    }

    const setUpdate = () => {
        if (status !== 'Good Service') {
            return true;
        }
    }

    return (
        <div>
            <div className='line'>
                <div className={nameClasses}>
                    <label>{line.split('and').join('&')}</label>
                </div>
                <div className={statusClasses}>
                    <label>{status}</label>
                    {setUpdate() &&
                        <FaChevronDown className="btn-update" onClick={showUpdate} />
                    }
                </div>
            </div>
            <div>
                {updateIsOpen && <Update />}
            </div>
        </div>
    )
}

export default Line
