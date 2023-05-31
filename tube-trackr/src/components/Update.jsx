import React, { useEffect, useState } from 'react'

function Update({ update, isActive }) {

    const [showLink, setShowLink] = useState(false)

    // useEffect(
    //     function getLink() {
    //         if (update.includes("https")) {
    //             console.log(true)
    //             // setShowLink(true)
    //         }
    //     },[]
    // );

    return (
        <>
            {isActive && (
                <div className='update'>
                    {update}
                </div>
            )}
        </>
    )
}

export default Update
