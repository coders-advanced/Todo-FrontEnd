import * as S from "./styles";
import { BsPlusLg } from "react-icons/bs";

export type AddNoteProps = {
  onClick: () => void;
};


export function AddNote() {
  return (
    <S.Wrapper>
      <div>
        <BsPlusLg onClick={() => { alert("hello"); }} />
      </div>
    </S.Wrapper>
  );
}