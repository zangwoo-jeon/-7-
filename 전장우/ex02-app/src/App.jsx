import "./App.css";
import styled from "styled-components";
import Header from "./ex02/Header";
import Nav from "./ex02/Nav";
import Main from "./ex02/Main";
import Footer from "./ex02/Footer";

const Root = styled.div``;

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
