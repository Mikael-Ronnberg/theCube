import { Project } from "./ProjectsPage";

type ViewProjectProps = {
  project: Project;
};

export const ViewProject = ({ project }: ViewProjectProps) => {
  const { name, description, tags, image, code_link } = project;
  return (
    <>
      <h1>{name}</h1>
      <img src={image} alt={name} />
      <p>{description}</p>
      <div>
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
      <a href={code_link} target="blank">
        {name}
      </a>
    </>
  );
};
