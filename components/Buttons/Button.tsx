import { ButtonProps } from "@/types/types";

const Button = ({ className, children, type }: ButtonProps) => {
  return (
    <button className={`btn ${className}`} type={type}>
      {children}
    </button>
  );
};

export default Button;
