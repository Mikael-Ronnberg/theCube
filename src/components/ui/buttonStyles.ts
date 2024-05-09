import styled from "styled-components";

interface NormalButtonProps {
  onClick?: () => void;
}

export const NormalButton = styled.button<NormalButtonProps>`
  color: white;
  width: 30%;
  background-color: black;
  border: 1px solid skyblue;
  padding: 10px 20px;
  cursor: pointer;
  bottom: 37px;
  --aug-border-all: 1px;
`;
