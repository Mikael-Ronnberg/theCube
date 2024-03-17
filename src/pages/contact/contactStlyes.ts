import styled from "styled-components";

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContactLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0.5rem;
`;

export const ContactHeading = styled.span`
  font-size: 1rem;
  padding: 0.25rem;
  color: skyblue;

  @media (min-width: 480px) {
    font-size: 0.8rem;
  }

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const ContactInput = styled.input`
  color: white;
  border-radius: 5px;
  background-color: black;
  border: 2px solid skyblue;
  padding: 5px 5px;
`;

export const ContactTextarea = styled.textarea`
  color: white;
  border-radius: 5px;
  background-color: black;
  border: 2px solid skyblue;
  padding: 5px 5px;
`;
