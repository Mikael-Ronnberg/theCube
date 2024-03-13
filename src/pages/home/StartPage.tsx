// import { CircularLayout } from "../../components/layout/CircularLayout";
import {
  MainContainer,
  TextContainer,
} from "../../components/ui/containerStyles";
// import { technologies } from "../../constants";
import { Developer, HomeHeading, HomeSubText } from "./startPageStyles";

export const StartPage = () => {
  return (
    <>
      <MainContainer>
        {/* <CircularLayout items={technologies}> */}
        <TextContainer>
          <HomeHeading>
            Web <Developer>Developer</Developer>
          </HomeHeading>
          <HomeSubText>
            Indulged in
            <span className="block" /> web-based creations
          </HomeSubText>
        </TextContainer>
        {/* </CircularLayout> */}
      </MainContainer>
    </>
  );
};
