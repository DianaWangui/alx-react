import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Notification from './Notifications';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='root-notification'>
    < Notification />
    <App />
  </div>
);


reportWebVitals();
