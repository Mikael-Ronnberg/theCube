import { HexagonLayout } from "../../components/layout/HexagonLayout";
import {
  MainContainer,
  TextContainer,
} from "../../components/ui/containerStyles";
import { technologies } from "../../constants";

import { Developer, HomeHeading, HomeSubText } from "./startPageStyles";

export const StartPage = () => {
  return (
    <>
      <MainContainer>
        <TextContainer>
          <HomeHeading>
            Web <Developer>Developer</Developer>
          </HomeHeading>
          <HomeSubText>
            Indulged in
            <span className="block" /> web-based creations
          </HomeSubText>
        </TextContainer>
      </MainContainer>
      <HexagonLayout items={technologies} />
    </>
  );
};
