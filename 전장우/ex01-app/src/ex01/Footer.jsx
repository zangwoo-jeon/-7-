import styled from "styled-components";

const FootDiv = styled.div`
  background-color: #1c4b1a;
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

function Footer() {
  return (
    <>
      <FootDiv>
        <P>Footer</P>
      </FootDiv>
    </>
  );
}

export default Footer;
