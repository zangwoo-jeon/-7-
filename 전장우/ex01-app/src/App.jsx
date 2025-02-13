import "./App.css";
import Header from "./ex01/Header";
import Nav from "./ex01/Nav";
import styled from "styled-components";
import Main from "./ex01/Main";
import Footer from "./ex01/Footer";

const Root = styled.div`
  /* display: flex; */
  /* flex-wrap: wrap; */
  width: 100%;
  height: 1300px;
`;

function App() {
  return (
    <Root>
      <Header></Header>
      <Nav></Nav>
      <Main></Main>
      <Footer></Footer>
    </Root>
  );
}

export default App;
