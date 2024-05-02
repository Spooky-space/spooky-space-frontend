import React from "react"
import styled from "styled-components"
import headerlogo from "../assets/header-logo.png"

const Logo = styled.img`
  height: 150px;
  margin-top: -40px;
  object-fit: cover;
  position: fixed;
`

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  justify-content: end;
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
    <>
      <div className="header-logo">
        <Logo src={headerlogo} alt="Logo" />
      </div>
      <div className="navbar-container">
        <nav className="navbar">
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
      </div>
    </>
  )
}

export default Header
