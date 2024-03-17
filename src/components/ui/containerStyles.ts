import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ServiceCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: inherit;
`;

export const ProjectsContainer = styled.div`
  width: inherit;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
  }
`;

export const DisplayContainer = styled.div`
  width: inherit;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
