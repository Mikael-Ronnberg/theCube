import styled from "styled-components";

export const NormalHeader = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: skyblue;

  @media (min-width: 480px) {
    font-size: 2.2rem;
  }

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const ContactHeader = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: skyblue;

  @media (min-width: 480px) {
    font-size: 2.2rem;
  }

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;
