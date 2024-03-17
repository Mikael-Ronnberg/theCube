import styled from "styled-components";

interface Item {
  name: string;
  icon: string;
}

interface HexagonGridProps {
  items: Item[];
}

const HexagonGridContainer = styled.section`
  --Nhexa: 4;
  --gap: 2vw;
  --size: calc(calc(400px / var(--Nhexa)) - var(--gap));

  margin: calc(var(--size) * 0.5) auto 0;
  width: calc(var(--size) * calc(var(--Nhexa) - 1));
  display: grid;
  grid-template-columns: repeat(var(--Nhexa), 1fr);
  grid-gap: var(--gap);
  position: relative;
  bottom: 600px;
  left: -20px;
  z-index: -2;
  @media (min-width: 480px) {
    --size: calc(calc(600px / var(--Nhexa)) - var(--gap));
    bottom: 640px;
    left: -24px;
  }
  @media (min-width: 768px) {
    --size: calc(calc(900px / var(--Nhexa)) - var(--gap));
    bottom: 750px;
    left: -30px;
  }
`;

const Article = styled.article`
  background: #6c6d6d1a;
  width: var(--size);
  height: calc(var(--size) / 1.1111111);
  clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%);
  margin-right: calc(var(--size) / 2);

  &:nth-child(2n) {
    margin: calc(var(--size) * -0.5) calc(var(--size) * -0.25) 0
      calc(var(--size) * -0.75);
  }
`;

const HexagonImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 0.2;
`;

export const HexagonLayout = ({ items }: HexagonGridProps) => {
  return (
    <>
      <HexagonGridContainer>
        {items.map((item, index) => (
          <Article key={index}>
            <HexagonImage src={item.icon} alt={item.name} />
          </Article>
        ))}
      </HexagonGridContainer>
    </>
  );
};
