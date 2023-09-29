// src/components/Portfolio/Project.js
import React from 'react';

const Project = ({ title, description, deployedLink, githubLink }) => {
    return (
        <div className="project">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={deployedLink} target="_blank" rel="noopener noreferrer">
                Deployed App
            </a>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
                GitHub Repo
            </a>
        </div>
    );
};

export default Project;