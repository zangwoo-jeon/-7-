import styled from "styled-components";
import Section from "./Section";
import Aside from "./Aside";

const MainDiv = styled.div`
  display: flex;
  padding: 10px;
`;

function Main() {
  return (
    <MainDiv>
      <Section></Section>
      <Aside></Aside>
    </MainDiv>
  );
}

export default Main;
