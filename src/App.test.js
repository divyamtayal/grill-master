import { render, screen } from '@testing-library/react';
import App from './App';

// Dummy test - More test will be added later
test('rendering App component', () => {
  render(<App />);
  screen.findByText(/Grill Master/i);
});
