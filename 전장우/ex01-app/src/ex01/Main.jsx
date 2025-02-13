import styled from "styled-components";
import Section from "./Section";
import Aside from "./Aside";

const MainDiv = styled.div`
  /* background-color: #003073; */
  /* color: white; */
  height: 150px;
  width: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Main() {
  return (
    <>
      <MainDiv>
        <Section></Section>
        <Aside></Aside>
      </MainDiv>
    </>
  );
}

export default Main;
