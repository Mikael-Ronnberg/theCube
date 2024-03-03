import styled from "styled-components";
import { DisplayContainer } from "../../components/ui/containerStyles";
import { Project } from "./ProjectsPage";

const ProjectImage = styled.img`
  width: 230px;
  height: 200px;
  @media (min-width: 480px) {
    width: 280px;
    height: 220px;
  }
  @media (min-width: 768px) {
    width: 300px;
    height: 250px;
  }
`;

const ProjectHeader = styled.h2`
  font-size: 1rem;
  margin: 3rem;
  color: skyblue;

  @media (min-width: 480px) {
    font-size: 1.3rem;
  }
  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;

const ProjectText = styled.p`
  font-size: 0.8rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
  width: 30vw;

  @media (min-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1.4rem;
  }

  @media (min-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1.2rem;
  }
`;

export const TagContainers = styled.div`
  display: flex;
  margin: 0.8rem;
  justify-content: space-evenly;
  align-items: center;
`;

export const Tag = styled.p`
  margin: 0.5rem;
  padding: 0.3rem 0.6rem;
  color: ${(props) => props.color};
`;

type ViewProjectProps = {
  project: Project;
};

export const ViewProject = ({ project }: ViewProjectProps) => {
  const { name, description, tags, image, code_link } = project;
  return (
    <>
      <DisplayContainer>
        <ProjectHeader>{name}</ProjectHeader>
        <ProjectImage src={image} alt={name} />
        <ProjectText>{description}</ProjectText>
        <TagContainers>
          {tags.map((tag) => (
            <Tag key={`${name}-${tag.name}`} color={tag.color}>
              #{tag.name}
            </Tag>
          ))}
        </TagContainers>
        <a href={code_link} target="blank">
          {name}
        </a>
      </DisplayContainer>
    </>
  );
};
