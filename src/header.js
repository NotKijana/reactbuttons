// Import react deps
import React from 'react';
import './header.css';
import Button from "./button";

// TODO: Add component for Header
// 1. Title with Burger Animation on Repeat
//     *Array of burger types
//         -6 types
//         -Cycle through types at set time
//     *Burger with alternating animations with same animation time
function Header() {
    return(
        <div className='header'>
            <Button currentClass="header_button" name='header' />
            <h1 className="header_title">amburgers</h1>
        </div>
    )
}


// 2. Export component
export default Header;