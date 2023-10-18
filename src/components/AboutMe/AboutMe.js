import React from 'react';
import styled from 'styled-components';
import profileImage from '../../assets/picture_of_me.JPG';
import { FaLaptopCode, FaCode, FaMobile, FaDatabase, FaRegSmile, FaJava, FaPython } from 'react-icons/fa';

const AboutMeContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 20px;
`;

const Heading = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 24px;
`;

const Image = styled.img`
  max-width: 50%;
  height: auto;
`;

const ProficienciesList = styled.ul`
  list-style: none;
`;

const Proficiency = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ProficiencyIcon = styled.span`
  font-size: 24px;
  margin-right: 10px;
`;

function AboutMe() {
    return (
      <AboutMeContainer>
        <Heading>About Me</Heading>
        <Image src={profileImage} alt="Andres" />
        <ProficienciesList>
          <Proficiency>
            <ProficiencyIcon><FaLaptopCode /></ProficiencyIcon>
            MERN Stack Web Development:
            My boot camp journey introduced me to the MERN (MongoDB, Express.js, React.js, Node.js) stack. I've built user-friendly and responsive web applications from scratch, turning code into real web solutions.
          </Proficiency>
          <Proficiency>
            <ProficiencyIcon><FaCode /></ProficiencyIcon>
            Clean Code and Design:
            I follow the MVC pattern and OOP principles to create clean, maintainable, and adaptable software.
          </Proficiency>
          <Proficiency>
            <ProficiencyIcon><FaCode /></ProficiencyIcon>
            API Development:
            I have hands-on experience crafting RESTful APIs that ensure smooth data flow between the front-end and back-end.
          </Proficiency>
          <Proficiency>
            <ProficiencyIcon><FaMobile /></ProficiencyIcon>
            Progressive Web Applications (PWAs):
            I've optimized web apps for performance, responsiveness, and offline use, providing a near-native app experience in web browsers.
          </Proficiency>
          <Proficiency>
            <ProficiencyIcon><FaDatabase /></ProficiencyIcon>
            Database Management (NoSQL and SQL):
            I've architected efficient data storage solutions and fine-tuned queries for both NoSQL (e.g., MongoDB) and SQL databases.
          </Proficiency>
          <Proficiency>
            <ProficiencyIcon><FaRegSmile /></ProficiencyIcon>
            Full-Stack Development:
            Proficient in crafting beautiful user interfaces with HTML, CSS, and React.js, while also delving into server-side logic with Express.js and Node.js. I enjoy both front-end and back-end development.
          </Proficiency>
          <Proficiency>
            <ProficiencyIcon><FaCode /></ProficiencyIcon>
            Problem Solving and Code Quality:
            I excel at tackling complex coding challenges and writing rock-solid, best-practice code with rigorous testing and a keen eye for debugging.
          </Proficiency>
          <Proficiency>
            <ProficiencyIcon><FaJava /></ProficiencyIcon>
            Ongoing Learning (Java):
            I'm continuously expanding my skills and knowledge, currently focusing on Java.
          </Proficiency>
          <Proficiency>
            <ProficiencyIcon><FaPython /></ProficiencyIcon>
            Ongoing Learning (Python):
            I'm continuously expanding my skills and knowledge, currently focusing on Python.
          </Proficiency>
        </ProficienciesList>
      </AboutMeContainer>
    );
  }

export default AboutMe;