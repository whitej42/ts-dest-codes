function Update({ update, isActive }) {

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
