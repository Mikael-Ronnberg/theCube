import { NormalButton } from "../../components/ui/buttonStyles";
import {
  ContactHeaderContainer,
  MainContainer,
} from "../../components/ui/containerStyles";
import { ContactHeader } from "../../components/ui/headerStyles";
import { NormalText } from "../../components/ui/textStyles";
import { useCubeState } from "../../stores/cubeStore";
import { useDisplayComponentState } from "../../stores/displayComponentStore";
import { ViewContact } from "./ViewContact";
import { ContactOuterLayer } from "../../components/ui/augmentedStyles/augmentedStyles";

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
      <ContactHeaderContainer
        data-augmented-ui="
  bl-clip br-clip both
"
      >
        <ContactHeader>Contact</ContactHeader>
      </ContactHeaderContainer>

      <ContactOuterLayer sideText="ContactPage.tsx">
        <NormalText>Don't be a stranger. Get in touch!</NormalText>
      </ContactOuterLayer>

      <NormalButton
        onClick={() => HandleContactClick()}
        data-augmented-ui="
  tl-clip tr-clip both
"
      >
        Message
      </NormalButton>
    </MainContainer>
  );
};
