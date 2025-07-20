import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 20px;
  text-align: center;
`;

const Title = styled(motion.h2)`
  color: #64ffda;
  font-size: 16px;
  margin-bottom: 20px;
`;

const BigText = styled(motion.h3)`
  color: #ccd6f6;
  font-size: 60px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const Description = styled(motion.p)`
  color: #8892b0;
  font-size: 20px;
  max-width: 600px;
  margin-bottom: 50px;
  line-height: 1.6;
`;

const ContactInfo = styled(motion.div)`
  color: #8892b0;
  font-size: 18px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
  i {
    color: #64ffda;
    font-size: 20px;
  }
  
  a {
    color: #8892b0;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #64ffda;
    }
  }
`;

const ContactButton = styled(motion.a)`
  background: transparent;
  color: #64ffda;
  border: 1px solid #64ffda;
  border-radius: 4px;
  padding: 20px 28px;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  margin-bottom: 50px;
  
  &:hover {
    background: rgba(100, 255, 218, 0.1);
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 20px;
  margin-top: 30px;
`;

const SocialLink = styled(motion.a)`
  color: #a8b2d1;
  font-size: 24px;
  padding: 10px;
  
  &:hover {
    color: #64ffda;
    transform: translateY(-3px);
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

const Contact = () => {
  return (
    <ContactContainer
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Title variants={itemVariants}>What's Next?</Title>
      <BigText variants={itemVariants}>Get In Touch</BigText>
      <Description variants={itemVariants}>
        I'm currently looking for new opportunities. Whether you have a question or
        just want to say hi, I'll try my best to get back to you!
      </Description>
      <ContactInfo variants={itemVariants}>
        <ContactItem>
          <i className="fas fa-user"></i>
          <span>Priti Sharma</span>
        </ContactItem>
        <ContactItem>
          <i className="fas fa-phone"></i>
          <a href="tel:+918080214223">+91 8080214223</a>
        </ContactItem>
        <ContactItem>
          <i className="fas fa-envelope"></i>
          <a href="mailto:ps0130815@gmail.com">ps0130815@gmail.com</a>
        </ContactItem>
      </ContactInfo>
      <ContactButton
        href="mailto:ps0130815@gmail.com"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
         Hello
      </ContactButton>
      <SocialLinks variants={itemVariants}>
        <SocialLink
          href="https://github.com/pritisharma1511"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -3 }}
        >
          <i className="fab fa-github"></i>
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/in/priti-sharma-406532294"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -3 }}
        >
          <i className="fab fa-linkedin"></i>
        </SocialLink>
        <SocialLink
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -3 }}
        >
          <i className="fab fa-twitter"></i>
        </SocialLink>
      </SocialLinks>
    </ContactContainer>
  );
};

export default Contact; 