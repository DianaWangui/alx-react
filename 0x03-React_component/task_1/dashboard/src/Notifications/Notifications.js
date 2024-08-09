import React from 'react'
import './Notifications.css'
import closeIcon from '../assests/close-icon.png'
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

function Notifications({ displayDrawer = true, listNotifications = [] }) {
    return (
        <>
            <div className='menuItem'>
                Your notifications
            </div>
            {displayDrawer && <div className='Notifications'>
                <button
                    style={{ position: 'absolute', top: 15, right: 20 }}
                    aria-label='Close'
                    onClick={() => { console.log('Close button has been clicked'); }}
                >
                    <img src={closeIcon} alt='Close Icon' width={20} />
                </button>
                <p>
                    Here is the list of notifications
                </p>
                <ul>
                    {listNotifications.length === 0 ? (
                        <NotificationItem
                            type='default'
                            value='No new notification for now'
                        />
                    ) : (
                        listNotifications.map((notification) => (
                            <NotificationItem
                                key={notification.id}
                                type={notification.type}
                                value={notification.value}
                                html={notification.html}
                            />
                        ))
                    )}
                </ul>
            </div>}
        </>
    )
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool.isRequired,
    listNotifications: PropTypes.arrayOf(NotificationItemShape).isRequired,
};


export default Notifications