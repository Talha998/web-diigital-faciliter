import React from 'react';
import { FaCamera } from "react-icons/fa";
import './RegistrationModal.scss';

function Modal({ onClose , text_pera , icon }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
        <div>
          <h2>Registration Request</h2>
        </div>
        <div>
          <button className="close-button" onClick={onClose}>×</button>
          </div>
        </div>
        <div className='modal_form' >
        <form>
           <p className='icon_modal' >{icon}</p>
           <p className='text_modal' >{text_pera}</p>
        </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
