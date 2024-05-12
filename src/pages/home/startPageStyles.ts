import styled from "styled-components";

export const HomeHeading = styled.h1`
  font-weight: bold;
  font-size: 5rem;
  /* margin-bottom: 3rem; */

  @media (min-width: 480px) {
    font-size: 7rem;
  }
  @media (min-width: 768px) {
    font-size: 9rem;
  }
`;

export const Developer = styled.span`
  color: skyblue;
`;

export const HomeSubText = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  .block {
    display: hidden;
  }

  @media (min-width: 480px) {
    .block {
      display: block;
    }
  }

  @media (min-width: 768px) {
  }
`;
