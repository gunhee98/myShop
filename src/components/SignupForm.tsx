import { useContext, useState } from "react";
import Input from "./Input";
import { LoginButton, Form, Incorrect } from "./LoginForm";
import LoginTypeContext from "../context/LoginTypeContext";
import { signUp } from "../firebase/auth";
import { SubmitHandler, useForm } from "react-hook-form";
export interface FormData {
  email: string;
  nickname: string;
  password: string;
  passwordCheck: string;
}
export default function SignupForm() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormData>();

  const {
    state: { loginType },
  } = useContext(LoginTypeContext);

  const signupSubmit: SubmitHandler<FormData> = async data => {
    await signUp({ ...data, loginType }, setLoading);
  };

  return (
    <Form onSubmit={handleSubmit(signupSubmit)}>
      <Input
        name="email"
        type="text"
        placeholder="이메일을 입력해주세요."
        register={register}
        registerOption={{
          required: "이메일을 입력해주세요",
          pattern: {
            value: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.(com|net)$/,
            message: "이메일 형식에 맞게 입력해주세요",
          },
        }}
      />
      {errors.email && <Incorrect>* {errors.email.message}</Incorrect>}
      <Input
        name="nickname"
        type="text"
        placeholder="닉네임을 입력해주세요."
        register={register}
        registerOption={{ required: "닉네임을 입력해주세요" }}
      />
      {errors.nickname && <Incorrect>* {errors.nickname.message}</Incorrect>}
      <Input
        name="password"
        type="password"
        placeholder="비밀번호를 입력해주세요."
        register={register}
        registerOption={{
          required: "비밀번호를 입력해주세요",
          minLength: { value: 6, message: "6자리이상 입력해주세요" },
        }}
      />
      {errors.password && <Incorrect>* {errors.password.message}</Incorrect>}
      <Input
        name="passwordCheck"
        type="password"
        placeholder="비밀번호를 다시 입력해주세요."
        register={register}
        registerOption={{
          required: "비밀번호를 확인을 입력해주세요",
          validate: (value: string) =>
            value === getValues().password || "비밀번호가 일치하지 않습니다.",
        }}
      />
      {errors.passwordCheck && (
        <Incorrect>* {errors.passwordCheck.message}</Incorrect>
      )}
      <LoginButton>{loading ? "회원가입중..." : "회원가입"}</LoginButton>
    </Form>
  );
}
