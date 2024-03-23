import styled from "styled-components";
import LoginArea from "../layout/LoginArea";
import React, { useContext } from "react";
import LoginTypeContext, { LoginTypeProvider } from "../context/loginType";
const LoginSection = styled.section`
  width: 100%;
  border: 2px solid #c4c4c4;
  border-top: none;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  padding: 4rem 3rem 3rem;
`;
const LoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const Input = styled.input`
  padding: 1rem 0;
  border: none;
  border-bottom: 1px solid #c4c4c4;
  outline: none;
  font-size: 1.6rem;
`;
const LoginButton = styled.button`
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

export default function Login() {
  return (
    <LoginArea>
      <LoginSection>
        <LoginForm>
          <Input placeholder="아이디" />
          <Input type="password" placeholder="비밀번호" />
          <LoginButton>로그인</LoginButton>
        </LoginForm>
      </LoginSection>
    </LoginArea>
  );
}
