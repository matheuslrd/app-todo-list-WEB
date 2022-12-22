import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('loads and displays greeting', () => {

  it('App', () => {
    render(<App />);

    const testElement = screen.getByTestId('app');

    expect(testElement).toHaveTextContent('Hello, world!');
  });
});