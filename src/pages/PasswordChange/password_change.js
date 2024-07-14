import React, { useState } from 'react';
import './password_change.scss';
import { IoArrowBackOutline, IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import EmailVerification from '../VerificationEmail/verification_email';
import PasswordResetSucces from '../PasswordResetSucces/PasswordResetSucces';

const PasswordChange = ({ onClick }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [isSuccesModalOpen, setSuccesIsModalOpen] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  const onClickReset = () => {
    setSuccesIsModalOpen(!isSuccesModalOpen);
  };

  return (
    <>
      {!isSuccesModalOpen ?  
        <form className='form_rt_password'>
          <h1>Set a new password</h1>
          <p className='text_inner_password'>Create a new password. Ensure it differs from previous ones for security</p>
          
          <div className="inputGroup">
            <label htmlFor="password">Password</label>
            <div className="passwordInputWrapper">
              <input
                type={isPasswordVisible ? 'text' : 'password'}
                id="password"
                placeholder="Enter Password"
              />
              <span className="toggleIcon" onClick={togglePasswordVisibility}>
                {isPasswordVisible ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </span>
            </div>
          </div>

          <div className="inputGroup">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="passwordInputWrapper">
              <input
                type={isConfirmPasswordVisible ? 'text' : 'password'}
                id="confirmPassword"
                placeholder="Enter Confirm Password"
              />
              <span className="SecondtoggleIcon" onClick={toggleConfirmPasswordVisibility}>
                {isConfirmPasswordVisible ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </span>
            </div>
          </div>
          
          <button className="signInButton" onClick={onClickReset}>Update Password</button>
          {/* <div className="orSeparator">
          <span></span>
          <p>or</p>
          <span></span>
        </div> */}
          {/* <p className='d_flex createAccount'>
            <span><IoArrowBackOutline /></span>
            <span onClick={onClick} className="createAccount">Back to Login</span>
          </p> */}
        </form>
        :
        <>
          {/* <EmailVerification onClick={backForget}  /> */}
        <PasswordResetSucces />
        </>
      }
    </>
  );
};

export default PasswordChange;
