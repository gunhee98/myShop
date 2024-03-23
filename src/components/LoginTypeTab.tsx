import { useContext } from "react";
import styled, { css } from "styled-components";
import LoginTypeContext from "../context/loginType";
const LoginTab = styled.div`
  display: flex;
  width: 100%;
`;
const Tab = css`
  flex: 1;
  border: 2px solid #c4c4c4;
  padding: 2rem;
  font-weight: bold;
`;
const BuyerTab = styled.button<{ buy: string }>`
  ${Tab}
  border-bottom: ${props => props.buy === "buy" && "none"};
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  background-color: ${props =>
    props.buy === "buy" ? "white" : "rgba(0,0,0,0.1)"};
`;
const SellerTab = styled.button<{ sell: string }>`
  ${Tab}
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  border-bottom: ${props => props.sell === "sell" && "none"};
  background-color: ${props =>
    props.sell === "sell" ? "white" : "rgba(0,0,0,0.1)"};
`;

export default function LoginTypeTab() {
  const { state, actions } = useContext(LoginTypeContext);
  const handleLoginType = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    if (e.currentTarget.name === "buy") {
      actions.setLoginType("buy");
    } else {
      actions.setLoginType("sell");
    }
  };

  return (
    <LoginTab>
      <BuyerTab buy={state.loginType} name="buy" onClick={handleLoginType}>
        구매회원 로그인
      </BuyerTab>
      <SellerTab sell={state.loginType} name="sell" onClick={handleLoginType}>
        판매회원 로그인
      </SellerTab>
    </LoginTab>
  );
}
