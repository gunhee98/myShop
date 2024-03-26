import Input from "./Input";
import styled from "styled-components";
import { signIn } from "../firebase/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
export const Incorrect = styled.p`
  color: red;
  font-size: 1.6rem;
`;
interface FormData {
  email: string;
  password: string;
}
export default function LoginForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const loginSubmit: SubmitHandler<FormData> = async data => {
    const user = await signIn(data, setLoading);
    if (user) {
      navigate("/");
    }
  };

  return (
    <Form onSubmit={handleSubmit(loginSubmit)}>
      <Input
        name="email"
        type="text"
        placeholder="이메일을 입력해주세요"
        register={register}
        registerOption={{ required: "이메일를 입력해주세요" }}
      />
      {errors.email && <Incorrect>* {errors.email.message}</Incorrect>}
      <Input
        name="password"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        register={register}
        registerOption={{ required: "비밀번호를 입력해주세요" }}
      />
      {errors.password && <Incorrect>* {errors.password.message}</Incorrect>}
      <LoginButton>{loading ? "로그인하는중..." : "로그인"}</LoginButton>
    </Form>
  );
}
