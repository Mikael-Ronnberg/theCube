import { useProgress } from "@react-three/drei";
import styled from "styled-components";

const LoadingContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
`;

type LoadingScreenProps = {
  started: boolean;
  onBegin: () => void;
};

export const LoadingScreen = ({ started, onBegin }: LoadingScreenProps) => {
  const { progress } = useProgress();

  const threshold = 100;
  console.log(progress);

  return (
    <>
      {started && (
        <>
          <LoadingContainer>
            {progress >= threshold ? (
              <>
                <p style={{ color: "black" }}>
                  Loading complete! Click the button to begin.
                </p>
                <button onClick={onBegin}>Start</button>
              </>
            ) : (
              <p style={{ color: "black" }}>
                Loading... Progress: {progress.toFixed(2)}%
              </p>
            )}
          </LoadingContainer>
        </>
      )}
    </>
  );
};
