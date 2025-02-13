import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import SectionC from "./components/Section";
import AsideC from "./components/Aside";
import Footer from "./components/Footer";

const appStyle = {
  padding: "20px",
};
const wrapStyle = {
  width: "100%",
  minWidth: "760px",
  maxWidth: "1080px",
  margin: "0 auto",
};

//앞에 스타일을 추가하고 싶을 때 , 로 추가
function App() {
  return (
    <div
      style={{
        minWidth: "760px",
        background: "gray",
        color: "white",
        border: "1px solid black",
      }}
    >
      <Header />
      <Nav />
      <Main>
        <SectionC />
        <AsideC />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
