import styled from "styled-components";

export const MainContainer = styled.div`
  width: auto;
  height: auto;
  border: "2px solid white";
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

export const ContactHeaderContainer = styled.div`
  width: 42%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  border: 1px solid skyblue;
  padding: 10px 55px;
  top: 49px;
  --aug-border-all: 1px;
  --aug-br: 25px;
  --aug-bl: 30px;

  @media (min-width: 480px) {
    width: 38%;
    font-size: 2.2rem;
    top: 63px;
    --aug-br: 25px;
    --aug-bl: 25px;
  }

  @media (min-width: 768px) {
    width: 40%;
    font-size: 3rem;
    top: 78px;
    --aug-br: 40px;
    --aug-bl: 40px;
  }
`;
