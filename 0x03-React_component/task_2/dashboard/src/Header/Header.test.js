import React from 'react';
import Header from "./Header";
import { render } from '@testing-library/react'

describe('Header component', () => {
    it('renders without crashing', () => {
        render(<Header />)
    });

    it('renders img and h1 tags', () => {
        const { getByRole } = render(<Header />);
        expect(getByRole('img')).toBeInTheDocument();
        expect(getByRole('heading', { level: 1 })).toBeInTheDocument();
    })
})
