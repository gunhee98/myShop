import Input from "./Input";
import styled from "styled-components";
import { signIn } from "../firebase/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { appAuth } from "../firebase/config";

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const LoginButton = styled.button`
  width: 100%;
  height: 6rem;
  background-color: #21bf48;
  border: none;
  border-radius: 10px;
  margin-top: 2rem;
  font-size: 2rem;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;
const Incorrect = styled.p`
  color: red;
  font-size: 1.6rem;
`;
interface FormData {
  email: string;
  password: string;
}
export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const loginSubmit: SubmitHandler<FormData> = async data => {
    console.log(data);
    await signIn(data);
  };

  return (
    <Form onSubmit={handleSubmit(loginSubmit)}>
      <Input
        name="email"
        type="text"
        register={register}
        registerOption={{ required: "아이디를 입력해주세요" }}
      />
      {errors.email && <Incorrect>{errors.email.message}</Incorrect>}
      <Input
        name="password"
        type="password"
        register={register}
        registerOption={{ required: "비밀번호를 입력해주세요" }}
      />
      {errors.password && <Incorrect>{errors.password.message}</Incorrect>}
      <LoginButton>로그인</LoginButton>
    </Form>
  );
}
