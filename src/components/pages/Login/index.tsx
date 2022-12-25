import React, { useRef } from 'react';
import Input from '../../Input';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Link } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { FaLock, FaApple, FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

export default function Login() {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = (
    data: { login: string; password: string },
    { reset }: { reset: () => void },
  ) => {
    console.log(data);
    if (!data.login || !data.password) {
      formRef.current?.setFieldError('login', 'erro');

      reset();
    }
  };

  return (
    <div className="login-page">
      <div className="form-login">
        <Form onSubmit={handleSubmit} ref={formRef}>
          <div className="login-input-group">
            <Input
              type="text"
              name="login"
              data-testid="login"
              className="input-login"
              placeholder="Login"
              iconLeft={<MdEmail />}
              labelClass="label-login"
            />
            <Input
              type="password"
              name="password"
              data-testid="password"
              className="input-login"
              placeholder="Senha"
              iconLeft={<FaLock />}
              labelClass="label-login"
            />
          </div>
          <Link className="recovery-password" to="/recovery-password">
            Esqueci minha senha
          </Link>
          <button type="submit" data-testid="login-btn" className="submit-login">
            Entrar
          </button>
          <span className="register-link">
            Não tem uma conta? <Link to="/register">Registre-se</Link>
          </span>
        </Form>
        <hr className="separator" />
        <div className="try-login-with">
        <span className="try-login-with-text">Ou entre com</span>
          <div className="sign-in-buttons">
            <button className="icon-sigin google-icon">
              <FcGoogle />
            </button>
            <button className="icon-sigin facebook-icon">
              <FaFacebook />
            </button>
            <button className="icon-sigin apple-icon">
              <FaApple />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
