import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px 150px;
  
  @media (max-width: 768px) {
    padding: 100px 20px;
  }
`;

const Title = styled(motion.h2)`
  color: #ccd6f6;
  font-size: 32px;
  margin-bottom: 40px;
  
  &:after {
    content: '';
    display: block;
    width: 300px;
    height: 1px;
    background: #233554;
    margin-top: 10px;
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 50px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutText = styled(motion.div)`
  color: #8892b0;
  font-size: 18px;
  line-height: 1.6;
  
  p {
    margin-bottom: 20px;
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    width: 100%;
    height: 100%;
    border: 2px solid #64ffda;
    border-radius: 4px;
    z-index: -1;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  border-radius: 4px;
  filter: grayscale(100%);
  transition: filter 0.3s ease;
  
  &:hover {
    filter: none;
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const About = () => {
  return (
    <AboutContainer
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Title variants={itemVariants}>About Me</Title>
      <ContentWrapper>
        <AboutText variants={itemVariants}>
          <p>
            Hello! I'm Priti, a passionate full-stack developer based in India. I enjoy creating
            things that live on the internet, whether that be websites, applications, or
            anything in between.
          </p>
          <p>
            I'm currently pursuing my degree at DY Patil College, where I've honed my skills
            in web development and software engineering. My main focus these days is building
            accessible, inclusive products and digital experiences.
          </p>
          <p>
            Here are a few technologies I've been working with recently:
          </p>
          <ul>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Java</li>
            <li>MongoDB</li>
            <li>RESTful APIs</li>
          </ul>
        </AboutText>
        <ImageContainer variants={itemVariants}>
          <ProfileImage src="/photo.jpg" alt="Priti Sharma" />
        </ImageContainer>
      </ContentWrapper>
    </AboutContainer>
  );
};

export default About; 