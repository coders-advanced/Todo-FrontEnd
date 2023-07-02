import { Footer, HomeContainer, LeftSide, Main, RightSide } from "./styles";
import HomeImage from "../../assets/home-image.png";
import { CustomButton } from "../../components/Button";

export const Home = () => {
  return (
    <HomeContainer>
      <Main>
        <LeftSide>
          <h1>Todo sucesso começa com organização e disciplina!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </LeftSide>
        <RightSide>
          <img src={HomeImage} />
        </RightSide>
      </Main>

      <Footer>
        <CustomButton variant="primary">criar conta</CustomButton>
        <CustomButton variant="secondary">entrar</CustomButton>
      </Footer>
    </HomeContainer>
  );
};
