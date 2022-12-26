import React, { useRef } from 'react';
import Input from '../../Input';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Link } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ThirdPartyAuth from './ThirdPartyAuth';

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
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.4 }}
        className="form-login"
      >
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
          <Link className="recovery-password" to="/forgot">
            Esqueci minha senha
          </Link>
          <button type="submit" data-testid="login-btn" className="submit-login">
            Entrar
          </button>
          <span className="register-link">
            Não tem uma conta? <Link to="/singup">Registre-se</Link>
          </span>
        </Form>
        <hr className="separator" />
        <ThirdPartyAuth />
      </motion.div>
    </div>
  );
}
