import React from 'react';
import './resume.css';

const Resume = () => {
    return (
        <section>
            <h2 className="section-title">Resume</h2>
            <a href="/assets/RESUME.pdf" download className="resume-link">
                Download Resume
            </a>
            <h3 className="proficiencies-title">Proficiencies</h3>
            <ol className="proficiencies-list">
                <li className="proficiency">
                    <strong>MERN Stack and Web Application Development:</strong>
                    <ul className="sub-list">
                        <li>
                            My boot camp journey introduced me to the MERN (MongoDB, Express.js, React.js, Node.js) stack.
                        </li>
                        <li>
                            I've had the chance to build full-fledged web applications from scratch, keeping them user-friendly and responsive.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Model-View-Controller (MVC) and Object-Oriented Programming (OOP):</strong>
                    <ul>
                        <li>
                            When it comes to creating clean, maintainable code, the MVC pattern and OOP principles have been my guiding lights.
                        </li>
                        <li>
                            They've helped me design software that's not just functional but adaptable to evolving needs.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Application Programming Interfaces (API):</strong>
                    <ul>
                        <li>
                            I've had hands-on experience crafting and working with RESTful APIs, making sure data flows smoothly between the front-end and back-end.
                        </li>
                        <li>
                            APIs are like the bridges that connect different parts of a city, and I've been building those bridges.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Progressive Web Applications (PWAs):</strong>
                    <ul>
                        <li>
                            Progressive Web Applications (PWAs) have fascinated me because they offer a near-native app experience in a web browser.
                        </li>
                        <li>
                            I've optimized a web app for performance, responsiveness, and even offline use.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Database Management (NoSQL and SQL):</strong>
                    <ul>
                        <li>
                            Diving into NoSQL (like MongoDB) and SQL databases has been an adventure.
                        </li>
                        <li>
                            From creating efficient data storage solutions to fine-tuning queries, I've been the architect behind robust data systems.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Front-End and Back-End Development:</strong>
                    <ul>
                        <li>
                            I'm a bit of a double agent – comfortable crafting beautiful user interfaces with HTML, CSS, and React.js and diving into the nitty-gritty of server-side logic with Express.js and Node.js.
                        </li>
                        <li>
                            No front-end vs. back-end rivalry here; I enjoy both sides.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Problem Solving and Code Quality:</strong>
                    <ul>
                        <li>
                            Boot camp life has meant diving headfirst into complex coding challenges.
                        </li>
                        <li>
                            I thrive on solving problems and take pride in writing code that's not just functional but rock-solid.
                        </li>
                        <li>
                            Best practices, rigorous testing, and a keen eye for debugging – it's all in a day's work.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>New Languages I am learning:</strong>
                    <ul>
                        <li>After my boot camp, I plan on continuing my learning in Java and Python.</li>
                    </ul>
                </li>
            </ol>
        </section>
    );
};

export default Resume;