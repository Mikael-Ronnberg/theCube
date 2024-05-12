import styled from "styled-components";
import { DisplayContainer } from "../../components/ui/containerStyles";
import { Project } from "./ProjectsPage";

const ProjectImage = styled.img`
  width: 200px;
  height: 110px;
  @media (min-width: 480px) {
    width: 300px;
    height: 160px;
  }
  @media (min-width: 768px) {
    width: 400px;
    height: 230px;
  }
`;

const ProjectHeader = styled.h2`
  font-size: 1rem;
  margin: 1.4rem;
  color: skyblue;
  text-align: left;

  @media (min-width: 480px) {
    font-size: 1.3rem;
  }
  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;

const ProjectText = styled.p`
  font-size: 0.8rem;
  margin: 1rem 2rem;
  width: 200px;

  @media (min-width: 480px) {
    width: 300px;
    font-size: 1rem;
    margin: 1rem 1.8rem;
  }

  @media (min-width: 768px) {
    font-size: 1.1rem;
    margin: 1rem 1.5rem;
    width: 400px;
  }
`;

export const TagContainers = styled.div`
  display: flex;
  margin: 0.8rem 0;
  padding: 0.3rem;
  justify-content: space-evenly;
  border: 2px solid skyblue;
  border-radius: 5px;
  max-width: 200px;
  @media (min-width: 480px) {
    max-width: 300px;
  }
  @media (min-width: 768px) {
    max-width: 400px;
  }
`;

export const Tag = styled.p`
  padding: 0.3rem 0.6rem;
  color: ${(props) => props.color};
  font-size: 0.8rem;
  width: 200px;

  @media (min-width: 480px) {
    width: 300px;
    font-size: 0.9rem;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
    width: 400px;
  }
`;

type ViewProjectProps = {
  project: Project;
};

export const ViewProject = ({ project }: ViewProjectProps) => {
  const { name, description, tags, image, code_link } = project;
  return (
    <>
      <DisplayContainer
        data-augmented-ui="
        tl-2-clip-x t-clip-x tr-2-clip-x br-clip b-clip-y bl-clip both
      "
      >
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
