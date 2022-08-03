import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders react app', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const logo = screen.getByText(/app/i);
  expect(logo).toBeInTheDocument();
});
