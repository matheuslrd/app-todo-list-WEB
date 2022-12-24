import React, { useRef } from 'react';
import Input from '../../Input';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Link } from 'react-router-dom';

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
      <Form onSubmit={handleSubmit} ref={formRef} className="form-login">
        <div className="login-input-group">
          <Input
            type="text"
            name="login"
            data-testid="login"
            className="input-login"
            placeholder="Login"
          />
          <Input
            type="password"
            name="password"
            data-testid="password"
            className="input-login"
            placeholder="Senha"
          />
        </div>
        <Link to="/recover-password">Esqueci minha senha</Link>
        <button type="submit" data-testid="login-btn" className="submit-login">
          Entrar
        </button>
        <span className="register-link">
          Não tem uma conta? <Link to="/register">Registre-se</Link>
        </span>
        <hr className="separator" />
        <div>
          <span className='try-login-with'>Ou entre com</span>
          <button type="button">Google</button>
        </div>
      </Form>
    </div>
  );
}
