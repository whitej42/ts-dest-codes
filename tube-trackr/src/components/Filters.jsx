import { useState, useEffect } from 'react';
import { FaFilter } from "react-icons/fa";

function Filters() {
    // Toggle filters button
    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle);
    };

    return (
        <div className="filters-container">
            <div onClick={handleClick} className='btn'>Filters <FaFilter /></div>
            {toggle ?
                <div className='filter-options'>
                    <div className='filters'>
                        <label className='checkbox-label'>

                            <input type="checkbox" />
                        </label>
                    </div>
                    <div className='filters'>
                        <label>
                            Good Service
                            <input className='checkbox' type="checkbox" />
                        </label>
                        <label>
                            Severe Delays
                            <input className='checkbox' type="checkbox" />
                        </label>
                    </div>
                </div>
                :
                <></>
            }
        </div>
    )
}

export default Filters
