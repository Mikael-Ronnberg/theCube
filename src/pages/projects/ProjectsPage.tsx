import { CardContainer, ProjectCard } from "../../components/cards/ProjectCard";
import {
  MainContainer,
  ProjectsContainer,
  TextContainer,
} from "../../components/ui/containerStyles";
import { NormalHeader } from "../../components/ui/headerStyles";
import { NormalText } from "../../components/ui/textStyles";
import { projects } from "../../constants";
import { useCubeState } from "../../stores/cubeStore";
import { useDisplayComponentState } from "../../stores/displayComponentStore";
import { ViewProject } from "./ViewProject";

export type Project = {
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  code_link: string;
  live_link: string;
  live_name: string;
};

export const ProjectsPage = () => {
  const { isMoved, setActiveSide, setIsMoved } = useCubeState();
  const { setCurrentComponent } = useDisplayComponentState();

  const handleProjectClick = (project: Project) => {
    setIsMoved(!isMoved);
    setActiveSide("side3");
    setCurrentComponent(<ViewProject project={project} />);
  };

  return (
    <>
      <MainContainer>
        <ProjectsContainer>
          <TextContainer>
            <NormalHeader>Projects</NormalHeader>
            <NormalText>
              These are some of my highlights, each entry provides a description
              along with links to the associated code repositories and live
              site. These selections exemplify some of the works and techniques
              that we went through during my time at Medieinstitutet.
            </NormalText>
          </TextContainer>

          <CardContainer data-augmented-ui-reset="">
            {projects.map((project, index) => (
              <ProjectCard
                key={`project-${index}`}
                index={index}
                {...project}
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </CardContainer>
        </ProjectsContainer>
      </MainContainer>
    </>
  );
};
