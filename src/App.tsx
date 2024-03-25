import styled from "styled-components";
import Router from "./routes/Router";
import { LoginTypeProvider } from "./context/LoginTypeContext";
import { AuthContextProvider } from "./context/AuthContext";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
function App() {
  return (
    <Wrapper>
      <LoginTypeProvider>
        <AuthContextProvider>
          <Router />
        </AuthContextProvider>
      </LoginTypeProvider>
    </Wrapper>
  );
}

export default App;
