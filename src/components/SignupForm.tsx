import { useContext } from "react";
import Input from "./Input";
import { LoginButton, Form } from "./LoginForm";
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
    await signUp({ ...data, loginType });
  };

  return (
    <Form onSubmit={handleSubmit(signupSubmit)}>
      <Input
        name="email"
        type="text"
        register={register}
        registerOption={{
          required: "이메일을 입력해주세요",
          pattern: {
            value: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.(com|net)$/,
            message: "이메일 형식에 맞게 입력해주세요",
          },
        }}
      />
      {errors.email && <p>{errors.email.message}</p>}
      <Input
        name="nickname"
        type="text"
        register={register}
        registerOption={{ required: "닉네임을 입력해주세요" }}
      />
      {errors.nickname && <p>{errors.nickname.message}</p>}
      <Input
        name="password"
        type="password"
        register={register}
        registerOption={{
          required: "비밀번호를 입력해주세요",
          minLength: { value: 6, message: "6자리이상 입력해주세요" },
        }}
      />
      {errors.password && <p>{errors.password.message}</p>}
      <Input
        name="passwordCheck"
        type="password"
        register={register}
        registerOption={{
          required: "비밀번호 확인을 입력해주세요",
          validate: (value: string) =>
            value === getValues().password || "비밀번호가 일치하지 않습니다.",
        }}
      />
      {errors.passwordCheck && <p>{errors.passwordCheck.message}</p>}
      <LoginButton>회원가입</LoginButton>
    </Form>
  );
}
