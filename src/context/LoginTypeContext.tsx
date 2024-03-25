import { ReactNode, createContext, useState } from "react";
interface ContextType {
  state: { loginType: string; loginAndSignup: string };
  actions: {
    setLoginType: (type: string) => void;
    setLoginAndSignup: (type: string) => void;
  };
}
const LoginTypeContext = createContext<ContextType>({
  state: { loginType: "buy", loginAndSignup: "login" },
  actions: {
    setLoginType: () => {},
    setLoginAndSignup: () => {},
  },
});
const LoginTypeProvider = ({ children }: { children: ReactNode }) => {
  const [loginType, setLoginType] = useState("buy");
  const [loginAndSignup, setLoginAndSignup] = useState("login");
  const value = {
    state: { loginType, loginAndSignup },
    actions: { setLoginType, setLoginAndSignup },
  };
  return (
    <LoginTypeContext.Provider value={value}>
      {children}
    </LoginTypeContext.Provider>
  );
};

const { Consumer: LoginTypeConsumer } = LoginTypeContext;

export { LoginTypeProvider, LoginTypeConsumer };
export default LoginTypeContext;
