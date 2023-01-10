import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { GoogleUser } from '@/interfaces/google';
import googleProvider from "../../../../services/googleProvider";

export default function GoogleLogin() {
  const onSignIn = (googleUser: GoogleUser) => {
    const profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
  };

  const login = googleProvider.useGoogleLogin({
    flow: 'auth-code',
    onSuccess: (res) => onSignIn(res as unknown as GoogleUser),
    onError: (err) => console.error('Failed to login with google', err),
  });

  return (
    <div className="g-signin2">
      <button className="icon-sigin google-icon" onClick={() => login()}>
        <FcGoogle />
      </button>
    </div>
  );
}
