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
            <NormalHeader>My Works</NormalHeader>
            <NormalText>
              My portfolio highlights the breadth and depth of my expertise
              through tangible examples of my projects. Each entry provides a
              description along with links to the associated code repositories.
              These selections exemplify my aptitude for tackling intricate
              challenges, adeptly employing various technologies, and
              efficiently overseeing projects.
            </NormalText>
          </TextContainer>

          <CardContainer>
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
