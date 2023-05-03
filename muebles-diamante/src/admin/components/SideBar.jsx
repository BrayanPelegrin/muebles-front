import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Aside = styled.aside`
  background-color: #202123;
  
  height: 100vh;
  width: 250px;
  
  
`;

const StyledLinkLogo = styled(Link)`
  padding-top: 50px;
  margin-bottom: 30px;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;

  margin-bottom: 70px;
`;

export const SideBar = () => {
  return (
    <Aside>
      <StyledNav>
        <StyledLinkLogo to="">
          <Logo>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-diamond"
              width="100"
              height="100"
              viewBox="0 0 24 24"
              strokeWidth="0.5"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 5h12l3 5l-8.5 9.5a0.7 .7 0 0 1 -1 0l-8.5 -9.5l3 -5" />
              <path d="M10 12l-2 -2.2l.6 -1" />
            </svg>
          </Logo>
        </StyledLinkLogo>

        <StyledLink to="products">Productos</StyledLink>

        <StyledLink to="">Lorem Ipsum</StyledLink>

        <StyledLink to="">Lorem Ipsum</StyledLink>

        <StyledLink to="">Lorem Ipsum</StyledLink>

        <StyledLink to="">Lorem Ipsum</StyledLink>
      </StyledNav>
    </Aside>
  );
};
