import styled from "styled-components";

const ComponentDiv = styled.div`
  background-color: white;
  padding: 20px;
  margin-top: 30px;
  margin-right: 30px;
  width: 30%;
  flex-basis: 30%;
  box-sizing: border-box;
  border-radius: 10px;

  @media screen and (max-width: 1024px) {
    width: 50%;
    margin-right: 15px;
    flex-basis: 45%;
  }

  @media screen and (max-width: 768px) {
    flex-grow: 1;
    width: 90%;
    margin-right: auto;
    margin-left: auto;
    flex-basis: 60%;
  }
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const H3 = styled.h3`
  display: flex;
  margin: 0;
`;

const Button = styled.button`
  background-color: #0048ff;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 10px;
`;

function Component(props) {
  return (
    <ComponentDiv>
      <TitleBox>
        <H3>{props.title}</H3>
        <H3 style={{ color: "#0048ff" }}>{props.cost}</H3>
      </TitleBox>
      <p>{props.content}</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            display: "inline",
            backgroundColor: "#d1e8ff",
            color: "#0048ff",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <span>{props.cate}</span>
        </div>
        <Button>장바구니 담기</Button>
      </div>
    </ComponentDiv>
  );
}

export default Component;
