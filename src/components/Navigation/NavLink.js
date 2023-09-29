// src/components/Navigation/NavLink.js
import React from 'react';

const NavLink = ({ to, children }) => {
    return (
    <li>
        <a href={to}>{children}</a>
    </li>
    );
};

export default NavLink;