import styled from "styled-components";

const NavDiv = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  background-color: lightgrey;
  /* color: white; */
  padding: 5px;
`;

const Li = styled.li`
  margin-right: 10px;
  list-style: none;
`;

function Nav() {
  return (
    <>
      <NavDiv>
        <Li>Subscribe</Li>
        <Li>About</Li>
        <Li>Author</Li>
        <Li>Send us Email</Li>
      </NavDiv>
    </>
  );
}

export default Nav;
