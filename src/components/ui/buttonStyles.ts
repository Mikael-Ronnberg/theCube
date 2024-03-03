import styled from "styled-components";

interface NormalButtonProps {
  onClick?: () => void;
}

export const NormalButton = styled.button<NormalButtonProps>`
  color: white;
  border-radius: 5px;
  background-color: black;
  border: 2px solid skyblue;
  padding: 10px 20px;
  cursor: pointer;
`;
