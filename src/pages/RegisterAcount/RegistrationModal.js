import React from 'react';
import { FaCamera } from "react-icons/fa";
import './RegistrationModal.scss';

function RegistrationModal({ onClose }) {
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
          <div className="photo-upload">
            <div className="photo-placeholder">
            <FaCamera size={30} color="black" />

            </div>
            <button type="button" className="upload-button">Upload Photo</button>
          </div>
          <div className='input-group-container' >
          <div className="input-group">
          <label htmlFor="userId">User ID</label>
            <input type="text" placeholder="Enter User ID" required />
            </div>
            <div className="input-group">
            <label htmlFor="userId">Full Name</label>
            <input type="text" placeholder="Enter your full name" required />
            </div>
            </div>


            <div className='input-group-container-select' >
          <div className="input-group">
          <label htmlFor="userId">Password</label>
          <input type="password" placeholder="Type your password" required />
            </div>
            <div className="input-group">
  <label htmlFor="userId">Designation</label>
  <select required defaultValue="">
    <option value="" disabled>Select Designation</option>
    {/* Add more options here */}
  </select>
</div>
            </div>
      

          <div className='input-group-container' >
          <div className="input-group">
          <label htmlFor="userId">Email</label>
           <input type="email" placeholder="Enter user email" required />
            </div>
            <div className="input-group">
            <label htmlFor="userId">Phone Number</label>
            <input type="text" placeholder="Phone Number" required />
            </div>
            </div>
            <div className='btn_form' >
          <button type="submit">Submit</button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrationModal;
