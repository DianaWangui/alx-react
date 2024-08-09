import React from 'react'
import './CourseList.css'
import CourseShape from './CourseShape'
import PropTypes from 'prop-types';

export default function CourseList({ listCourses }) {
    return (
        <div>
            {listCourses.length === 0 ? (
                <p>No course available yet</p>
            ) : (
                <ul>
                    {listCourses.map(course => (
                        <li key={course.id}>
                            {course.name} - {course.credit} credits
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape).isRequired, // PropType for listCourses
};
