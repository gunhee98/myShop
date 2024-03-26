import styled from "styled-components";
import LoginArea from "../layout/LoginArea";
import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";

export const LoginSection = styled.section`
  width: 100%;
  border: 2px solid #c4c4c4;
  border-top: none;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  padding: 4rem 3rem 3rem;
`;
const SignText = styled.p`
  font-size: 1.6rem;
  margin-top: 1rem;
`;
const SignLink = styled(Link)`
  font-weight: bold;
`;
export default function Login() {
  return (
    <LoginArea>
      <LoginSection>
        <LoginForm />
      </LoginSection>
      <SignText>
        아직 계정이 없으신가요? <SignLink to="/signup">회원가입</SignLink>
      </SignText>
    </LoginArea>
  );
}
