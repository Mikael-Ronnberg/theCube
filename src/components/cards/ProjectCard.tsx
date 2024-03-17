import styled from "styled-components";

export const ProjectCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
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
};

export const ProjectCard = ({ name, image }: ProjectCardProps) => {
  return (
    <>
      <ProjectCardContainer>
        <ProjectCardHeader>{name}</ProjectCardHeader>
        <ProjectCardImage src={image} alt={name} />
      </ProjectCardContainer>
    </>
  );
};
