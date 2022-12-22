import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Teste from '../components/Teste';
// import App from '../App';

describe('loads and displays greeting', () => {
  it('Teste', () => {
    // ARRANGE
    render(<Teste />);

    // ACT
    const testElement = screen.getByTestId('teste');

    // ASSERT
    expect(testElement).toHaveTextContent('Teste');
  });

  // it('App', () => {
  //   // ARRANGE
  //   render(<App />);

  //   // ACT
  //   const testElement = screen.getByTestId('app');

  //   // ASSERT
  //   expect(testElement).toHaveTextContent('Hello, world!');
  // });
});