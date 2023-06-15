import Image from "next/image";
import { LogoProps } from "@/types/types";

const Logo = ({ src }: LogoProps) => {
  return <Image src={src} alt="Hacien Tequila" width={150} height={150} />;
};

export default Logo;
