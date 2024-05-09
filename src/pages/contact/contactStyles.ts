import styled from "styled-components";

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  --aug-border-all: 1px;
  --aug-border-bg: radial-gradient(at top right, pink 25%, transparent 50%),
    skyblue 50% 50% / 100% 100%;
`;

export const ContactLabel = styled.label`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 0.6rem;
  --aug-border-all: 1px;
  --aug-tl: 5px;
  --aug-tr: 35px;
  --aug-inlay-all: 6px;
  --aug-inlay-bg: radial-gradient(at top right, pink 1%, transparent 90%),
    black 80%;
`;

export const ContactHeading = styled.span`
  font-size: 1.1rem;
  padding: 0.25rem;
  color: white;

  @media (min-width: 480px) {
    font-size: 1.2rem;
  }

  @media (min-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const ContactInput = styled.input`
  color: white;
  padding: 5px 5px;
  width: 50vw;
  border-radius: 5px;
  background-color: black;
  border: 2px solid skyblue;

  &:focus {
    outline: none;
  }
  @media (min-width: 480px) {
    width: 48vw;
  }
  @media (min-width: 768px) {
    width: 300px;
  }
`;

export const ContactTextarea = styled.textarea`
  color: white;
  border-radius: 5px;
  background-color: black;
  border: 2px solid skyblue;
  padding: 5px 5px;
  width: 50vw;
  &:focus {
    outline: none;
    border-color: white;
    box-shadow: 0 0 5px white;
  }
  @media (min-width: 480px) {
    width: 48vw;
  }

  @media (min-width: 768px) {
    width: 300px;
  }
`;

export const ContactButton = styled.button`
  color: white;
  border-radius: 5px;
  background-color: black;
  border: 2px solid skyblue;
  padding: 10px 20px;
  margin: 0.6rem;
  cursor: pointer;
  width: 50vw;
  @media (min-width: 480px) {
    width: 48vw;
  }

  @media (min-width: 768px) {
    width: 300px;
  }
`;
