import React from 'react';
import Footer from './Footer'
import { render } from '@testing-library/react'

describe('Footer component', () => {
    it('renders without crashing', () => {
        render(<Footer />)
    });

    it('renders text “Copyright”', () => {
        const { getByText } = render(<Footer />); // Render the Login component

        expect(getByText('Copyright')).toBeInDocument(); // Check if there are 2 label elements
    })
})
