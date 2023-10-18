import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 20px;
  text-align: center;
  position: static ;
  bottom: 0;
  width: 100%;
  font-size: 18px;
`;

const SocialLinks = styled.div`
  margin-top: 10px;
`;

const Icon = styled.i`
  font-size: 24px;
  margin-right: 10px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <h3>Contact Information</h3>
      <p>Email: Andres.asencios10@gmail.com</p>
      

      <SocialLinks>
        {/* Add your social media links/icons here */}
        <a href="https://github.com/CodingObliqua" target="_blank" rel="noopener noreferrer">
          <Icon className="fa fa-github" />
        </a>
        <a href="https://www.linkedin.com/in/andres-asencios-b4715a271/" target="_blank" rel="noopener noreferrer">
          <Icon className="fa fa-linkedin" /> 
        </a>
        {/* Add more social media links/icons as needed */}
      </SocialLinks>
    </FooterContainer>
  );
};

export default Footer;