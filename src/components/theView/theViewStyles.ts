import styled from "styled-components";
import { Canvas } from "@react-three/fiber";

export const ViewContainer = styled.div`
  max-width: 100vw;
  height: 100svh;
  max-height: 100svh;
  z-index: 1;
`;

export const CanvasContainer = styled(Canvas)`
  background: black;
`;
