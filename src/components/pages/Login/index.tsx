import React, { useRef } from 'react';
import Input from '../../Input';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

export default function Login() {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = (
    data: { login: string; password: string },
    { reset }: { reset: () => void },
  ) => {
    console.log(data);
    if (!data.login || !data.password) {
      formRef.current.setFieldError('login', 'Login is required');
    }

    reset();
  };

  return (
    <div>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit} ref={formRef}>
        <Input type="text" name="login" />
        <Input type="password" name="password" />
        <button type="submit">Logar</button>
      </Form>
    </div>
  );
}
