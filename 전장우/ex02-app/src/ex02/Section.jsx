import styled from "styled-components";

const SectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  flex-basis: 20%;
  border: 1px solid green;
`;

const H3 = styled.h3`
  margin: 0;
`;

const UL = styled.ul`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  padding-left: 30px;
`;

const Li = styled.li`
  margin-top: -18px;
  font-size: 20px;
  &::marker {
    font-size: 35px;
  }
`;

function Section() {
  return (
    <>
      <SectionDiv>
        <H3>Golden Retriever</H3>
        <img src="./dog.png" style={{ width: "240px", height: "240px" }}></img>
        <UL>
          <Li>기본특성</Li>
          <Li>단점</Li>
          <Li>키울 시 주의점</Li>
          <Li>파생 혼종견</Li>
        </UL>
      </SectionDiv>
    </>
  );
}

export default Section;
