import styled from "styled-components";

export const AboutTextContainer = styled.div`
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const AboutNormalText = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  margin-left: 2rem;

  @media (min-width: 480px) {
    max-width: 700px;
    font-size: 1.2rem;
    margin-bottom: 1.4rem;
    margin-left: 3rem;
  }

  @media (min-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 1.2rem;
    margin-left: 6rem;
  }
`;
