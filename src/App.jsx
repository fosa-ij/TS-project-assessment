import "./App.css";
// import Button from 'react-bootstrap/Button';
import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import BgImg from "./assets/header-svg/bgImage.svg";
import SocialProof from "./components/social-proof/sp";
import Info from "./components/info/Info";
import Footer from "./components/footer/Footer";
import Faq from "./components/FAQ/Faq";
import Subscription from "./components/subscription/Index";
import Reviews from "./components/reviews/Reviews";

function App() {
  const style = {
    backgroundImage: `url(${BgImg})`,
    height: "78vh",
    position: "absolute",
    top: "0%",
    left: "5%",
    right: "5%",
    margin: "auto 6rem"
  };

  return (
    <>
      <Container>
        <div style={style}>
          <Header />
          <SocialProof />
          <Info />
          <Reviews />
          <Faq />
          <Subscription />
          <Footer />
        </div>
      </Container>
    </>
  );
}

export default App;