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
              My name is Mikael Rönnberg, and I am a Junior Frontend Developer.
              I studied at Medieinstitutet in Stockholm, where I gained
              foundational knowledge in HTML, CSS, JavaScript, TypeScript,
              React, Node.js, GraphQL, and REST APIs.
              <br />
              During my studies, I also explored Agile Project Management and UX
              design, emphasizing the creation of user-friendly experiences that
              align with today’s industry standards.
              <br />
              <br />
              Currently, I’m diving into technologies such as Three.js/R3F and
              Godot/PixiJS to expand my skill set and integrate my knowledge
              with real-world experience. I am also embarking on my freelance
              journey. Feel free to check out some of my work, and don’t
              hesitate to reach out if you’d like more information!
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
