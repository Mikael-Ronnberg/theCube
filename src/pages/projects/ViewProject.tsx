import styled from "styled-components";
import { DisplayContainer } from "../../components/ui/containerStyles";
import { Project } from "./ProjectsPage";

const ProjectImage = styled.img`
  justify-self: center;
  width: auto;
  height: 110px;
  padding: 0.5rem 0;
  grid-column: span 2;
  @media (min-width: 480px) {
    height: 160px;
  }
  @media (min-width: 768px) {
    height: 200px;
  }
  @media (min-width: 992px) {
    height: 230px;
  }
`;

const ProjectHeader = styled.h2`
  font-size: 1rem;
  margin: 0.5rem 0rem;
  grid-column: span 2;
  color: skyblue;
  text-align: left;

  @media (min-width: 480px) {
    font-size: 1.3rem;
    margin: 1rem 0.1rem;
  }
  @media (min-width: 768px) {
    font-size: 1.6rem;
    margin: 1rem 0.3rem;
  }
`;

const TextTag = styled.h4`
  font-size: 0.8rem;
  margin: 0.5rem 0;
  margin-right: 1rem;
  color: skyblue;

  @media (min-width: 480px) {
    font-size: 1rem;
    margin: 1rem 0.1rem;
  }

  @media (min-width: 768px) {
    font-size: 1.1rem;
    margin: 1rem 0.3rem;
  }
`;

const ProjectText = styled.p`
  font-size: 0.8rem;
  margin: 0.5rem 0;
  margin-left: 0.5rem;

  @media (min-width: 480px) {
    font-size: 1rem;
    margin: 1rem 0;
  }

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;
const ProjectLinkText = styled.a`
  font-size: 0.8rem;
  margin: 0.5rem 0;
  margin-left: 0.5rem;

  @media (min-width: 480px) {
    font-size: 0.8rem;
    margin: 1rem 0;
  }

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const TagContainers = styled.div`
  display: flex;
  margin: 0.5rem 0;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: 480px) {
  }
  @media (min-width: 768px) {
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: auto;
  overflow: scroll;
  display: grid;
  grid-template-columns: 20% 80%;
  gap: 0;

  @media (min-width: 480px) {
    /* grid-template-columns: 20% 89%; */
  }
  @media (min-width: 768px) {
    /* max-width: 400px; */
  }
`;

export const Tag = styled.p`
  padding: 0.3rem 0.3rem;
  color: ${(props) => props.color};
  font-size: 0.7rem;

  @media (min-width: 480px) {
    font-size: 0.75rem;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

type ViewProjectProps = {
  project: Project;
};

export const ViewProject = ({ project }: ViewProjectProps) => {
  const { name, description, tags, image, code_link, live_link, live_name } =
    project;
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

          <TextTag>Desc:</TextTag>
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
          <ProjectLinkText href={code_link} target="blank">
            {name}
          </ProjectLinkText>
          <TextTag>Live: </TextTag>
          <ProjectLinkText href={live_link} target="blank">
            {live_name}
          </ProjectLinkText>
        </ContentWrapper>
      </DisplayContainer>
    </>
  );
};
