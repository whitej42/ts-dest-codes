import { useState } from 'react';
import { FaFilter } from 'react-icons/fa';

function Filters( {lines} ) {
    
    // Toggle filters button
    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle);
    };

    return (
        <div className='filters-container'>
            <div onClick={handleClick} className='btn'>Filters <FaFilter /></div>
            {toggle ?
                <div className='filters'>
                    <select name='lines' id='lines' className='dropdown'>
                        <option value="">Any Line</option>
                        {lines.map((line) => (
                            <option key={line.key} value={line.id}>{line.lineName}</option>
                        ))}
                    </select>
                </div>
                :
                <></>
            }
        </div>
    )
}

export default Filters
