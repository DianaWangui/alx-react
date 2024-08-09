import React from 'react';
import Login from './Login';
import { render } from '@testing-library/react'

describe('Login component', () => {
    it('renders without crashing', () => {
        render(<Login />)
    });

    it('renders  2 input tags and 2 label tags', () => {
        const { getAllByRole } = render(<Login />); // Render the Login component
        const inputElements = getAllByRole('textbox'); // Get all input elements
        const labelElements = getAllByRole('label'); // Get all label elements

        expect(inputElements).toHaveLength(2); // Check if there are 2 input elements
        expect(labelElements).toHaveLength(2); // Check if there are 2 label elements
    })
})
