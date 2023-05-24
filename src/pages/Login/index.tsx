import { InputContainer } from "./styles";

export const Login = () => {
  return <div>
    <h1>Login</h1>
    <InputContainer>
      <label htmlFor="email">email</label>
      <input type="text" id="email" />
    </InputContainer>
  </div>;
};
