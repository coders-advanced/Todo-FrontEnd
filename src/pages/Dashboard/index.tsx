import * as S from "./styles";
import { CardNote } from "../../components/CardNote";
import { TodoBar } from "../../components/TodoBar";
export const Dashboard = () => {
  return (
    <>
      <S.Wrapper>
        <TodoBar />

        <CardNote />
      </S.Wrapper>
    </>
  );

};
