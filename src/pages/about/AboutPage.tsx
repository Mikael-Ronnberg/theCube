import { ServiceCard } from "../../components/cards/ServiceCard";
import {
  MainContainer,
  ServiceCardContainer,
  TextContainer,
} from "../../components/ui/containerStyles";
import { NormalHeader } from "../../components/ui/headerStyles";
import { services } from "../../constants";
import { AboutTextContainer, AboutNormalText } from "./aboutPageStyles";

export const AboutPage = () => {
  return (
    <>
      <MainContainer>
        <TextContainer>
          <NormalHeader>Overview</NormalHeader>
          <AboutTextContainer>
            <AboutNormalText>
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
            </AboutNormalText>
          </AboutTextContainer>
        </TextContainer>

        <ServiceCardContainer>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </ServiceCardContainer>
      </MainContainer>
    </>
  );
};
