import React from 'react';
import { render } from '@testing-library/react'; // Import render from testing-library/react
import NotificationItem from './NotificationItem';

describe('NotificationItem component', () => {
    it('render without crashing', () => {
        render(<NotificationItem type='default' value='test' html={{ __html: '<u>test</u>' }} />)
    })
});
