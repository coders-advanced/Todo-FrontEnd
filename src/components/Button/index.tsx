import { ReactNode } from "react";
import { ButtonContainer } from "./styles";

export type ButtonProps = {
  children: ReactNode;
  executeOnPress?: () => void;
  variant?: "todo" | "primary" | "secondary";
};

export function CustomButton({
  children,
  variant,
  executeOnPress,
}: ButtonProps) {
  return (
    <ButtonContainer variant={variant} onClick={executeOnPress}>
      {children}
    </ButtonContainer>
  );
}
