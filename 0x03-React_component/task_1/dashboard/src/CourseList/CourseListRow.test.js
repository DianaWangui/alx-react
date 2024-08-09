// CourseList/CourseListRow.test.js
import React from 'react';
import { render } from '@testing-library/react';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
    describe('when isHeader is true', () => {
        it('renders one cell with colspan = 2 when textSecondCell does not exist', () => {
            const { getByText } = render(<CourseListRow isHeader={true} textFirstCell="Header" />);
            const headerCell = getByText('Header');
            expect(headerCell.colSpan).toBe(2);
        });

        it('renders two cells when textSecondCell is present', () => {
            const { getByText } = render(
                <CourseListRow isHeader={true} textFirstCell="Header1" textSecondCell="Header2" />
            );
            const headerCell1 = getByText('Header1');
            const headerCell2 = getByText('Header2');
            expect(headerCell1).toBeInTheDocument();
            expect(headerCell2).toBeInTheDocument();
        });
    });

    describe('when isHeader is false', () => {
        it('renders correctly two td elements within a tr element', () => {
            const { getByText } = render(
                <table>
                    <tbody>
                        <CourseListRow isHeader={false} textFirstCell="Data1" textSecondCell="Data2" />
                    </tbody>
                </table>
            );
            const dataCell1 = getByText('Data1');
            const dataCell2 = getByText('Data2');
            expect(dataCell1).toBeInTheDocument();
            expect(dataCell2).toBeInTheDocument();
            expect(dataCell1.tagName).toBe('TD');
            expect(dataCell2.tagName).toBe('TD');
        });
    });
});
