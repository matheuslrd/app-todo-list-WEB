import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Teste from '../../../components/Teste';

describe('loads and displays greeting', () => {
  it('adasdsa', () => {
    // ARRANGE
    render(<Teste />);

    // ACT
    const testElement = screen.getByTestId('teste');

    // ASSERT
    expect(testElement).toHaveTextContent('Teste');
  });
});