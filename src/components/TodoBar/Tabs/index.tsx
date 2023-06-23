import * as S from "./styled";
import { TabItem } from "./TabItem";

export function Tabs() {
  return (
    <S.Wrapper>
      <ul>
        <TabItem>{"Tarefas"}</TabItem>
        <TabItem>{"Fazendo"}</TabItem>
        <TabItem>{"Feito"}</TabItem>
      </ul>
    </S.Wrapper>
  );
}