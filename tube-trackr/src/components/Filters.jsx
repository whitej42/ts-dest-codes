import { useState } from 'react';
import { FaFilter } from 'react-icons/fa';

function Filters( {lines} ) {
    
    // Toggle filters button
    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle);
    };

    // Dropdown handler
    const [option, setOption] = useState()

    function handleChange(event){
        setOption(event.target.value)
    }

    return (
        <div className='filters-container'>
            <div onClick={handleClick} className='btn'><FaFilter /></div>
            {toggle ?
                <div className='filters'>
                    <select name='lines' id='lines' className='dropdown' onChange={handleChange}>
                        <option value="">Any Line</option>
                        {lines.map((line) => (
                            <option key={line.key} value={line.id}>{line.lineName}</option>
                        ))}
                    </select>
                </div>
                :
                <></>
            }

            {/* <p>{`Test: You selected ${option}`}</p> */}
        </div>
    )
}

export default Filters
