import styled from "styled-components";

export const PanelContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 20;
  width: 70vw;
  height: 85svh;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
  transition: transform 0.6s ease;

  --aug-border-bg: radial-gradient(at top center, pink 25%, transparent 50%),
    skyblue 50% 50% / 100% 100%;

  --aug-border-all: 2px;
  --aug-border-right: 0%;
  --aug-border-bottom: 0%;
  &.active {
    transform: translateX(0%);
  }
  &.inactive {
    transform: translateX(110%);
  }
  @media (min-width: 480px) {
    width: 65vw;
  }
  @media (min-width: 768px) {
    width: 55vw;
  }
  @media (min-width: 992px) {
    width: 50vw;
  }
`;
