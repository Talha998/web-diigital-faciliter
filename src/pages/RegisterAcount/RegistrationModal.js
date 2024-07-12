import React from 'react';
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
            <div className="photo-placeholder"></div>
            <button type="button" className="upload-button">Upload Photo</button>
          </div>
          <div className='input-group-container' >
          <div className="input-group">
          <label htmlFor="userId">User ID</label>
            <input type="text" placeholder="Enter user Id" required />
            </div>
            <div className="input-group">
            <label htmlFor="userId">Full Name</label>
            <input type="text" placeholder="Enter your full name" required />
            </div>
            </div>


            {/* <div className='input-group-container' >
          <div className="input-group">
          <label htmlFor="userId">Password</label>
          <input type="password" placeholder="Type your password" required />
            </div>
            <div className="input-group">
            <label htmlFor="userId">Designation</label>
            <select required>
              <option value="" disabled selected>Select Designation</option>
         
            </select>
            </div>
            </div> */}
      

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
          <button type="submit">Submit</button>
        </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrationModal;
