import { CustomButton } from "../Button";
import * as S from "./styles";
import { BsPlusSquare, BsFunnel } from "react-icons/bs";

export function TodoBar() {
  return (
    <S.Wrapper>
      <CustomButton
        variant="todo"
        leftIcon={<BsFunnel />}
      >
        filter
      </CustomButton>
      <CustomButton
        variant="todo"
        leftIcon={<BsPlusSquare />}
      >
        add task
      </CustomButton>

    </S.Wrapper>
  );
}