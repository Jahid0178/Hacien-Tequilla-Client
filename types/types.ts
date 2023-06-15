import { ReactNode } from "react";

export type ButtonProps = {
  className: string;
  children: ReactNode;
  onClick?: () => {};
  type: "button" | "submit" | "reset";
};

export type LogoProps = {
  src: string;
};
