import React from 'react';
import { FaApple, FaFacebook } from 'react-icons/fa';
import GoogleLogin from './GoogleLogin';

export default function ThirdPartyAuth() {
  return (
    <div className="try-login-with">
      <span className="try-login-with-text">Ou entre com</span>
      <div className="sign-in-buttons">
        <GoogleLogin />
        <button className="icon-sigin facebook-icon">
          <FaFacebook />
        </button>
        <button className="icon-sigin apple-icon">
          <FaApple />
        </button>
      </div>
    </div>
  );
}

