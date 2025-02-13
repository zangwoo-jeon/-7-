import styled from "styled-components";

const NavDiv = styled.div`
  background-color: green;
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

function Nav() {
  return (
    <>
      <NavDiv>
        <P>Nav</P>
      </NavDiv>
    </>
  );
}

export default Nav;
