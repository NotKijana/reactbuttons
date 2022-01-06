// Import react deps
import React from 'react';
import './Header.css';
import Button from '../Button/Button';

function Header() {
    return(
        <div className='header'>
            <Button currentClass="header_button open" name='header' />
            <h1 className="header_title">amburgers</h1>
        </div>
    )
}


// 2. Export component
export default Header;