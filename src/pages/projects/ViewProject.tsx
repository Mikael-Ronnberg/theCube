import styled from "styled-components";
import { DisplayContainer } from "../../components/ui/containerStyles";
import { Project } from "./ProjectsPage";

const ProjectImage = styled.img`
  width: 200px;
  height: 110px;
  grid-column: span 2;
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
  grid-column: span 2;
  color: skyblue;
  text-align: left;

  @media (min-width: 480px) {
    font-size: 1.3rem;
  }
  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;

const TextTag = styled.p`
  font-size: 0.8rem;
  margin: 1rem 2rem;
  width: 200px;
  color: skyblue;
  grid-column: span 20%;

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

const ProjectText = styled.p`
  font-size: 0.8rem;
  margin: 1rem 2rem;
  width: 200px;
  grid-column: span 1.5;

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
  align-items: center;
  justify-content: flex-end;
  max-width: 200px;
  @media (min-width: 480px) {
    max-width: 300px;
  }
  @media (min-width: 768px) {
    max-width: 400px;
  }
`;

const ContentWrapper = styled.div`
  width: 50%;
  height: auto;
  overflow: scroll;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
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
        <ContentWrapper>
          <ProjectHeader>{name}</ProjectHeader>
          <ProjectImage src={image} alt={name} />

          <TextTag>Desc. :</TextTag>
          <ProjectText>{description}</ProjectText>
          <TextTag>Tech:</TextTag>
          <TagContainers>
            {tags.map((tag) => (
              <Tag key={`${name}-${tag.name}`} color={tag.color}>
                #{tag.name}
              </Tag>
            ))}
          </TagContainers>
          <TextTag>Git: </TextTag>
          <a href={code_link} target="blank">
            {name}
          </a>
          <TextTag>Live: </TextTag>
          <ProjectText>Live Site</ProjectText>
        </ContentWrapper>
      </DisplayContainer>
    </>
  );
};
