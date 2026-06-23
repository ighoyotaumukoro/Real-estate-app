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
  
  return (
    <>
      <div><a href="https://wa.me/2348144697306" >
        <span
          className="btn position-fixed rounded-circle "
          style={{
            bottom: "20px",
            right: "20px",
            width: "60px",
            height: "60px",
            backgroundColor: "rgb(44, 212, 11)",
            zIndex:"20",
          }}
        >
        <span
          className="btn   position-fixed "
          style={{
            bottom: "20px",
            right: "20px",
            width: "30px",
            height: "30px",
            border: "3px solid white",
            borderRadius: "30px 30px 30px 1px",
            position:"fixed",
            margin:"15px 15px 15px 15px"
          }}
        ></span>
        </span>
        </a>
      </div>

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
