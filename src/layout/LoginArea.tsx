import { ReactNode } from "react";
import styled from "styled-components";
import Logo from "../assets/Logo-hodu.svg";
import LoginTypeTab from "../components/LoginTypeTab";
const LoginContain = styled.div`
  display: flex;
`;
const LoginWrapper = styled.div`
  width: 55rem;
  margin: 0 auto;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LogoTitle = styled.h2`
  margin-bottom: 2rem;
`;
const LogoImg = styled.img`
  width: 23.8rem;
  height: 7.4rem;
`;

export default function LoginArea({ children }: { children: ReactNode }) {
  return (
    <LoginContain>
      <LoginWrapper>
        <LogoTitle>
          <LogoImg src={Logo} alt="로고 이미지" />
        </LogoTitle>
        <LoginTypeTab />
        {children}
      </LoginWrapper>
    </LoginContain>
  );
}
