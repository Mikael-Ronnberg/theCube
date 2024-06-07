import styled from "styled-components";

export const CardContainer = styled.section`
  --Nhexa: 4;
  --gap: 2.3vw;
  --size: calc(calc(480px / var(--Nhexa)) - var(--gap));
  margin: calc(var(--size) * 0.5) auto 0;
  width: calc(var(--size) * calc(var(--Nhexa) - 1));
  padding-left: 3rem;
  display: grid;
  align-self: center;
  grid-template-columns: repeat(var(--Nhexa), 1fr);
  grid-gap: var(--gap);

  @media (min-width: 480px) {
    --gap: 3.3vw;
    --size: calc(calc(600px / var(--Nhexa)) - var(--gap));
  }
  @media (min-width: 768px) {
    --gap: 4.3vw;
    --size: calc(calc(800px / var(--Nhexa)) - var(--gap));
  }
  @media (min-width: 992px) {
    --size: calc(calc(1000px / var(--Nhexa)) - var(--gap));
  }
`;

const ProjectCardContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  --aug-all-width: 120px;
  overflow: visible;
  cursor: pointer;
  width: var(--size);
  height: calc(var(--size) / 1.111111);
  margin-right: calc(var(--size) / 2);

  &:nth-child(2n) {
    margin: calc(var(--size) * -0.5) calc(var(--size) * -0.25) 0
      calc(var(--size) * -0.75);
  }

  @media (min-width: 480px) {
    --aug-all-width: 130px;
  }
  @media (min-width: 768px) {
    --aug-all-width: 170px;
  }
  @media (min-width: 992px) {
    --aug-all-width: 200px;
  }
`;

const ProjectCardHeader = styled.h2`
  min-width: max-content;
  position: relative;
  font-size: 0.9rem;
  font-weight: bold;
  margin: 0.5rem 0;
  top: 5.8rem;
  left: -1.5rem;

  @media (min-width: 480px) {
    top: 6rem;
    left: -2rem;
    font-size: 1rem;
  }
  @media (min-width: 768px) {
    font-size: 1.3rem;
    top: 7rem;
    left: -2.5rem;
  }
  @media (min-width: 992px) {
    font-size: 1.4rem;
    top: -7rem;
    left: -3.3rem;
  }
`;

const ProjectCardImage = styled.img`
  width: 150px;
  height: 100px;

  @media (min-width: 480px) {
    width: 170px;
    height: 120px;
  }
  @media (min-width: 768px) {
    width: 230px;
    height: 170px;
  }
  @media (min-width: 992px) {
    width: 260px;
    height: 180px;
  }
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
      <ProjectCardContainer>
        <ProjectCardHeader>{name}</ProjectCardHeader>
        <ProjectCardContainer
          onClick={handleClick}
          data-augmented-ui="all-hex-alt border"
        >
          <ProjectCardImage src={image} alt={name} />
        </ProjectCardContainer>
      </ProjectCardContainer>
    </>
  );
};
