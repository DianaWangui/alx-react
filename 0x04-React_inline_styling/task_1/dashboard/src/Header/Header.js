import React from 'react';
import HolbertonLogo from '../assests/HolbertonLogo.jpg'
import { StyleSheet, css } from 'aphrodite';

function Header() {
    return (
        <div className={css(styles.AppHeader)}>
            <img src={HolbertonLogo} alt='Logo' width={100} />
            <h1 className={css(styles.AppHeaderTitle)}>School dashboard</h1>
        </div>
    );
}

export default Header;

const styles = StyleSheet.create({
    AppHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '2px solid #E0354B',
        padding: 10,
    },
    AppHeaderTitle: {
        color: '#E0354B',
        fontWeight: 800
    }
})
