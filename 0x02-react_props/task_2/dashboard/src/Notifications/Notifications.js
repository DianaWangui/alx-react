import React from 'react';
import './Notifications.css';
import {getLatestNotification} from '../utils/utils';
import closeIcon from './close-icon.png';
import NotificationItem from './NotificationItem';

function Notifications() {
  return (
    <>
      <div className="Notifications">
        <p>Here is the list of notifications</p>
        <button style={{
          float: 'right',
          marginTop: '-50px',
          backgroundColor: '#fff',
          border: 'none',
        }} aria-label='Close'>
          <img src={closeIcon} alt='close' />
        </button>
        <ul>
          <NotificationItem type="default" value="New course available" />
          <NotificationItem type="urgent" value="New resume available" />
          <NotificationItem type="urgent" html={getLatestNotification()} />
      </ul>
      </div>
    </>
  );
};

export default Notifications;