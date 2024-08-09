import React from 'react'

function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null }) {
    const rowStyle = {
        backgroundColor: isHeader ? '#deb5b545' : '#f5f5f5ab',
    };

    return (
        <tr style={rowStyle}>
            {isHeader ? (
                textSecondCell == null ? (
                    <th colSpan={2} style={{ backgroundColor: '#deb5b545' }}>{textFirstCell}</th>
                ) : (
                    <>
                        <th>{textFirstCell}</th>
                        <th>{textSecondCell}</th>
                    </>
                )
            ) : (
                <>
                    <td>{textFirstCell}</td>
                    <td>{textSecondCell}</td>
                </>
            )}
        </tr>
    )
}

export default CourseListRow