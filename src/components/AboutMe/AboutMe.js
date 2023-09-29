// src/components/AboutMe/AboutMe.js
import React from 'react';
import styled from 'styled-components';

const AboutMeContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
    color:white;
    padding: 20px;
    `;
const Heading = styled.h2`
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 24px;
    `;    

function AboutMe () {
    return (
        <AboutMeContainer>
            <Heading>About Me</Heading>
            {/* */}
        </AboutMeContainer>
    );
}

export default AboutMe;