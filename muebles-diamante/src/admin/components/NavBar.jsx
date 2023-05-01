import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DivNav = styled.div`
`;

const Nav = styled.nav`
  margin: 10px 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.input`
  border-radius: 5px;
`;

const Links = styled.ul`
  list-style: none;
  display: flex;

  align-items: center;
`;

const SearchInput = styled.div`
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  border-radius: 5px;
  border: none;
`;

export const NavBar = () => {
  return (
    <>
      <div className="shadow">
        <DivNav>
          <Nav>
            <SearchInput>
              <Input type="text" placeholder="Buscar" />

              <Button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-search"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="#00abfb"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="10" cy="10" r="7" />
                  <line x1="21" y1="21" x2="15" y2="15" />
                </svg>
              </Button>
            </SearchInput>

            <Links>
              <li>
                <Link>Sobre Nosotros</Link>
              </li>

              <li>
                <Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-bell"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    strokeWidth="1"
                    stroke="#00abfb"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                    <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                  </svg>
                </Link>
              </li>
            </Links>
          </Nav>
        </DivNav>
      </div>
    </>
  );
};
