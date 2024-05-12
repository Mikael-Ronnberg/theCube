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

  --aug-bl-extend2: 2%;
  --aug-br-extend2: 2%;
  --aug-b-extend1: 20%;
  --aug-b: 5px;
  --aug-bl: 10px;
  --aug-br: 10px;

  --aug-border-all: 2px;
  --aug-border-top: 0%;
  --aug-border-right: 0%;
  --aug-border-left: 0%;
  --aug-border-bg: radial-gradient(at bottom right, pink 25%, transparent 50%),
    skyblue 50% 50% / 100% 100%;

  span {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    --aug-border-bg: radial-gradient(
        at bottom center,
        pink 25%,
        transparent 50%
      ),
      skyblue 50% 50% / 100% 100%;
  }
`;
