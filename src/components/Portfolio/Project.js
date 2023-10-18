// src/components/Portfolio/Project.js
import React from 'react';
import styled from 'styled-components';

// Create a styled component for the Project container
const ProjectContainer = styled.div`
  background-color: #f0f0f0; // Custom background color
  padding: 10px;
  margin: 20px;
  border: 1px solid #ccc; // Custom border
  border-radius: 5px; // Rounded corners
`;
// Style the elements inside the Project container
const Title = styled.h3`
color: #007bfg;
`;
const Description = styled.p`
font-style: italic; // Italic text
`;
const Link = styled.a`
text-decoration: none; // remove underlines from links
margin-right: 10px; // Add spacing between links
color: #e10404; // Custom link color
`;

const Project = ({ title, description, deployedLink, githubLink, imageSrc }) => {
    return (
      <ProjectContainer>
        <Title>{title}</Title>
        <img src={imageSrc} alt={title} />
        <Description>{description}</Description>
        <Link href={deployedLink} target="_blank" rel="noopener noreferrer">
          Deployed Link
        </Link>
        <Link href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub Link
        </Link>
      </ProjectContainer>
    );
  };

export default Project;