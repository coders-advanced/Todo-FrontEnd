import * as S from "./styles";
import { BsThreeDots } from "react-icons/bs";
import { ModalNote } from "../ModalNote";
import { EditNote } from "../EditNote";
import { useState } from "react";

export const CardNote = ({ card }: any) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  console.log(card);

  return (
    <>
      <S.Wrapper>
        <S.Heading>
          <span> {card.tag}</span>
          <BsThreeDots
            fill="#BABABA"
            onClick={() => {
              setIsOpenModal((prev) => !prev);
            }}
          />
        </S.Heading>
        <S.Content>
          <h2>{card.title}</h2>
          <p>{card.content}</p>
        </S.Content>
        <S.Footer>19 Junho 2023</S.Footer>
        {isOpenModal && (
          <ModalNote
            setIsOpenModal={setIsOpenModal}
            setIsEditing={setIsEditing}
          />
        )}
        {isEditing && <EditNote note={card} setIsEditing={setIsEditing} setIsOpenModal={setIsOpenModal} />}
      </S.Wrapper>
    </>
  );
};
