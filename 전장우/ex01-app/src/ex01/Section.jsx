import styled from "styled-components";

const SectionDiv = styled.div`
  background-color: #003073;
  color: white;
  height: 150px;
  width: 60%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const P = styled.p`
  margin: 0;
`;

function Section() {
  return (
    <>
      <SectionDiv>
        <P>Section</P>
      </SectionDiv>
    </>
  );
}

export default Section;
