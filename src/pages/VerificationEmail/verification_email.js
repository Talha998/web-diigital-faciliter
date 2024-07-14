import React, { useState } from 'react';
import './verification_email.scss';
import { IoArrowBack } from "react-icons/io5";
import PasswordChange from '../PasswordChange/password_change';

function EmailVerification({ onClick }) {
  const [code, setCode] = useState(['', '', '', '', '']);
  const [ispasswordModalOpen, setpasswordIsModalOpen] = useState(false);

  const handleChange = (value, index) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your code verification logic here
  };

  const changePassword = () => {
    setpasswordIsModalOpen(true);
  }

  return (
    <>
    {!ispasswordModalOpen ?  
    <div className="email-verification-container">
      <div className="header d_flex_just">
        <h2>Check your email</h2>
        <p onClick={onClick} ><IoArrowBack  color="#009580" /></p>
      </div>
      <p className='email_text' >We sent a reset link to <span className="email">alisalman@gmail.com</span>. Enter 5 digit code that mentioned in the email</p>
      <form onSubmit={handleSubmit} className="form">
        <div className="code-inputs">
          {code.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              className="code-input"
            />
          ))}
        </div>
        <button type="submit" className="verify-button" onClick={changePassword} >Verify Code</button>
      </form>
      <div className="footer">
        <p>Haven’t got the email yet? <span className="resend">Resend email</span></p>
      </div>
    </div>
: <PasswordChange /> }
 </>   
  );
}

export default EmailVerification;
