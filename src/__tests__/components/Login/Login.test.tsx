import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '../../../components/pages/Login';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

describe('Login.tsx', () => {
  it('Should login successfully with correct info', async () => {
    render(<Login />, {wrapper: BrowserRouter});

    const loginInput = screen.getByTestId('login');
    const passwordInput = screen.getByTestId('password');
    const submitButton = screen.getByTestId('login-btn');

    expect(loginInput).toHaveTextContent('');
    expect(passwordInput).toHaveTextContent('');

    await userEvent.type(loginInput, 'teste');
    await userEvent.type(passwordInput, 'teste');

    userEvent.click(submitButton);

    const loginError = screen.queryByTestId('login-error');
    expect(loginError).not.toBeInTheDocument();
  });

  it('Should fail if has invalid fields', async () => {
    render(<Login />, { wrapper: BrowserRouter });

    const loginInput = screen.getByTestId('login');
    const passwordInput = screen.getByTestId('password');
    const submitButton = screen.getByTestId('login-btn');

    expect(loginInput).toHaveTextContent('');
    expect(passwordInput).toHaveTextContent('');

    await userEvent.type(loginInput, 'only login one field');
    await userEvent.click(submitButton);

    const loginError = screen.getByTestId('login-error');

    expect(loginError).toBeInTheDocument();
  });
});
