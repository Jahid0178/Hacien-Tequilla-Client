import { ButtonProps } from "@/types/types";

const Button = ({ className, children, type, onClick }: ButtonProps) => {
  return (
    <button className={`btn ${className}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
