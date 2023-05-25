import { ReactNode } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps {
  children: ReactNode;
  executeOnPress?: () => void;
  buttonTheme?: "black" | "white";
}

export function CustomButton({
  children,
  executeOnPress,
  buttonTheme = "black",
}: ButtonProps) {
  return (
    <ButtonContainer buttonTheme={buttonTheme} onClick={executeOnPress}>
      {children}
    </ButtonContainer>
  );
}
