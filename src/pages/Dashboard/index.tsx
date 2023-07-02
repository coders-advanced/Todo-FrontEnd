import * as S from "./styles";
import { AddNote } from "../../components/AddNote";
import { CardGrid } from "../../components/CardGrid";
import { TodoBar } from "../../components/TodoBar";

export const Dashboard = () => {
  return (
    <>
      <S.Wrapper>
        <TodoBar />
        <AddNote />
      </S.Wrapper>
      <CardGrid />
    </>
  );
};
