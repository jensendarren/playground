import { render, screen } from '@testing-library/react';s
import App from './App';

xdescribe('point social home page', () => {
  xtest('renders point social page title', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
})
