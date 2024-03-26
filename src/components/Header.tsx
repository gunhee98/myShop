import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Logo_hodu from "../assets/Logo-hodu.svg";
import UserLogin from "../assets/icon-user.svg";
import ShoppingCart from "../assets/icon-shopping-cart.svg";
import SearchIcon from "../assets/search.svg";
import shoppingIcon from "../assets/icon-shopping-bag.svg";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
const HeaderWrapper = styled.div`
  width: 100%;
  box-shadow: 0px 0px 5px 0px #767676;
  padding: 10px 10px;
  position: fixed;
  background-color: white;
`;
const S_Header = styled.header<{ sellerCenter: string | null }>`
  max-width: ${props =>
    props.sellerCenter === "sellerCenter" ? "100%" : "1250px"};
  padding: ${props =>
    props.sellerCenter === "sellerCenter" ? "0px 100px" : null};
  display: flex;
  align-items: center;
  margin: 0 auto;
`;
const Logo = styled.img`
  width: 124px;
  height: 38px;
  margin-right: 30px;
`;
const Search = styled.div`
  width: 400px;
  padding: 0px 10px;
  border-radius: 23px;
  display: flex;
  border: 2px solid #21bf48;
  overflow: hidden;
`;
const Input = styled.input`
  height: 46px;
  padding: 20px;
  flex: 1;
  border: none;
  outline: 0;
  font-size: 16px;
  background-color: white;
`;
const HeaderRight = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  flex: 1;
  font-size: 1.2rem;
`;
const BasketBtn = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const LoginBtn = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Button = styled(Link)`
  background-color: #21bf48;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0rem 1rem;
  border-radius: 0.5rem;
  img {
    width: 25px;
    height: 25px;
  }
  span {
    color: white;
  }
`;
export default function Header() {
  const user = useContext(AuthContext);
  const location = useLocation();
  return (
    <HeaderWrapper>
      <S_Header
        sellerCenter={
          location.pathname === "/seller/center" ? "sellerCenter" : null
        }
      >
        <Logo src={Logo_hodu} />
        <Search>
          <Input placeholder="상품을 검색해보세요" />
          <img src={SearchIcon} alt="" />
        </Search>
        {!user && (
          <HeaderRight>
            <BasketBtn to="/">
              <img src={ShoppingCart} alt="" />
              <span>장바구니</span>
            </BasketBtn>
            <LoginBtn to="/signin">
              <img src={UserLogin} alt="" />
              <span> 로그인 </span>
            </LoginBtn>
          </HeaderRight>
        )}
        {user?.loginType === "buy" && (
          <HeaderRight>
            <BasketBtn to="/">
              <img src={ShoppingCart} alt="" />
              <span>장바구니</span>
            </BasketBtn>
            <LoginBtn to="/signin">
              <img src={UserLogin} alt="" />
              <span> 마이페이지 </span>
            </LoginBtn>
          </HeaderRight>
        )}
        {user?.loginType === "sell" &&
          location.pathname !== "/seller/center" && (
            <HeaderRight>
              <LoginBtn to="/">
                <img src={UserLogin} alt="" />
                <span>마이페이지</span>
              </LoginBtn>
              <Button to="/seller/center">
                <img src={shoppingIcon} alt="" />
                <span>판매자 센터</span>
              </Button>
            </HeaderRight>
          )}
      </S_Header>
    </HeaderWrapper>
  );
}
