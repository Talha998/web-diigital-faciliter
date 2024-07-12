import React, { useState } from 'react';
import "./login.scss";
import digitalfaciliterLogo from '../../assets/images/digitalfaciliterLogo.png';
import FirstForm from './firstForm';
import samcontrolsLogo from '../../assets/images/samcontrolsLogo.png';
import loginBackground from '../../assets/images/loginBackground.png';
// import AnimationImage from '../../assets/images/Animation - 1720665179268.mp4';

const LoginPage = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here, e.g., send a request to an API
    console.log('User ID:', userId);
    console.log('Password:', password);
  };

  return (
    <div className='login-container'>
     <FirstForm />
    
    </div>
  );
};

export default LoginPage;