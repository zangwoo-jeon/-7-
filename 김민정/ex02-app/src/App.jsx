import "./App.css";
import Header from "./component/Header";
import Nav from "./component/Nav";
import Main from "./component/Main";
import Footer from "./component/Footer";

function App() {
  return (
    <div id="body">
      <div id="wrap">
        <Header></Header>
        <Nav></Nav>
        <Main></Main>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
