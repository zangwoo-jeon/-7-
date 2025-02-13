import styled from "styled-components";

const HeadDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const H1 = styled.h1`
  margin: 0;
`;

function Header() {
  return (
    <>
      <HeadDiv>
        <H1>골든리트리버 - Golden Retriever</H1>
      </HeadDiv>
    </>
  );
}

export default Header;
