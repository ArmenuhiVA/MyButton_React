import React from 'react'
import './Modal.css'

function Modal({onClose}) {
  return (
    <div id="modal">
        <div class="modal__window">
            <h2>Please to meet you!</h2>
            <p>Hello there, I am a nice Modal Window.</p> 
           <button className="button2" onClick={onClose}>Close</button>
        </div>
    </div>
  )
}

export default Modal
