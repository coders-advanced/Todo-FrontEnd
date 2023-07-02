import * as S from "./styles";
import { CardGrid } from "../../components/CardGrid";
import { TodoBar } from "../../components/TodoBar";

export const Dashboard = () => {
  return (
    <S.Wrapper>
      <TodoBar />
      <CardGrid />
    </S.Wrapper>
  );
};
