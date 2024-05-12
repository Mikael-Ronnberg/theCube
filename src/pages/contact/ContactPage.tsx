import { NormalButton } from "../../components/ui/buttonStyles";
import {
  MainContainer,
  TextContainer,
} from "../../components/ui/containerStyles";
import { NormalHeader } from "../../components/ui/headerStyles";
import { NormalText } from "../../components/ui/textStyles";
import { useCubeState } from "../../stores/cubeStore";
import { useDisplayComponentState } from "../../stores/displayComponentStore";
import { ViewContact } from "./ViewContact";

export const ContactPage = () => {
  const { isMoved, setActiveSide, setIsMoved } = useCubeState();
  const { setCurrentComponent } = useDisplayComponentState();

  const HandleContactClick = () => {
    setIsMoved(!isMoved);
    setActiveSide("side2");
    setCurrentComponent(<ViewContact />);
  };
  return (
    <MainContainer>
      <TextContainer>
        <NormalHeader>Contact</NormalHeader>
      </TextContainer>

      {/* <ContactOuterLayer sideText="ContactPage.tsx"> */}
      <NormalText>Don't be a stranger. Get in touch!</NormalText>
      {/* </ContactOuterLayer> */}

      <NormalButton onClick={() => HandleContactClick()}>Message</NormalButton>
    </MainContainer>
  );
};
