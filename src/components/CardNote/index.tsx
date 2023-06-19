import * as S from "./styles";
import { BsThreeDots } from "react-icons/bs";
export const CardNote = () => {
  return (
    <S.Wrapper>
      <S.Heading>
        <span> Web design</span>
        <BsThreeDots fill="#BABABA" />
      </S.Heading>
      <S.Content>
        <h2>Desenvolvimento - Projeto</h2>
        <p>Desenvolvimento - Projeto utilizando React e TypeScript</p>
      </S.Content>
      <S.Footer>19 Junho 2023</S.Footer>
    </S.Wrapper>
  );
};
