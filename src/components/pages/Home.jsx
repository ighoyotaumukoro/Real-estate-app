import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
import MyNavbar from "../inc/Navbar";
import Headsection from "../inc/Headsection";
import Herosection from "../inc/Herosection";
import WhyBoc from "../inc/WhyBoc";
import Footer from "../inc/Footer";
import Reviews from "../inc/Reviews";
import HeroBg from "../../assets/Hero-bg.jpg";
import { Link } from "react-router-dom";
function Home() {
  const heroWrapperStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1)), url(${HeroBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "60vh",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    paddingBottom: "20vh",
  };

  return (
    <>
      <Headsection />
      <Herosection />
      <WhyBoc />
      <Reviews />
      <div className="d-none d-md-block">
        <Footer />
      </div>
    </>
  );
}

export default Home;
