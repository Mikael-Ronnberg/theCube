import styled from "styled-components";

export const CardContainer = styled.section`
  --Nhexa: 4;
  --gap: 2vw;
  --size: calc(calc(600px / var(--Nhexa)) - var(--gap));

  margin: calc(var(--size) * 0.5) auto 0;
  width: calc(var(--size) * calc(var(--Nhexa) - 1));
  display: grid;
  grid-template-columns: repeat(var(--Nhexa), 1fr);
  grid-gap: var(--gap);
  position: relative;

  @media (min-width: 480px) {
    --size: calc(calc(800px / var(--Nhexa)) - var(--gap));
  }
  @media (min-width: 768px) {
    --size: calc(calc(600px / var(--Nhexa)) - var(--gap));
  }
  @media (min-width: 992px) {
    --size: calc(calc(1000px / var(--Nhexa)) - var(--gap));
  }
`;

export const ProjectCardContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

export const ProjectCardHeader = styled.h2`
  font-size: 1.3rem;
  font-weight: bold;
  margin: 0.5rem 0;
`;

export const ProjectCardImage = styled.img`
  width: 20vw;
`;

type ProjectCardProps = {
  index: number;
  name: string;
  image: string;
  onClick: () => void;
};

export const ProjectCard = ({ name, image, onClick }: ProjectCardProps) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <>
      <ProjectCardContainer onClick={handleClick}>
        <ProjectCardHeader>{name}</ProjectCardHeader>
        <ProjectCardImage src={image} alt={name} />
      </ProjectCardContainer>
    </>
  );
};
