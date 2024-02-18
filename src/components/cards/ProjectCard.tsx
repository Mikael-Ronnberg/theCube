import { ProjectCardHeader } from "../ui/headerStyles";
import { ProjectCardContainer } from "./projectCard/projectCardStyles";

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
