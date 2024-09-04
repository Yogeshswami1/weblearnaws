import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 1rem 2rem;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  text-align: center;
  width: 100%;
  margin-bottom: 1rem;
`;

const Heading = styled.h1`
  margin: 0;
  font-size: 24px;
  color: black;
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 40px;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    display: ${props => (props.show ? 'flex' : 'none')};
    gap: 1rem; /* Gap between nav links on mobile */
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 18px;
  padding: 10px 15px;
  border-radius: 8px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
    color: red;
  }
`;

const ToggleButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`;

const Navbar = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);

  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };

  return (
    <>
      <NavbarContainer>
        <Header>
          <Heading>WEBSITE TRAINING</Heading>
        </Header>
        <NavbarContent>
          <Logo>
            <LogoImage src="https://saumiccraft.com/wp-content/uploads/2024/06/S-C-Logo.png" alt="Logo" />
          </Logo>
          <ToggleButton onClick={toggleNavLinks} style={{ marginTop: "3rem" }}>
            ☰
          </ToggleButton>
        </NavbarContent>
        <NavLinks show={showNavLinks}>
          <NavLink to="/" onClick={toggleNavLinks}>Home</NavLink>
          <NavLink to="/about" onClick={toggleNavLinks}>Social Media Content</NavLink>
          <NavLink to="/regular" onClick={toggleNavLinks}>Plugins</NavLink>
          <NavLink to="/regularupdates" onClick={toggleNavLinks}>Regular Updates</NavLink>
        </NavLinks>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
