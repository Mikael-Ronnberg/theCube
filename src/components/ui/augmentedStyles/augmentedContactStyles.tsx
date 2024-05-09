import { ReactNode } from "react";
import styled from "styled-components";

const InnerDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem;
  margin: 1rem;
  width: 88%;
  height: 84%;

  --aug-tr: 7px;
  --aug-tl: 7px;
  --aug-t: 35px;

  --aug-br: 10px;
  --aug-bl: 10px;
  --aug-b: 25px;

  --aug-t-extend1: 45%;
  --aug-b-extend1: 40%;
  --aug-border-all: 2px;

  @media (min-width: 480px) {
    --aug-tr: 16px;
    --aug-tl: 16px;
    --aug-t: 60px;
    --aug-t-extend1: 38%;
  }

  @media (min-width: 552px) {
    --aug-tr: 18px;
    --aug-tl: 18px;
    --aug-t: 68px;
    --aug-t-extend1: 44%;
  }

  @media (min-width: 768px) {
    --aug-tr: 20px;
    --aug-tl: 20px;
    --aug-t: 85px;
    --aug-t-extend1: 50%;
  }
  @media (min-width: 992px) {
    --aug-tr: 25px;
    --aug-tl: 25px;
    --aug-t: 75px;
    --aug-t-extend1: 47%;
  }
`;

const OuterDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  --aug-tr: 10px;
  --aug-tl: 10px;
  --aug-t: 29px;

  --aug-b: 25px;
  --aug-br: 30px;
  --aug-bl: 30px;

  --aug-t-extend1: 35%;
  --aug-b-extend1: 30%;

  --aug-border-all: 2px;
  --aug-border-x: 5px;
  --aug-border-bg: radial-gradient(at top right, pink 25%, transparent 50%),
    skyblue 50% 50% / 100% 100%;

  --aug-inlay-all: 6px;
  --aug-inlay-bg: radial-gradient(at top right, pink 25%, black 75%);
  --aug-inlay-border: radial-gradient(pink, black);
  --aug-inlay-opacity: 0.3;

  @media (min-width: 480px) {
    --aug-t: 39px;
    --aug-t-extend1: 29%;
    --aug-inlay-all: 8px;
  }

  @media (min-width: 552px) {
    --aug-tr: 20px;
    --aug-tl: 20px;
    --aug-t: 40px;
    --aug-t-extend1: 32%;
    --aug-inlay-all: 10px;
  }

  @media (min-width: 768px) {
    --aug-tr: 25px;
    --aug-tl: 25px;
    --aug-t: 45px;
    --aug-t-extend1: 35%;
    --aug-inlay-all: 12px;
  }
  @media (min-width: 992px) {
    --aug-tr: 30px;
    --aug-tl: 30px;
    --aug-t: 45px;
    --aug-t-extend1: 36%;
  }
`;

const SideText1 = styled.p`
  writing-mode: vertical-lr;
  justify-content: center;
  align-self: flex-start;
  margin-top: 10rem;
  font-size: 0.8rem;
  opacity: 0.4;
`;

const SmallBox = styled.div`
  width: 0.8rem;
  height: 0.2rem;
  background: skyblue;
`;

type InnerLayerProps = {
  children: ReactNode;
};

const InnerLayer = ({ children }: InnerLayerProps) => {
  return (
    <InnerDiv
      data-augmented-ui="
  tl-clip-x t-clip-x tr-clip-x br-clip-x b-clip-x bl-clip-x border"
    >
      {children}
    </InnerDiv>
  );
};

type ContactOuterLayerProps = {
  children: ReactNode;
  sideText: string;
};

export const ContactOuterLayer = ({
  children,
  sideText,
}: ContactOuterLayerProps) => {
  return (
    <OuterDiv
      data-augmented-ui="
    tl-2-clip-x t-clip-y tr-2-clip-x br-clip b-clip-y bl-clip both
  "
    >
      <SideText1> 00x1e22 index.ts init & render {sideText} v.2.01</SideText1>
      <InnerLayer>{children}</InnerLayer>
      <SmallBox />
    </OuterDiv>
  );
};
