import { ProjectCard } from "../../components/cards/ProjectCard";
import { projects } from "../../constants";
import { useCubeState } from "../../stores/cubeStore";
import { useDisplayComponentState } from "../../stores/displayComponentStore";
import "./ProjectPage.css";
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
      <div>
        <h2>My Works</h2>
        <p>
          My portfolio highlights the breadth and depth of my expertise through
          tangible examples of my projects. Each entry provides a description
          along with links to the associated code repositories. These selections
          exemplify my aptitude for tackling intricate challenges, adeptly
          employing various technologies, and efficiently overseeing projects.
        </p>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={index} onClick={() => handleProjectClick(project)}>
              <ProjectCard
                key={`project-${index}`}
                index={index}
                {...project}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
