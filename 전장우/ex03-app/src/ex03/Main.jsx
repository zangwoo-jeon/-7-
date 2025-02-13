import styled from "styled-components";
import Component from "./Component";

const MainDiv = styled.div`
  padding: 20px;
  margin: 0;
  /* width: 100%; */
`;

const H1 = styled.h1`
  margin: 0;
`;

const CompBox = styled.div`
  display: flex;
  /* flex-direction: row; */
  /* flex-wrap: wrap; */
  justify-content: flex-start;
  /* width: 100%; */

  @media screen and (max-width: 1024px) {
    flex-wrap: wrap;
    /* flex-basis: 60%; */
  }

  @media screen and (max-width: 768px) {
    /* flex-basis: 40%; */
    flex-wrap: wrap;
  }
`;

function Main() {
  return (
    <div>
      <MainDiv>
        <H1>추천 제품</H1>
        <CompBox>
          <Component
            title="프리미엄 노트북"
            cost="1,599,000원"
            content="최신 사양의 고성능 노트북"
            cate="전자기기"
          ></Component>
          <Component
            title="무선 헤드폰"
            cost="299,000원"
            content="프리미엄 사운드의 노이즈 캔슬링 헤드폰"
            cate="전자기기"
          ></Component>
          <Component
            title="스마트 워치"
            cost="399,000원"
            content="피트니스 트래킹과 스마트 연결 가능"
            cate="악세사리"
          ></Component>
        </CompBox>
      </MainDiv>
    </div>
  );
}

export default Main;
