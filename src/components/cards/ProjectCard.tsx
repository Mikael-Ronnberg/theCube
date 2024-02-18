import {
  ProjectCardContainer,
  ProjectCardHeader,
} from "./projectCard/projectCardStyles";

type ProjectCardProps = {
  titel: string;
};

export const ProjectCard = ({ titel }: ProjectCardProps) => {
  return (
    <>
      <ProjectCardContainer>
        <ProjectCardHeader>{titel}</ProjectCardHeader>
      </ProjectCardContainer>
    </>
  );
};
