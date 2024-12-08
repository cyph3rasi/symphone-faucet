import React from 'react';
import { render, screen } from '@testing-library/react';
import { HeaderLogo } from './HeaderLogo';

describe('HeaderLogo', () => {
  it('renders logo with correct link and text', () => {
    render(<HeaderLogo />);
    
    const link = screen.getByRole('link', { name: /the fallen ones/i });
    expect(link).toHaveAttribute('href', 'https://fallenones.xyz');
    expect(link).not.toHaveAttribute('target');
    
    const heading = screen.getByText(/the fallen ones/i);
    expect(heading).toBeInTheDocument();
  });
});
