import { ServiceCard } from "../../components/cards/ServiceCard";
import {
  CardContainer,
  MainContainer,
  TextContainer,
} from "../../components/ui/containerStyles";
import { NormalHeader } from "../../components/ui/headerStyles";
import { NormalText } from "../../components/ui/textStyles";
import { services } from "../../constants";

export const AboutPage = () => {
  return (
    <>
      <MainContainer>
        <TextContainer>
          <NormalHeader>Overview</NormalHeader>

          <NormalText>
            From the moment my fingers first danced on a computer keyboard as a
            child, a world of wonder unveiled before my eyes. Initially, I was
            captivated by the enchanting realms of computer games. It wasn’t
            just about playing - it was the realization that someone had created
            these intricate universes from mere lines of code. This revelation
            led me down a path of curiosity. I became enamored not just with the
            product, but the magic behind it — programming. <br />
            <br />
            Today, I'm on an exhilarating journey to master the art and science
            of coding. As a budding FrontEnd developer at Medieinstitutet in the
            heart of Stockholm, I'm immersing myself in the intricate tapestry
            of HTML/CSS, the versatility of vanilla JavaScript, the precision of
            TypeScript, the dynamism of React, and the vast realms of NodeJS,
            GraphQL, and REST API. My studies don't just stop at coding; I'm
            diving deep into Agile Project Management and the nuances of UX to
            ensure I don't just create applications, but experiences. <br />
            <br />
            Beyond the classroom, my passion drives me to explore further —
            currently, I'm venturing into the mesmerizing world of Three JS
            during my free hours. As I continue my academic journey, I'm also on
            the lookout for an internship opportunity, a platform where I can
            blend my acquired knowledge with real-world experiences. Join me on
            this adventure, and let's weave magic together!
          </NormalText>
        </TextContainer>

        <CardContainer>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </CardContainer>
      </MainContainer>
    </>
  );
};
