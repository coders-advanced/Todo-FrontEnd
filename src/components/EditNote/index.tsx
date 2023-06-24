import { useEffect, useRef } from "react";
import * as S from "./styles";

export const EditNote = ({ note, setIsEditing, setIsOpenModal }: any) => {
  const size = useRef<HTMLSpanElement | null>(null);
  const input = useRef<HTMLInputElement | null>(null);

  function updateSize() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    size.current!.innerText = input.current!.value;
  }
  useEffect(() => {
    updateSize();
  });

  return (
    <S.Wrapper
      onClickCapture={(e) => {
        if (e.currentTarget === e.target) {
          setIsOpenModal();
          setIsEditing((prev: any) => !prev);
        }
      }}
    >
      <S.EditContainer>
        <S.Form action="">
          <S.Tag>
            <span ref={size}></span>
            <input
              ref={input}
              onChange={updateSize}
              type="text"
              defaultValue={note.tag}
              placeholder="tag"
            />
          </S.Tag>
          <S.Title type="text" defaultValue={note.title} placeholder="Titulo" />
          <S.Content
            type="text"
            defaultValue={note.content}
            placeholder="Conteudo"
          />
        </S.Form>
      </S.EditContainer>
    </S.Wrapper>
  );
};
