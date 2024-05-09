import "./augmentedStyles.css";
import { ReactNode } from "react";

type InnerLayerProps = {
  children: ReactNode;
};

const InnerLayer = ({ children }: InnerLayerProps) => {
  return (
    <div
      className="inner-cont"
      data-augmented-ui="
  tl-clip-x t-clip-x tr-clip-x br-clip-x b-clip-x bl-clip-x both"
    >
      {children}
    </div>
  );
};

type OuterLayerProps = {
  children: ReactNode;
  sideText: string;
};

export const OuterLayer = ({ children, sideText }: OuterLayerProps) => {
  return (
    <div
      className="outer-cont"
      data-augmented-ui="
    tl-2-clip-x t-clip-y tr-2-clip-x br-clip b-clip-y bl-clip both
  "
    >
      <p className="vert-side"> index.ts init deep clear {sideText}</p>
      <InnerLayer>{children}</InnerLayer>
      <div className="small-box"></div>
    </div>
  );
};
