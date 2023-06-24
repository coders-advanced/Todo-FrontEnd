import * as S from "./styles";
import { AddNote } from "../../components/AddNote";

import { CardGrid } from "../../components/CardGrid";
export const Dashboard = () => {
  return (
    <>
      <S.Wrapper>
        <AddNote />
      </S.Wrapper>
      <CardGrid />
    </>
  );
};
