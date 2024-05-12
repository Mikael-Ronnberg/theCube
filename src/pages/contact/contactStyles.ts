import styled from "styled-components";

export const ContactOuterLayer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 1rem;
  width: 95%;
  height: 75svh;
  overflow: hidden;

  --aug-tr: 7px;
  --aug-tl: 7px;
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

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80svh;
  padding: 1.5rem;
  overflow: auto;
`;

export const ContactLabel = styled.label`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 0.6rem;
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
  max-width: 450px;
  border-radius: 3px;
  background-color: black;
  border: 1px solid skyblue;

  &:focus {
    outline: none;
  }
  @media (min-width: 480px) {
    width: 48vw;
  }
`;

export const ContactTextarea = styled.textarea`
  color: white;
  border-radius: 3px;
  background-color: black;
  border: 1px solid skyblue;
  padding: 5px 5px;
  width: 50vw;
  max-width: 450px;
  &:focus {
    outline: none;
    border-color: white;
    box-shadow: 0 0 5px white;
  }
  @media (min-width: 480px) {
    width: 48vw;
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
  max-width: 450px;
  @media (min-width: 480px) {
    width: 48vw;
  }
`;
