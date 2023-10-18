// src/components/Portfolio/Portfolio.js
import React from 'react';
import styled from 'styled-components';
import  theme  from '../../theme'
import Project from './Project';

// Define a styled component for the main container
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
`;

const PortfolioContainer = styled.section`
  background-color: ${theme.colors.secondary};
  padding: 20px;
  text-align: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;

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
            imageSrc: require("../../assets/html_port.JPG"),
        },
        {
            title: "JavaScript HTML CSS Project (Server-side API)",
            description: "I worked in a group to build a Interactive Front-End project/server-side APIs! ",
            deployedLink: "https://codingobliqua.github.io/BerkeleyRacingClub/",
            githubLink: "https://github.com/CodingObliqua/BerkeleyRacingClub",
            imageSrc: require("../../assets/berkeley_racing.JPG"),
        },
        {
            title: "Project 2",
            description: "Created a project to utilized CRUD routes and Login Authorization ",
            deployedLink: "https://horse-creator-app-9839a5a7a948.herokuapp.com/",
            githubLink: "https://github.com/CodingObliqua/Horse_creator",
            imageSrc: require("../../assets/horse_creat.JPG"),
        },
        {
            title: "React Portfolio",
            description: "Developed a portfolio utilizing React ",
            deployedLink: "https://codingobliqua.github.io/React_Portfolio2023/",
            githubLink: "https://github.com/CodingObliqua/React_Portfolio2023",
            imageSrc: require("../../assets/react_port.JPG"),
        },
        {
            title: "Timed Quiz (HTML,CSS,JS)",
            description: "Developed an Art gallery app using MERN stack ",
            deployedLink: "https://codingobliqua.github.io/fuzzy-winner/",
            githubLink: "https://github.com/CodingObliqua/fuzzy-winner",
            imageSrc: require("../../assets/js_quiz.JPG"),
        },
        {
            title: "Project 3",
            description: "Developed an Art gallery app using MERN stack ",
            deployedLink: "https://codingobliqua.github.io/BerkeleyRacingClub/",
            githubLink: "https://github.com/CodingObliqua/BerkeleyRacingClub",
            imageSrc: require("../../assets/fish.jpg"),
        },



    ];

    return (
     <PageContainer>
       <MainContent>
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
                imageSrc={project.imageSrc}
                />
            ))}
        </div>
        </PortfolioContainer>
       </MainContent>
     </PageContainer>
    );
};

export default Portfolio;