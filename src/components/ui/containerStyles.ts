import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //overflow: hidden;
  /* margin-left: 2rem; */
  padding: 0 2rem;

  @media (min-width: 480px) {
  }
  @media (min-width: 768px) {
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 3rem;

  @media (min-width: 480px) {
    margin: 0 4rem;
  }
  @media (min-width: 768px) {
    margin: 0 2rem;
  }
`;

export const ServiceCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (min-width: 480px) {
  }
  @media (min-width: 768px) {
    margin-top: -3rem;
  }
  @media (min-width: 992px) {
    margin-top: 0;
  }
`;

export const ProjectsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;
  }
`;

export const DisplayContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 1rem;
  margin: 1rem;
  width: 95%;
  height: 84%;

  --aug-tr: 7px;
  --aug-tl: 10px;
  --aug-t: 5px;

  --aug-br: 10px;
  --aug-bl: 10px;
  --aug-b: 5px;

  --aug-t-extend1: 30%;
  --aug-b-extend1: 30%;
  --aug-border-all: 1px;
  --aug-border-bg: white;

  --aug-inlay-all: 16px;
  --aug-inlay-bg: radial-gradient(at top right, pink 25%, black 75%);
  --aug-inlay-opacity: 0.1;
  --aug-border-opacity: 0.4;

  @media (min-width: 768px) {
    --aug-inlay-bg: radial-gradient(at top center, pink 25%, black 75%);
  }
  @media (min-width: 992px) {
    --aug-inlay-bg: radial-gradient(at top left, pink 25%, black 75%);
  }
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
