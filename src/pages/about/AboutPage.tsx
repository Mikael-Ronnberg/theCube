import { ServiceCard } from "../../components/cards/ServiceCard";
import {
  MainContainer,
  ProjectsContainer,
  ServiceCardContainer,
  TextContainer,
} from "../../components/ui/containerStyles";
import { NormalHeader } from "../../components/ui/headerStyles";
import { NormalText } from "../../components/ui/textStyles";
import { services } from "../../constants";

export const AboutPage = () => {
  return (
    <>
      <MainContainer>
        <ProjectsContainer>
          <TextContainer>
            <NormalHeader>Overview</NormalHeader>
            <NormalText>
              Recently graduated Junior Frontend developer from Medieinstitutet
              in Stockholm, where I explored and scratched the surface of
              HTML/CSS, JavaScript, TypeScript, React, NodeJS, GraphQL, and REST
              API.
              <br />
              During my studies, I also learned about Agile Project Management
              and UX design, focusing on creating user-friendly experiences
              according to today's industry standards.
              <br />
              <br />
              Nowdays I'm diving into techs such as ThreeJS/R3F and Godot to
              broaden my skills and to blend my knowledge with real-world
              experience. Feel free to check out some of my work and reach out
              if you want further information!
            </NormalText>
          </TextContainer>
          <ServiceCardContainer>
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </ServiceCardContainer>
        </ProjectsContainer>
      </MainContainer>
    </>
  );
};
