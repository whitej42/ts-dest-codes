import { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";
import Update from "./Update";

function Line({ line, status }) {

    // Set classes
    const nameClasses = `line-name ${line.toLowerCase().split(' ').join('-')}`;
    const statusClasses = `line-status ${status.toLowerCase().split(' ').join('-')}`;

    // Set update status
    const setUpdate = () => {
        if (status !== 'Good Service') {
            return true;
        }
    }

    // Toggle update
    const [updateOpen, setUpdateOpen] = useState(false)

    // const [isActive, setIsActive] = useState(false)

    return (
        <div>
            <div className='line'>
                <div className={nameClasses}>
                    <label>{line.split('and').join('&')}</label>
                </div>
                <div className={statusClasses}>
                    <label>{status}</label>
                    <div className="btn-icon" onClick={()=>setUpdateOpen(!updateOpen)}>
                        {setUpdate() &&
                            <FaChevronDown />
                        }
                    </div>
                </div>
            </div>
            <div>
                {updateOpen && <Update />}
            </div>
        </div>
    )
}

export default Line
