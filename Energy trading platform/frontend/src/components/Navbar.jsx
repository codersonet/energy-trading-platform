import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>About</NavItem>
        <NavItem>Pricing</NavItem>
        <NavItem>Sharing</NavItem>
        <NavItem>Community</NavItem>
        <NavItem>Terms & Conditions</NavItem>
      </NavList>
      <NavButtons>
        <Button>Login</Button>
        <Button primary>Sign Up</Button>
      </NavButtons>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  position: relative;
  z-index: 10;
`;

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 20px;
`;

const NavItem = styled.li`
  color: #fff;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #39ff14;
  }
`;

const NavButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  background: ${(props) => (props.primary ? '#39ff14' : 'transparent')};
  color: ${(props) => (props.primary ? '#000' : '#fff')};
  border: 1px solid ${(props) => (props.primary ? '#39ff14' : '#fff')};
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${(props) => (props.primary ? '#fff' : '#39ff14')};
    color: #000;
  }
`;

export default Navbar;

