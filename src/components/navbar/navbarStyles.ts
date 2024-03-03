import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  height: 10dvh;
  position: fixed;
  top: 0;
  z-index: 10;

  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0.1px 5px 0.1px skyblue;

  span {
    cursor: pointer;
  }
`;
