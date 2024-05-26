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
              I'm on an exciting journey to become a FrontEnd developer,
              starting as a student at Medieinstitutet in Stockholm where we've
              explored and scratched the surface of HTML/CSS, JavaScript,
              TypeScript, React, NodeJS, GraphQL, and REST API to learning Agile
              Project Management and UX design to create meaningful experiences.
              <br />
              Outside of class, I'm diving into ThreeJS/R3F to broaden my skills
              and to blend my knowledge with real-world experience. Feel free to
              see some of my works and reach out if you want further
              information!
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
