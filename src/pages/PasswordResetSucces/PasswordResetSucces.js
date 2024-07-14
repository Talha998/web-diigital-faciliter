import React, { useState } from 'react';
import './PasswordResetSucces.scss';
import Successfully from "../../assets/images/successful-toK2Fgnz3Q.png"

const PasswordResetSucces = ({ onClick }) => {
  const [isSuccesModalOpen, setSuccesIsModalOpen] = useState(false);

  const onClickReset = () => {
    // setSuccesIsModalOpen(!isSuccesModalOpen);
  };

  return (
    <>
        <form className='form_rt_success'>
          <h1>Password reset</h1>
          <p className='text_inner_password'>Your password has been successfully reset</p>
          <div className="d_flex_just">
          <img src={Successfully} title="" />
          </div>
          <button className="signInButton" onClick={onClickReset}>Login</button>
        </form>
       
    </>
  );
};

export default PasswordResetSucces;
