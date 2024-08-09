import React from 'react';
import { getFooterCopy, getFullYear } from '../utils/utils';

function Footer({ className }) {
    return (
        <div className={className}>
            <p>{`Copyright ${getFullYear()} - ${getFooterCopy()}`}</p>
        </div>
    );
}

export default Footer;
