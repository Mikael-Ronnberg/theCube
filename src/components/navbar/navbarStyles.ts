import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  height: 10svh;
  position: fixed;
  top: 0;
  z-index: 10;
  border-bottom: 2px solid skyblue;
  backdrop-filter: blur(2px);
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 10px 1px skyblue;

  span {
    cursor: pointer;
  }
`;
