import * as S from "./styled";

export type TabItemProps = {
  children: string;
};

export function TabItem({ children }: TabItemProps) {
  return (
    <S.Wrapper>
      <li>{children}</li>
    </S.Wrapper>
  );
}