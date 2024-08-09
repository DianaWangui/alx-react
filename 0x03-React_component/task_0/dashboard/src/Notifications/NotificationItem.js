import React from 'react'

function NotificationItem({ type, html, value }) {
    return (
        <li
            data-notification-type={type}
            dangerouslySetInnerHTML={html}
        >
            {value}
        </li>
    )
}

export default NotificationItem