import React, { useState } from 'react';
import './PasswordResetSucces.scss';
import Successfully from "../../assets/images/successful-toK2Fgnz3Q.png"
import { useRecoilState } from 'recoil';
import { isForgetOpenState } from '../../state/atoms/userAtom';

const PasswordResetSucces = ({ onClick }) => {
  const [isSuccesModalOpen, setSuccesIsModalOpen] = useState(false);
  const [isForgetOpen, setForgetOpen] = useRecoilState(isForgetOpenState);
  const onClickReset = () => {
    setForgetOpen(!isForgetOpen);
  };

  return (
    <>
        <div className='form_rt_success'>
          <h1>Password reset</h1>
          <p className='text_inner_password'>Your password has been successfully reset</p>
          <div className="d_flex_just">
          <img src={Successfully} title="" />
          </div>
          <button className="signInButton" onClick={onClickReset}>Login</button>
        </div>
       
    </>
  );
};

export default PasswordResetSucces;
