import React, { useState } from 'react';
import './Forgetpassword.scss';
import { IoArrowBackOutline } from "react-icons/io5";
import EmailVerification from '../VerificationEmail/verification_email';
const Forgetpassword = ({onClick}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isResetModalOpen, setResetIsModalOpen] = useState(false);

 
  const onClickReset = () => {
    setResetIsModalOpen(!isResetModalOpen);
  };
  const backForget  = () => {
    setResetIsModalOpen(false);
  };
  return (
      <>
      {!isResetModalOpen ?  
        <form className='form_rt_forget' >
        <h1>Forget Password</h1>
        <p className='text_inner' >Please enter your email to reset the password</p>
          <div className="inputGroup">
            <label htmlFor="userId">Email Address</label>
            <input type="text" id="userId" placeholder="Enter Email Address" />
          </div>
          
          <button className="signInButton" onClick={onClickReset} >Reset Password</button>
          <div className="orSeparator">
          <span></span>
          <p>or</p>
          <span></span>
        </div>
        <p className='d_flex createAccount'><span><IoArrowBackOutline /></span><span onClick={onClick} className="createAccount">Back to Login</span></p>
        </form>
        :
<EmailVerification onClick={backForget}  />
}
</>
    
  );
};

export default Forgetpassword;
