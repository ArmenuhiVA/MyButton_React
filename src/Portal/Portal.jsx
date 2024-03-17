import React, { useState, useRef, useEffect } from 'react'
import { MyButton } from '../MyButton';
import { createPortal } from 'react-dom';
import  Modal  from './Modal.jsx';


function Portal() {
    const [showModal, setShowModal] = useState(false);
    const ButtonRef = useRef(null);

  useEffect (() => {
   ButtonRef.current.focus()
  }, []);

  return (
    <>
      <MyButton 
       ref = {ButtonRef}
       onClick = {() => setShowModal(true)}
      >
        Show the message
      </MyButton>
      {
        showModal && (createPortal(
            <Modal onClose = {() => setShowModal(false)}/>,
            document.body
        ))
      }
    </>
  )
}

export default Portal
