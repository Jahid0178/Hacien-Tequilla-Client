import { StaticImageData } from "next/image";
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

export type teamMembersProps = {
  id: number | string;
  name: string;
  role: string;
  profile: string;
  description: string;
}[];
