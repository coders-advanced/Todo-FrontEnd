import { ReactNode } from "react";
import * as S from "./styles";

export type ButtonProps = {
  children: ReactNode;
  executeOnPress?: () => void;
  variant?: "todo" | "primary" | "secondary";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode,
};

export function CustomButton({
  children,
  variant,
  leftIcon,
  rightIcon,
  executeOnPress,
}: ButtonProps) {
  return (
    <S.ButtonContainer
      variant={variant}
      onClick={executeOnPress}
    >
      {leftIcon && <S.ButtonIcon>{leftIcon}</S.ButtonIcon>}
      {children}
      {rightIcon && <S.ButtonIcon>{rightIcon}</S.ButtonIcon>}
    </S.ButtonContainer>
  );
}
