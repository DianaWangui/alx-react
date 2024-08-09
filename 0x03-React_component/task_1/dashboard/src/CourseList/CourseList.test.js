// CourseList/CourseListRow.test.js
import React from 'react';
import { render } from '@testing-library/react';
import CourseList from './CourseList';

describe('CourseList does not crash', () => {
    it('renders CourseList', () => {
        render(<CourseList />)
    });

});
