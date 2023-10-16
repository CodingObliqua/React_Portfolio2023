// src/components/Navigation/Navigation.js
import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';
// import { Link } from 'react-router-dom'; // Import Link from React Router



const NavLinks = styled.nav`
ul {
  list-style: none;
  background-color: ${theme.colors.secondary};
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center; //
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
}

li {
  margin: 0 20px; // Add spacing between links
}

a {
  text-decoration: none; // remove underlines from links
  
  color: ${theme.colors.primary};
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
}
`;

const Navigation = () => {
    return (
        <NavLinks>
            <ul>
                {/*Use Link components for navigation */}
                <li>
                    <a href="/">
                        <i className='fa fa-home'/>Home
                        </a>
                </li>
                <li>
                    <a href="/portfolio">
                        <i className='fa fa-folder'/>Portfolio
                        </a>
                </li>
                <li>
                    <a href="/contact">
                        <i className='fa fa-envelope'/>Contact
                        </a>
                </li>
                <li>
                    <a href="/resume">
                        <i className='fa fa-file' />Resume
                        </a>
                </li>
                <li>
                    <a href="/aboutMe">
                        <i className='fa fa-user' />About Me
                        </a>
                </li>
            </ul>
        </NavLinks>
    );
};

export default Navigation;