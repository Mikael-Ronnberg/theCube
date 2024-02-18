import {
  ProjectCardContainer,
  ProjectCardHeader,
  ProjectCardImage,
  ProjectCardLink,
} from "./projectCard/projectCardStyles";

type ProjectCardProps = {
  index: number;
  name: string;
  description?: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  code_link: string;
};

export const ProjectCard = ({
  name,
  tags,
  image,
  code_link,
}: ProjectCardProps) => {
  return (
    <>
      <ProjectCardContainer>
        <ProjectCardHeader>{name}</ProjectCardHeader>

        <ProjectCardImage src={image} alt={name} />
        <ProjectCardLink href={code_link} target="blank">
          {name}
        </ProjectCardLink>
        <div>
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </ProjectCardContainer>
    </>
  );
};
