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

export type EventDataProps = {
  data: {
    id: number;
    imageSrc: string;
    name: string;
    date: string;
    time: string;
    location: string;
  };
};

export type ProductDataProps = {
  data: {
    id: number;
    flavour: string;
    title: string;
    description: string;
    src: string;
    colorCode: string;
  };
};
