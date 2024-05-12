import styled from "styled-components";

export const HomeHeading = styled.h1`
  font-weight: bold;
  font-size: 3rem;
  margin-left: 4rem;
  /* margin-bottom: 3rem; */

  @media (min-width: 480px) {
    font-size: 5rem;
    margin-left: 4.5rem;
  }
  @media (min-width: 768px) {
    font-size: 8rem;
    margin-left: 5rem;
  }
`;

export const Developer = styled.span`
  color: skyblue;
`;

export const HomeSubText = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  margin-left: 4rem;
  .block {
    display: hidden;
  }

  @media (min-width: 480px) {
    margin-left: 4.5rem;
    .block {
      display: block;
    }
  }

  @media (min-width: 768px) {
    margin-left: 5rem;
  }
`;
