import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('App.tsx', () => {
  it('Should be able to render in the page', () => {
    render(<App />);
  });
});
