import styled from "styled-components";

const HeadDiv = styled.div`
  background-color: purple;
  color: white;

  height: 50px;
  width: 100%;

  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const P = styled.p`
  margin: 0;
`;

function Header() {
  return (
    <>
      <HeadDiv>
        <P>Header</P>
      </HeadDiv>
    </>
  );
}

export default Header;
