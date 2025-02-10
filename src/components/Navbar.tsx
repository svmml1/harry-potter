import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 15px;
  display: flex;
  justify-content: center;
  gap: 20px;
  position: relative;
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  position: relative;

  &:hover {
    text-decoration: underline;
  }
`;

const DropdownWrapper = styled.div`
  position: relative;
`;

const DropdownButton = styled.div`
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    text-decoration: underline;
  }
`;

const DropdownContent = styled.div<{ $isOpen: boolean }>`
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  min-width: 160px;
  z-index: 1;
  border-radius: 5px;
`;

const DropdownItem = styled(Link)`
  display: block;
  padding: 10px;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  text-align: left;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/characters">Characters</NavLink>
      <NavLink to="/students">Students</NavLink>
      <NavLink to="/staff">Staff</NavLink>
      <NavLink to="/spells">Spells</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>

      <DropdownWrapper>
        <DropdownButton onClick={() => setIsOpen(!isOpen)}>Houses ▼</DropdownButton>
        <DropdownContent $isOpen={isOpen}>
          <DropdownItem to="/houses/gryffindor">Gryffindor</DropdownItem>
          <DropdownItem to="/houses/slytherin">Slytherin</DropdownItem>
          <DropdownItem to="/houses/hufflepuff">Hufflepuff</DropdownItem>
          <DropdownItem to="/houses/ravenclaw">Ravenclaw</DropdownItem>
        </DropdownContent>
      </DropdownWrapper>
    </Nav>
  );
};

export default Navbar;