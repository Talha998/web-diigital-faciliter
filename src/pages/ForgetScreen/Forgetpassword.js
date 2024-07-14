import React, { useState } from 'react';
import './Forgetpassword.scss';
import digitalfaciliterLogo from '../../assets/images/digitalfaciliterLogo.png';
import samcontrolsLogo from '../../assets/images/samcontrolsLogo.png';
import loginBackground from '../../assets/images/loginBackground.png';
import animationVideo from '../../assets/images/UeuS37KIcY.webm';
import { IoArrowBackOutline } from "react-icons/io5";
import RegistrationModal from '../RegisterAcount/RegistrationModal';
const Forgetpassword = ({onClick}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
      
      
       
        <form className='form_rt_forget' >
        <h1>Forget Password</h1>
        <p>Please enter your email to reset the password</p>
          <div className="inputGroup">
            <label htmlFor="userId">Email Address</label>
            <input type="text" id="userId" placeholder="Enter Email Address" />
          </div>
          
          <button type="submit" className="signInButton">Reset Password</button>
          <div className="orSeparator">
          <span></span>
          <p>or</p>
          <span></span>
        </div>
        <p className='flex' ><span><IoArrowBackOutline /></span><span onClick={onClick} className="createAccount">Back to Login</span></p>
        </form>

    
  );
};

export default Forgetpassword;
