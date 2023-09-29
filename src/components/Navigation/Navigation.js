// src/components/Navigation/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Navigation = () => {
    return (
        <nav>
            <ul>
                {/*Use Link components for navigation */}
                <li>
                    <Link to="/">About Me</Link>
                </li>
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/resume">Resume</Link>
                </li>
                <li>
                    <Link to="/">RandomLink</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;