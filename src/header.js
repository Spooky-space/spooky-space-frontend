import React from "react"
import styled from "styled-components"
import headerlogo from "./assets/header-logo.png"

const NavbarContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 10px;
  background: linear-gradient(
    to bottom,
    rgba(128, 128, 128, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
`

const Logo = styled.img`
  height: 20vh;
  margin-top: -35px;
`

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  margin: 0 0 0 auto;
  padding: 0;
`

const NavLinkItem = styled.li`
  padding: 20px 20px 0 20px;
`

const StyledNavLink = styled.a`
  background-color: red;
  color: white;
  text-decoration: none;
  font-family: "Creepster", cursive;
  font-size: 20px;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: darkred;
  }
`
const Spacer = styled.div`
  flex-grow: 1; // Takes up all available space
`

const Header = () => {
  return (
    <NavbarContainer>
      <div className="logo">
        <Logo src={headerlogo} alt="Logo" />
      </div>
      <nav>
        <NavLinks>
          <NavLinkItem>
            <StyledNavLink href="#home">MOVIES</StyledNavLink>
          </NavLinkItem>
          <NavLinkItem>
            <StyledNavLink href="#about">SERIES</StyledNavLink>
          </NavLinkItem>
          <NavLinkItem>
            <StyledNavLink href="#services">MYFLIX</StyledNavLink>
          </NavLinkItem>
          <NavLinkItem>
            <StyledNavLink href="#contact">RIP</StyledNavLink>
          </NavLinkItem>
        </NavLinks>
      </nav>
    </NavbarContainer>
  )
}

export default Header
