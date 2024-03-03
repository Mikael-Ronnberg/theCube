import styled from "styled-components";

export const PanelContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 20;
  width: 50vw;
  height: 85vh;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
  transition: transform 0.6s ease;
  border-radius: 2%;
  box-shadow: 0px 5px 5px 0px skyblue;

  &.active {
    transform: translateX(0%);
  }

  &.inactive {
    transform: translateX(110%);
  }

  @media (max-width: 768px) {
    height: 85vh;
    width: 60vw;
  }

  @media (max-width: 480px) {
    height: 85vh;
    width: 62vw;
  }
`;
