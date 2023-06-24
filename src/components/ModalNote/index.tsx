
import * as S from "./styles";

export const ModalNote = ({ setIsOpenModal, setIsEditing }: any) => {

  const handleEditNote = () => {
    setIsEditing((prev: any) => !prev);
  };
  return (
    <>
      <S.Wrapper>
        <S.Option onClick={handleEditNote}>Editar</S.Option>
        <S.Option>Deletar</S.Option>
      </S.Wrapper>
    </>
  );
};
