import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const ProjectCard = styled(motion.div)`
  background: #112240;
  border-radius: 4px;
  padding: 2rem;
  position: relative;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
`;

const FolderIcon = styled.div`
  color: #64ffda;
  font-size: 40px;
`;

const ExternalLinks = styled.div`
  display: flex;
  gap: 10px;
  
  a {
    color: #a8b2d1;
    font-size: 22px;
    
    &:hover {
      color: #64ffda;
    }
  }
`;

const ProjectTitle = styled.h3`
  color: #e6f1ff;
  font-size: 20px;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  color: #a8b2d1;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  list-style: none;
  padding: 0;
`;

const TechItem = styled.li`
  color: #64ffda;
  font-size: 14px;
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

const projectsData = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform built with MERN stack. Features include user authentication, product catalog, shopping cart, and payment integration.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    tech: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather dashboard that displays current weather conditions and forecasts for multiple cities using external API integration.',
    tech: ['React', 'OpenWeather API', 'Styled Components'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <ProjectsContainer
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Title variants={itemVariants}>Projects</Title>
      <ProjectsGrid>
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <ProjectHeader>
              <FolderIcon>📁</FolderIcon>
              <ExternalLinks>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </ExternalLinks>
            </ProjectHeader>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <TechList>
              {project.tech.map((tech, techIndex) => (
                <TechItem key={techIndex}>{tech}</TechItem>
              ))}
            </TechList>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects; 