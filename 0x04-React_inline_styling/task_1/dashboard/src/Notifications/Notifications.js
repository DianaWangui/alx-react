import React, { Component } from 'react'
import closeIcon from '../assests/close-icon.png'
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';
import './Notifications.test'

class Notifications extends Component {

    constructor(props) {
        super(props);

        this.state = {
            displayDrawer: true,
            listNotifications: [
                { key: 1, type: 'urgent', value: 'testing', }
            ],
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.listNotifications.length > this.state.listNotifications.length
    }

    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    }
    render() {
        const { displayDrawer, listNotifications } = this.state;
        return (
            <>
                <div className='menuItem'>
                    Your notifications
                </div>
                {displayDrawer && <div className={css(styles.Notifications)}>
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
                                    markAsRead={() => this.markAsRead(notification.key)}
                                />
                            ))
                        )}
                    </ul>
                </div>}
            </>
        )
    }
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
};


export default Notifications

const styles = StyleSheet.create({
    Notifications: {
        padding: 10,
        // border: 5,
        border: "2px dashed red",
    }
})
