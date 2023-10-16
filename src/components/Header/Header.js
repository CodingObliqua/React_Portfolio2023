// src/components/Header/Header.js
import React from 'react';
import styled from 'styled-components';
// import Navigation from '../Navigation/Navigation';
import theme from '../../theme'

// Create a styled component for the header
const StyledHeader = styled.header`
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.primary}; // Custom text color
  padding: 20px; // Custom padding
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  `;

  // Style the h1 element inside the header
  const Heading = styled.h1`
  font-size: 36px; // Custom font size
  `;



const Header = () => {
    return (
        <StyledHeader>
            {/* Display Name*/}
            <Heading>Andres Asencios</Heading>
            {/* <Navigation /> */}
               
        </StyledHeader>
    );
};

export default Header;