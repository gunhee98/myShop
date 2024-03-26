import styled from "styled-components";
import Img from "../assets/img.png";
import Header from "../components/Header";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const SliderWrapper = styled.div`
  width: 100%;
  height: 500px;
  background-color: gray;
  margin-top: 8rem;
  margin-bottom: 1rem;
`;
const ProductWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;
const ProductSection = styled.section`
  width: 1250px;
`;
const ProductList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
`;
const ProductItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const ProductImg = styled.img`
  width: 300px;
  aspect-ratio: 1/1;
`;
const ProductIntro = styled.span`
  font-size: 1.2rem;
`;
const ProductName = styled.span`
  font-size: 1.6rem;
  font-weight: bold;
`;
const ProductPrice = styled.span`
  font-size: 1.2rem;
`;

export default function Home() {
  const [loading, setLoading] = useState(true);
  const user = useContext(AuthContext);
  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user]);
  return (
    <>
      {loading ? (
        <div>로딩중....</div>
      ) : (
        <>
          <Header />
          <SliderWrapper></SliderWrapper>
          <ProductWrapper>
            <ProductSection>
              <ProductList>
                <ProductItem>
                  <ProductImg src={Img} alt="" />
                  <ProductName>Hack Your Life 개발자 노트북 파우치</ProductName>
                  <ProductIntro>우당탕탕 라이캣의 실험실</ProductIntro>
                  <ProductPrice>29,000원</ProductPrice>
                </ProductItem>
                <ProductItem>
                  <ProductImg src={Img} alt="" />
                  <ProductName>Hack Your Life 개발자 노트북 파우치</ProductName>
                  <ProductIntro>우당탕탕 라이캣의 실험실</ProductIntro>
                  <ProductPrice>29,000원</ProductPrice>
                </ProductItem>
                <ProductItem>
                  <ProductImg src={Img} alt="" />
                  <ProductName>Hack Your Life 개발자 노트북 파우치</ProductName>
                  <ProductIntro>우당탕탕 라이캣의 실험실</ProductIntro>
                  <ProductPrice>29,000원</ProductPrice>
                </ProductItem>
                <ProductItem>
                  <ProductImg src={Img} alt="" />
                  <ProductName>Hack Your Life 개발자 노트북 파우치</ProductName>
                  <ProductIntro>우당탕탕 라이캣의 실험실</ProductIntro>
                  <ProductPrice>29,000원</ProductPrice>
                </ProductItem>
                <ProductItem>
                  <ProductImg src={Img} alt="" />
                  <ProductName>Hack Your Life 개발자 노트북 파우치</ProductName>
                  <ProductIntro>우당탕탕 라이캣의 실험실</ProductIntro>
                  <ProductPrice>29,000원</ProductPrice>
                </ProductItem>
              </ProductList>
            </ProductSection>
          </ProductWrapper>
        </>
      )}
    </>
  );
}
