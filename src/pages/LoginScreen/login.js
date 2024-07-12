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
    <div
      style={{
        backgroundImage: `url(${loginBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
     <FirstForm />
      {/* <video
        src={AnimationImage}
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: '-1',
          opacity: '0.5',
        }}
      /> */}
    </div>
  );
};

export default LoginPage;