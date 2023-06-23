import { CustomButton } from "../Button";
import { Tabs } from "./Tabs";
import * as S from "./styles";
import { BsPlusSquare, BsFunnel } from "react-icons/bs";

export function TodoBar() {
  return (
    <S.Wrapper>
      <Tabs />
      {/* <CustomButton
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
      </CustomButton> */}
    </S.Wrapper>
  );
}