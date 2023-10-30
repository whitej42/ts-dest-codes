import React from 'react'

function Modal({ closeModal }) {
    return (
        <div className='modalBackground'>
            <div className='modalContainer'>
                <div className='modalTitle'>
                    <button onClick={ () => closeModal(false)}>X</button>
                </div>
                <div className='modalBody'>
                </div>
            </div>
        </div>
    )
}

export default Modal
