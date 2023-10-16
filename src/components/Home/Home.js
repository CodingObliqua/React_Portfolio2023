import React from 'react';
import styled from 'styled-components';
import  theme  from '../../theme';

// Define a styled component for the main container
const HomeContainer = styled.section`
  background-color: ${theme.colors.secondary}; // Use theme colors
  padding: 20px;
  text-align: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;
const Heading = styled.h1`
  font-size: 36px;
`;

function Home () {
    return (
        <HomeContainer>
            <Heading>Home</Heading>
            {/* */}
        </HomeContainer>
    );
};

export default Home;