// App.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react'; // Import render from testing-library/react
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

    it('calls logOut function and displays alert when Ctrl + H are pressed', () => {
        // Mock logOut function
        const logOutMock = jest.fn();

        // Render App component with mock logOut function
        const { container } = render(<App logOut={logOutMock} />);

        // Simulate keydown event with Ctrl + H
        fireEvent.keyDown(container, { key: 'h', ctrlKey: true });

        // Expect logOut function to be called
        expect(logOutMock).toHaveBeenCalled();

        // Expect alert to be called with correct message
        expect(window.alert).toHaveBeenCalledWith('Logging you out');
    });
});
