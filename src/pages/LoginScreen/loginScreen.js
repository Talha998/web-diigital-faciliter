import React, { useState } from 'react';
import './loginScreen.scss';
import digitalfaciliterLogo from '../../assets/images/digitalfaciliterLogo.png';
import samcontrolsLogo from '../../assets/images/samcontrolsLogo.png';
import loginBackground from '../../assets/images/loginBackground.png';
import animationVideo from '../../assets/images/UeuS37KIcY.webm';
import RegistrationModal from '../RegisterAcount/RegistrationModal';
import Forgetpassword from '../ForgetScreen/Forgetpassword';

const LoginScreen = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isForgetOpen, setForgetOpen] = useState('true');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const open_ForgotPassword = () => {
    setForgetOpen(!isForgetOpen);
  };
  return (
    <div className="loginContainer" style={{ backgroundImage: `url(${loginBackground})` }}>
      <div className='main_fluid'>
      
      <div className='main_container' >
        <div className='logo_img'>
        <img className='digitalfaciliterLogo' src={digitalfaciliterLogo} alt="Digital Faciliter Logo" />
        </div>
      <div className="loginBox">
       {isForgetOpen ?   
        <form className='form_rt' >
        <h1>Sign in</h1>
          <div className="inputGroup">
            <label htmlFor="userId">User ID</label>
            <input type="text" id="userId" placeholder="Enter User ID" />
          </div>
          <div className="inputGroup">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter Password" />
          </div>
          <p className="forgotPassword"  onClick={open_ForgotPassword}>Forgot Password?</p>
          <button type="submit" className="signInButton">Sign In</button>
          <div className="orSeparator">
          <span></span>
          <p>or</p>
          <span></span>
        </div>
        <a className="createAccount">New user?<span  onClick={openModal} >Create an account</span></a>
        </form>
         : <Forgetpassword onClick={() => setForgetOpen(true)} /> }
      </div>
      <footer className="footer">
        <p>SAM Controls 2024 (www.samcontrols.com)</p>
        <div className="footerLinks">
          <a href="#">About</a>
          <a className='borderWidth' ></a>
          <a href="#">Support</a>
          <a className='borderWidth' ></a>
          <a href="#">Contact Us</a>
        </div>
        <div className='inner_footer_img'>
        <img src={samcontrolsLogo} alt="SAM Controls Logo" className="samLogo" />
        </div>
      </footer>
      </div>
  
      <video autoPlay loop muted className="backgroundVideo">
        <source src={animationVideo} type="video/mp4" />
      </video>
      
      </div>

      {isModalOpen && ( 
       <RegistrationModal  onClose={closeModal}/>
)}
      
    </div>
  );
};

export default LoginScreen;
