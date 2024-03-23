import styled from "styled-components";
import Router from "./routes/Router";
import { LoginTypeProvider } from "./context/loginType";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
function App() {
  return (
    <Wrapper>
      <LoginTypeProvider>
        <Router />
      </LoginTypeProvider>
    </Wrapper>
  );
}

export default App;
