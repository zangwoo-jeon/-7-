import styled from "styled-components";

const AsideDiv = styled.div`
  background-color: orange;
  color: white;
  height: 150px;
  width: 40%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const P = styled.p`
  margin: 0;
`;

function Aside() {
  return (
    <>
      <AsideDiv>
        <P>Aside</P>
      </AsideDiv>
    </>
  );
}

export default Aside;
