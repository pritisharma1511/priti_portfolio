import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 150px;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Greeting = styled(motion.p)`
  color: #64ffda;
  font-size: 16px;
  margin-bottom: 20px;
`;

const Name = styled(motion.h1)`
  color: #ccd6f6;
  font-size: 80px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const Title = styled(motion.h2)`
  color: #8892b0;
  font-size: 60px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const Description = styled(motion.p)`
  color: #8892b0;
  font-size: 20px;
  max-width: 600px;
  line-height: 1.5;
  margin-bottom: 30px;
`;

const Button = styled(motion.a)`
  background: transparent;
  color: #64ffda;
  border: 1px solid #64ffda;
  border-radius: 4px;
  padding: 15px 30px;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  
  &:hover {
    background: rgba(100, 255, 218, 0.1);
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

const Home = () => {
  return (
    <HomeContainer
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Greeting variants={itemVariants}>Hi, my name is</Greeting>
      <Name variants={itemVariants}>Priti Sharma</Name>
      <Title variants={itemVariants}>Full Stack Developer</Title>
      <Description variants={itemVariants}>
        I'm a full stack developer specializing in building exceptional digital experiences
        using the MERN stack. Currently, I'm focused on building accessible, human-centered
        products at DY Patil College.
      </Description>
      <Button
        as={motion.a}
        href="#projects"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Check out my work!
      </Button>
    </HomeContainer>
  );
};

export default Home; 