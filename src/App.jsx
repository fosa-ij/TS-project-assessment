import "./App.css";
// import Button from 'react-bootstrap/Button';
import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import BgImg from "./assets/header-svg/bgImage.svg";
import SocialProof from "./components/social-proof/sp";
import Info from "./components/info/info";
import Footer from "./components/footer/Footer";
import Faq from "./components/FAQ/Faq";

function App() {
  const style = {
    backgroundImage: `url(${BgImg})`,
    height: "85vh",
    position: "absolute",
    top: "0%",
    left: "5%",
    right: "5%",
  };

  return (
    <>
      <Container>
        <div style={style}>
          <Header />
          <SocialProof />
          <Info />
          <Faq />
          <Footer />
        </div>
      </Container>
    </>
  );
}

export default App;