import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillsContainer = styled.div`
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const SkillCategory = styled(motion.div)`
  background: #112240;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
`;

const CategoryTitle = styled.h3`
  color: #64ffda;
  font-size: 20px;
  margin-bottom: 20px;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SkillItem = styled(motion.li)`
  color: #8892b0;
  font-size: 16px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  
  &:before {
    content: '▹';
    color: #64ffda;
    margin-right: 10px;
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

const skillsData = [
  {
    category: 'Frontend Development',
    skills: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Styled Components', 'Redux', 'Responsive Design'],
  },
  {
    category: 'Backend Development',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'RESTful APIs', 'Authentication & Authorization', 'Database Design'],
  },
  {
    category: 'Tools & Technologies',
    skills: ['Git & GitHub', 'VS Code', 'Postman', 'npm/yarn', 'Webpack', 'Chrome DevTools'],
  },
  {
    category: 'Soft Skills',
    skills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Time Management', 'Adaptability'],
  },
];

const Skills = () => {
  return (
    <SkillsContainer
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Title variants={itemVariants}>Skills</Title>
      <SkillsGrid>
        {skillsData.map((category, index) => (
          <SkillCategory
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <CategoryTitle>{category.category}</CategoryTitle>
            <SkillsList>
              {category.skills.map((skill, skillIndex) => (
                <SkillItem
                  key={skillIndex}
                  variants={itemVariants}
                >
                  {skill}
                </SkillItem>
              ))}
            </SkillsList>
          </SkillCategory>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  );
};

export default Skills; 