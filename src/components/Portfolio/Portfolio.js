// src/components/Portfolio/Portfolio.js
import React from 'react';
import Project from './Project';

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

    ];

    return (
    <section>
        <h2>Portfolio</h2>
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
    </section>
    );
};

export default Portfolio;