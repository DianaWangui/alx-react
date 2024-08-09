// App.test.js
import React from 'react';
import { render } from '@testing-library/react'; // Import render from testing-library/react
import App from './App'; // Import your App component

describe('App component', () => {
    it('contains the Notifications component', () => {
        const { getByTestId } = render(<App />); // Render the App component
        expect(getByTestId('notifications')).toBeInTheDocument(); // Check if the Notifications component exists
    });

    it('contains the Header component', () => {
        const { getByTestId } = render(<App />); // Render the App component
        expect(getByTestId('header')).toBeInTheDocument(); // Check if the Header component exists
    });

    it('contains the Login component', () => {
        const { getByTestId } = render(<App />); // Render the App component
        expect(getByTestId('login')).toBeInTheDocument(); // Check if the Login component exists
    });

    it('contains the Footer component', () => {
        const { getByTestId } = render(<App />); // Render the App component
        expect(getByTestId('footer')).toBeInTheDocument(); // Check if the Footer component exists
    });
});
