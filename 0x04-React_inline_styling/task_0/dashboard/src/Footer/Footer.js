import React from 'react';
import { getFooterCopy, getFullYear } from '../utils/utils';
import './Footer.css';

function Header() {
    return (
        <div className='App-footer'>
            <p>{`Copyright ${getFullYear()} - ${getFooterCopy()}`}</p>
        </div>
    );
}

export default Header;
