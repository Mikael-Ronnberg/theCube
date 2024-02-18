import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  height: 10vh;
  position: fixed;
  top: 0;
  z-index: 10;
  border-bottom: 2px solid purple;
  background-color: transparent;

  span {
    cursor: pointer;
  }
`;
