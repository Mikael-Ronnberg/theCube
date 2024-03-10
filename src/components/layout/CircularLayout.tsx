import { ReactElement } from "react";
import styled from "styled-components";

interface Item {
  icon: string;
  name: string;
}

interface CircularLayoutProps {
  items: Item[];
  children: ReactElement;
}

const CircularContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const CircularItem = styled.div<{ angle: number }>`
  position: absolute;
  transform: ${(props) => `rotate(${props.angle}deg) translateX(250px)`};
  z-index: -20;
  background-color: white;
  border-radius: 50%;
`;

const CircularImage = styled.img<{ angle: number }>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  transform: rotate(-${(props) => props.angle}deg);
`;

export const CircularLayout = ({ items, children }: CircularLayoutProps) => {
  const angleIncrement = 360 / items.length;

  return (
    <CircularContainer>
      {items.map((item, index) => (
        <CircularItem key={index} angle={index * angleIncrement}>
          <CircularImage
            src={item.icon}
            alt={item.name}
            angle={index * angleIncrement}
          />
        </CircularItem>
      ))}
      {children}
    </CircularContainer>
  );
};
