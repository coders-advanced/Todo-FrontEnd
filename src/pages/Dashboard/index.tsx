import * as S from "./styles";
import { AddNote } from "../../components/AddNote";
import { CardNote } from "../../components/CardNote";
export const Dashboard = () => {
  return (
    <>
      <S.Wrapper>
        <AddNote />

      </S.Wrapper>

      <CardNote />
    </>
  );

};
