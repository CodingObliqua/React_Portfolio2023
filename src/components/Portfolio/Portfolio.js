// src/components/Portfolio/Portfolio.js
import React from 'react';
import styled from 'styled-components';
import  theme  from '../../theme'
import Project from './Project';

// Define a styled component for the main container
const PortfolioContainer = styled.section`
background-color: ${theme.colors.secondary};
padding: 20px;
text-align: center;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;

// Define a styled component for the section title
const SectionTitle = styled.h2`
font-family: ${theme.fonts.heading};
font-size: 24px;
color: ${theme.colors.primary};
margin-bottom: 20px;
`;

const Portfolio = () => {
    const projects = [
        {
            title: "HTML CSS Portfolio",
            description: "This is my 2023 portfolio made using HTML and CSS!",
            deployedLink: "https://github.com/CodingObliqua/Portfolio-2023",
            githubLink: "https://codingobliqua.github.io/Portfolio-2023/",
        },
        {
            title: "JavaScript HTML CSS Project (Server-side API)",
            description: "I worked in a group to build a Interactive Front-End project/server-side APIs! ",
            deployedLink: "https://codingobliqua.github.io/BerkeleyRacingClub/",
            githubLink: "https://github.com/CodingObliqua/BerkeleyRacingClub",
        },
        {
            title: "Project 2",
            description: "Created a project to utilized CRUD routes and Login Authorization ",
            deployedLink: "https://horse-creator-app-9839a5a7a948.herokuapp.com/",
            githubLink: "https://github.com/CodingObliqua/Horse_creator",
        },
        {
            title: "React Portfolio",
            description: "Developed a portfolio utilizing React ",
            deployedLink: "https://codingobliqua.github.io/React_Portfolio2023/",
            githubLink: "https://github.com/CodingObliqua/React_Portfolio2023",
        },
        {
            title: "Timed Quiz (HTML,CSS,JS)",
            description: "Developed an Art gallery app using MERN stack ",
            deployedLink: "https://codingobliqua.github.io/fuzzy-winner/",
            githubLink: "https://github.com/CodingObliqua/fuzzy-winner",
        },
        {
            title: "Project 3",
            description: "Developed an Art gallery app using MERN stack ",
            deployedLink: "https://codingobliqua.github.io/BerkeleyRacingClub/",
            githubLink: "https://github.com/CodingObliqua/BerkeleyRacingClub",
        },



    ];

    return (
        <PortfolioContainer>
        <SectionTitle>Portfolio</SectionTitle>
        <div className="project-list">
            {projects.map((project, index) => (
                <Project
                key={index}
                title={project.title}
                description={project.description}
                deployedLink={project.deployedLink}
                githubLink={project.githubLink}
                />
            ))}
        </div>
        </PortfolioContainer>
    );
};

export default Portfolio;