import React from 'react'

export function getFullYear() {
    const currentDate = new Date();
    return currentDate.getFullYear();
}

export function getFooterCopy(isIndex) {
    if (isIndex === true) {
        return 'Holberton School'
    } else {
        return 'Holberton School main dashboard'
    }
}

export const getLatestNotification = () => {
    return '<strong>Urgent requirement</strong> - complete by EOD'
}
