import { useEffect, useState } from "react"

function Update({ update, isActive }) {

    const [updateLink, setUpdateLink] = useState(false);

    // check if service update contains link
    useEffect(
        function getUpdates() {
            if (update.includes("http")) {
                setUpdateLink(true)
            }
        }, [update]
    )

    return (
        <>
            {isActive && (
                <div className="update">
                    {updateLink ?
                        <a href={update} target="0">{update}</a>
                        :
                        <label>{update}</label>
                    }
                </div>
            )}
        </>
    )
}

export default Update
