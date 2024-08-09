import React, { Component } from 'react'

class NotificationItem extends Component {
    render() {
        const { type, html, value, markAsRead, id } = this.props

        const handleClick = () => {
            // Call markAsRead function with the id of the notification
            markAsRead(id);
        };

        return (
            <li
                data-notification-type={type}
                dangerouslySetInnerHTML={html}
                onClick={handleClick}
                style={{ cursor: 'pointer' }}
            >
                {value}
            </li>
        )
    }
}

export default NotificationItem