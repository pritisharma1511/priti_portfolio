import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  background: rgba(10, 25, 47, 0.85);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  z-index: 100;
`;

const Logo = styled(Link)`
  color: #64ffda;
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion(Link))`
  color: #ccd6f6;
  text-decoration: none;
  font-size: 16px;
  position: relative;

  &:hover {
    color: #64ffda;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #64ffda;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <Nav>
      <Logo to="/">Priti Sharma</Logo>
      <NavLinks>
        <NavLink 
          to="/"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Home
        </NavLink>
        <NavLink 
          to="/about"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          About
        </NavLink>
        <NavLink 
          to="/skills"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Skills
        </NavLink>
        <NavLink 
          to="/projects"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Projects
        </NavLink>
        <NavLink 
          to="/contact"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact
        </NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar; 