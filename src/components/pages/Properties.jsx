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
import HeroBg from "../../assets/Hero-bg.jpg";
import { Link } from "react-router-dom";
function Properties() {
  const heroWrapperStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${HeroBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "10vh",
    display: "flex",
    flexDirection: "column",
    position: "relative",
  };

  return (
    <>
      <div style={heroWrapperStyle}>
        <img
          src="/images/BOC logo.png"
          className="img-fluid position-absolute top-0 ms-3 mt-3"
          style={{ height: "60px", width: "80px" }}
        ></img>
        <Navbar expand="lg" variant="dark" className="mt-4 py-1 ">
          <Container fluid>
            <Navbar.Toggle
              aria-controls="navbarScroll"
              className="ms-auto justify-content-center align-content-center"
            />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mx-auto g-3 bg-white  flex-column align-items-center flex-lg-row rounded-5"
                navbarScroll
              >
                <Nav.Link
                  as={Link}
                  to="/"
                  className="px-3 text-dark"
                  style={{ color: "#2A478D" }}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/properties"
                  className="px-3"
                  href="#action2"
                  style={{ color: "#2A478D" }}
                >
                  Properties
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/about"
                  className="px-3 text-dark"
                  href="#action3"
                  style={{ color: "#2A478D" }}
                >
                  About Us
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/contact"
                  className="px-3 text-dark"
                  href="#action4"
                  style={{ color: "#2A478D" }}
                >
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="grow align-items-center justify-content-center">
          <div className="text-center text-white">
            <h1
              className="display-1 mt-5 fw-light"
              style={{
                color: "#2A478D",
                fontFamily: "Georgia",
                fontSize: "30px",
              }}
            >
              All Available Properties At BOC
            </h1>
            <h1
              className="display-3  mb-5 fw-light"
              style={{
                color: "#2A478D",
                fontFamily: "Georgia",
                fontSize: "20px",
              }}
            >
              varieties of options to pick from
            </h1>
          </div>
        </div>
      </div>

      <div
        className="container-fluid bg-white"
        style={{ paddingTop: "100px " }}
      >
        <div className="container-fluid px-3 px-md-4 text-center">
          <h1
            className="display-5 fw-light"
            style={{ color: "#2A478D", fontFamily: "Georgia" }}
          >
            All Properties
          </h1>
          <p className="text-muted mb-5">Various options to pick from</p>
        </div>
        <div
          className="row flex-nowrap flex-md-wrap overflow-auto overflow-md-visible pb-3 g-3 g-md-0 ms-3"
          style={{ fontFamily: "Georgia", scrollSnapType: "x mandatory" }}
        >
          <div
            className="col-10 col-lg-4 col-xl-4 col-md-6 rounded-3 border-0 mb-4 h-100 pe-3"
            style={{ objectFit: "cover" }}
          >
            <div className="card shadow border-0">
              <div className="position-relative">
                <img src="/images/Hotel-one.jpg" className="card-img-top"></img>
                <div className="card-body text-start">
                  <span
                    className="badge btn position-absolute bg-white rounded-5 py-2 top-0 mt-2 ms-0 px-3 "
                    style={{ color: "#2A478D" }}
                  >
                    BUY
                  </span>
                  <span className="badge btn position-absolute bg-dark text-white rounded-4 py-2 inset-e-0 me-3 top-0 mt-2  px-3 align ">
                    FEATURED
                  </span>
                  <p className="mb-1">
                    Luxury 4-Bedroom Duplex in Lekki Phase 1
                  </p>
                  <p className="text-muted my-1">Lekki Phase 1, Lagos</p>
                  <p className="text-muted my-1"> 4 Beds 5 Baths 450 SQM</p>
                  <div className="position-relative mt-3">
                    <p style={{ color: "#2A478D" }} className=" h4 fw-bold">
                      125.0M
                      <Link to="/buy1">
                        <span
                          className="inset-e-0 position-absolute fw-bold py-2 px-3 rounded-3"
                          style={{
                            color: "#2A478D",
                            border: "1px solid #2A478D",
                            fontFamily: "Arial",
                            fontSize: "16px",
                          }}
                        >
                          View Details
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-10 col-lg-4 col-xl-4 col-md-6 rounded-3 border-0 mb-4 h-100 pe-3"
            style={{ objectFit: "cover" }}
          >
            <div className="card shadow border-0">
              <div className="position-relative">
                <img src="/images/Hotel-one.jpg" className="card-img-top"></img>
                <div className="card-body text-start">
                  <span
                    className="badge btn position-absolute bg-white rounded-5 py-2 top-0 mt-2 ms-0 px-3 "
                    style={{ color: "#2A478D" }}
                  >
                    RENT
                  </span>
                  <span className="badge btn position-absolute bg-dark text-white rounded-4 py-2 inset-s-0 me-3 top-0 mt-2  px-3 align ">
                    FEATURED
                  </span>
                  <p className="mb-1">
                    Luxury 4-Bedroom Duplex in Lekki Phase 1
                  </p>
                  <p className="text-muted my-1">Lekki Phase 1, Lagos</p>
                  <p className="text-muted my-1">
                    {" "}
                    4 Beds<span> 5 Baths</span>
                    <span> 450 SQM</span>
                  </p>
                  <div className="position-relative mt-3">
                    <p style={{ color: "#2A478D" }} className=" h4 fw-bold">
                      20.0M
                      <Link to="/rent1">
                        <span
                          className="inset-e-0 position-absolute fw-bold py-2 px-3 rounded-3"
                          style={{
                            color: "#2A478D",
                            border: "1px solid #2A478D",
                            fontFamily: "Arial",
                            fontSize: "16px",
                          }}
                        >
                          View Details
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-10 col-lg-4 col-xl-4 col-md-6 rounded-3 border-0 mb-4 h-100 pe-3 "
            style={{ objectFit: "cover" }}
          >
            <div className="card shadow border-0">
              <div className="position-relative">
                <img src="/images/Hotel-2.jpg" className="card-img-top"></img>
                <div className="card-body text-start">
                  <span
                    className="badge btn position-absolute bg-white  rounded-5 py-2 top-0 mt-2 ms-0 px-3 "
                    style={{ color: "#2A478D" }}
                  >
                    RENT
                  </span>
                  <span className="badge btn position-absolute bg-dark text-white rounded-4 py-2 inset-e-0 me-3 top-0 mt-2  px-3 align ">
                    FEATURED
                  </span>
                  <p className="mb-1">
                    Luxury 5-Bedroom Duplex in Lekki Phase 1
                  </p>
                  <p className="text-muted my-1">Lekki Phase 1, Lagos</p>
                  <p className="text-muted my-1"> 5 Beds 5 Baths 450 SQM</p>
                  <div className="position-relative mt-3">
                    <p style={{ color: "#2A478D" }} className=" h4 fw-bold">
                      50.0M
                      <Link to="/rent2" className="text-dark">
                        <span
                          className="inset-e-0 position-absolute fw-bold py-2 px-3 rounded-3"
                          style={{
                            color: "#2A478D",
                            border: "1px solid #2A478D",
                            fontFamily: "Arial",
                            fontSize: "16px",
                          }}
                        >
                          View Details
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-10 col-lg-4 col-xl-4 col-md-6 rounded-3 border-0 mb-4 h-100 pe-3"
            style={{ objectFit: "cover" }}
          >
            <div className="card shadow border-0">
              <div className="position-relative">
                <img src="/images/Hotel-one.jpg" className="card-img-top"></img>
                <div className="card-body text-start">
                  <span
                    className="badge btn position-absolute bg-white  rounded-5 py-2 top-0 mt-2 ms-0 px-3 "
                    style={{ color: "#2A478D" }}
                  >
                    LEASE
                  </span>
                  <span className="badge btn position-absolute bg-dark text-white rounded-4 py-2 inset-e-0 me-3 top-0 mt-2  px-3 align ">
                    FEATURED
                  </span>
                  <p className="mb-1">
                    Luxury 4-Bedroom Duplex in Lekki Phase 1
                  </p>
                  <p className="text-muted my-1">Lekki Phase 1, Lagos</p>
                  <p className="text-muted my-1"> 4 Beds 5 Baths 450 SQM</p>
                  <div className="position-relative mt-3">
                    <p style={{ color: "#2A478D" }} className=" h4 fw-bold">
                      100.0M
                      <Link to="/lease1">
                        <span
                          className="inset-e-0 position-absolute fw-bold py-2 px-3 rounded-3"
                          style={{
                            color: "#2A478D",
                            border: "1px solid #2A478D",
                            fontFamily: "Arial",
                            fontSize: "16px",
                          }}
                        >
                          View Details
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-10 col-lg-4 col-xl-4 col-md-6 rounded-3 border-0 mb-4 h-100 pe-3"
            style={{ objectFit: "cover" }}
          >
            <div className="card shadow border-0">
              <div className="position-relative">
                <img src="/images/Hotel-3.jpg" className="card-img-top"></img>
                <div className="card-body text-start">
                  <span
                    className="badge btn position-absolute bg-white  rounded-5 py-2 top-0 mt-2 ms-0 px-3 "
                    style={{ color: "#2A478D" }}
                  >
                    RENT
                  </span>
                  <span className="badge btn position-absolute bg-dark text-white rounded-4 py-2 inset-e-0 me-3 top-0 mt-2  px-3 align ">
                    FEATURED
                  </span>
                  <p className="mb-1">
                    Luxury 3-Bedroom Duplex in Lekki Phase 1
                  </p>
                  <p className="text-muted my-1">Lekki Phase 1, Lagos</p>
                  <p className="text-muted my-1">
                    {" "}
                    3 Beds<span> 5 Baths</span>
                    <span> 450 SQM</span>
                  </p>
                  <div className="position-relative mt-3">
                    <p style={{ color: "#2A478D" }} className=" h4 fw-bold">
                      15.0M
                      <Link to="/rent3">
                        <span
                          className="inset-e-0 position-absolute fw-bold py-2 px-3 rounded-3"
                          style={{
                            color: "#2A478D",
                            border: "1px solid #2A478D",
                            fontFamily: "Arial",
                            fontSize: "16px",
                          }}
                        >
                          View Details
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-10 col-lg-4 col-xl-4 col-md-6 rounded-3 border-0 mb-4 h-100 pe-3 "
            style={{ objectFit: "cover" }}
          >
            <div className="card shadow border-0">
              <div className="position-relative">
                <img src="/images/Hotel-2.jpg" className="card-img-top"></img>
                <div className="card-body text-start">
                  <span
                    className="badge btn position-absolute bg-white rounded-5 py-2 top-0 mt-2 ms-0 px-3 "
                    style={{ color: "#2A478D" }}
                  >
                    LEASE
                  </span>
                  <span className="badge btn position-absolute bg-dark text-white rounded-4 py-2 inset-e-0 me-3 top-0 mt-2  px-3 align ">
                    FEATURED
                  </span>
                  <p className="mb-1">
                    Luxury 5-Bedroom Duplex in Lekki Phase 1
                  </p>
                  <p className="text-muted my-1">Lekki Phase 1, Lagos</p>
                  <p className="text-muted my-1"> 5 Beds 5 Baths 450 SQM</p>
                  <div className="position-relative mt-3">
                    <p style={{ color: "#2A478D" }} className=" h4 fw-bold">
                      205.0M
                      <Link to="/lease2" className="text-dark">
                        <span
                          className="inset-e-0 position-absolute fw-bold py-2 px-3 rounded-3"
                          style={{
                            color: "#2A478D",
                            border: "1px solid #2A478D",
                            fontFamily: "Arial",
                            fontSize: "16px",
                          }}
                        >
                          View Details
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-10 col-lg-4 col-xl-4 col-md-6 rounded-3 border-0 mb-4 h-100 pe-3"
            style={{ objectFit: "cover" }}
          >
            <div className="card shadow border-0">
              <div className="position-relative">
                <img src="/images/Hotel-3.jpg" className="card-img-top"></img>
                <div className="card-body text-start">
                  <span
                    className="badge btn position-absolute bg-white rounded-5 py-2 top-0 mt-2 ms-0 px-3 "
                    style={{ color: "#2A478D" }}
                  >
                    RENT
                  </span>
                  <span className="badge btn position-absolute bg-dark text-white rounded-4 py-2 inset-e-0 me-3 top-0 mt-2  px-3 align ">
                    FEATURED
                  </span>
                  <p className="mb-1">
                    Luxury 4-Bedroom Duplex in Lekki Phase 1
                  </p>
                  <p className="text-muted my-1">Lekki Phase 1, Lagos</p>
                  <p className="text-muted my-1"> 4 Beds 5 Baths 450 SQM</p>
                  <div className="position-relative mt-3">
                    <p style={{ color: "#2A478D" }} className=" h4 fw-bold">
                      15.0M
                      <Link to="/rent3">
                        <span
                          className="inset-e-0 position-absolute fw-bold py-2 px-3 rounded-3"
                          style={{
                            color: "#2A478D",
                            border: "1px solid #2A478D",
                            fontFamily: "Arial",
                            fontSize: "16px",
                          }}
                        >
                          View Details
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-10 col-lg-4 col-xl-4 col-md-6 rounded-3 border-0 mb-4 h-100 pe-3"
            style={{ objectFit: "cover" }}
          >
            <div className="card shadow border-0">
              <div className="position-relative">
                <img src="/images/Hotel-one.jpg" className="card-img-top"></img>
                <div className="card-body text-start">
                  <span
                    className="badge btn position-absolute bg-white rounded-5 py-2 top-0 mt-2 ms-0 px-3 "
                    style={{ color: "#2A478D" }}
                  >
                    BUY
                  </span>
                  <span className="badge btn position-absolute bg-dark text-white rounded-4 py-2 inset-e-0 me-3 top-0 mt-2  px-3 align ">
                    FEATURED
                  </span>
                  <p className="mb-1">
                    Luxury 4-Bedroom Duplex in Lekki Phase 1
                  </p>
                  <p className="text-muted my-1">Lekki Phase 1, Lagos</p>
                  <p className="text-muted my-1"> 4 Beds 5 Baths 450 SQM</p>
                  <div className="position-relative mt-3">
                    <p style={{ color: "#2A478D" }} className=" h4 fw-bold">
                      125.0M
                      <Link to="/buy1">
                        <span
                          className="inset-e-0 position-absolute fw-bold py-2 px-3 rounded-3"
                          style={{
                            color: "#2A478D",
                            border: "1px solid #2A478D",
                            fontFamily: "Arial",
                            fontSize: "16px",
                          }}
                        >
                          View Details
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-10 col-lg-4 col-xl-4 col-md-6 rounded-3 border-0 mb-4 h-100 pe-3"
            style={{ objectFit: "cover" }}
          >
            <div className="card shadow border-0">
              <div className="position-relative">
                <img src="/images/Hotel-one.jpg" className="card-img-top"></img>
                <div className="card-body text-start">
                  <span
                    className="badge btn position-absolute bg-white rounded-5 py-2 top-0 mt-2 ms-0 px-3 "
                    style={{ color: "#2A478D" }}
                  >
                    RENT
                  </span>
                  <span className="badge btn position-absolute bg-dark text-white rounded-4 py-2 inset-e-0 me-3 top-0 mt-2  px-3 align ">
                    FEATURED
                  </span>
                  <p className="mb-1">
                    Luxury 4-Bedroom Duplex in Lekki Phase 1
                  </p>
                  <p className="text-muted my-1">Lekki Phase 1, Lagos</p>
                  <p className="text-muted my-1">
                    {" "}
                    4 Beds<span> 5 Baths</span>
                    <span> 450 SQM</span>
                  </p>
                  <div className="position-relative mt-3">
                    <p style={{ color: "#2A478D" }} className=" h4 fw-bold">
                      20.0M
                      <Link to="/rent1">
                        <span
                          className="inset-e-0 position-absolute fw-bold py-2 px-3 rounded-3"
                          style={{
                            color: "#2A478D",
                            border: "1px solid #2A478D",
                            fontFamily: "Arial",
                            fontSize: "16px",
                          }}
                        >
                          View Details
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-10 col-lg-4 col-xl-4 col-md-6 rounded-3 border-0 mb-4 h-100 pe-3 "
            style={{ objectFit: "cover" }}
          >
            <div className="card shadow border-0">
              <div className="position-relative">
                <img src="/images/Hotel-2.jpg" className="card-img-top"></img>
                <div className="card-body text-start">
                  <span
                    className="badge btn position-absolute bg-white  rounded-5 py-2 top-0 mt-2 ms-0 px-3 "
                    style={{ color: "#2A478D" }}
                  >
                    RENT
                  </span>
                  <span className="badge btn position-absolute bg-dark text-white rounded-4 py-2 inset-e-0 me-3 top-0 mt-2  px-3 align ">
                    FEATURED
                  </span>
                  <p className="mb-1">
                    Luxury 5-Bedroom Duplex in Lekki Phase 1
                  </p>
                  <p className="text-muted my-1">Lekki Phase 1, Lagos</p>
                  <p className="text-muted my-1"> 5 Beds 5 Baths 450 SQM</p>
                  <div className="position-relative mt-3">
                    <p style={{ color: "#2A478D" }} className=" h4 fw-bold">
                      50.0M
                      <Link to="/rent2" className="text-dark">
                        <span
                          className="inset-e-0 position-absolute fw-bold py-2 px-3 rounded-3"
                          style={{
                            color: "#2A478D",
                            border: "1px solid #2A478D",
                            fontFamily: "Arial",
                            fontSize: "16px",
                          }}
                        >
                          View Details
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-10 col-lg-4 col-xl-4 col-md-6 rounded-3 border-0 mb-4 h-100 pe-3"
            style={{ objectFit: "cover" }}
          >
            <div className="card shadow border-0">
              <div className="position-relative">
                <img src="/images/Hotel-one.jpg" className="card-img-top"></img>
                <div className="card-body text-start">
                  <span
                    className="badge btn position-absolute bg-white  rounded-5 py-2 top-0 mt-2 ms-0 px-3 "
                    style={{ color: "#2A478D" }}
                  >
                    LEASE
                  </span>
                  <span className="badge btn position-absolute bg-dark text-white rounded-4 py-2 inset-e-0 me-3 top-0 mt-2  px-3 align ">
                    FEATURED
                  </span>
                  <p className="mb-1">
                    Luxury 4-Bedroom Duplex in Lekki Phase 1
                  </p>
                  <p className="text-muted my-1">Lekki Phase 1, Lagos</p>
                  <p className="text-muted my-1"> 4 Beds 5 Baths 450 SQM</p>
                  <div className="position-relative mt-3">
                    <p style={{ color: "#2A478D" }} className=" h4 fw-bold">
                      100.0M
                      <Link to="/lease1">
                        <span
                          className="inset-e-0 position-absolute fw-bold py-2 px-3 rounded-3"
                          style={{
                            color: "#2A478D",
                            border: "1px solid #2A478D",
                            fontFamily: "Arial",
                            fontSize: "16px",
                          }}
                        >
                          View Details
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-10 col-lg-4 col-xl-4 col-md-6 rounded-3 border-0 mb-4 h-100 pe-3"
            style={{ objectFit: "cover" }}
          >
            <div className="card shadow border-0">
              <div className="position-relative">
                <img src="/images/Hotel-3.jpg" className="card-img-top"></img>
                <div className="card-body text-start">
                  <span
                    className="badge btn position-absolute bg-white  rounded-5 py-2 top-0 mt-2 ms-0 px-3 "
                    style={{ color: "#2A478D" }}
                  >
                    RENT
                  </span>
                  <span className="badge btn position-absolute bg-dark text-white rounded-4 py-2 inset-e-0 me-3 top-0 mt-2  px-3 align ">
                    FEATURED
                  </span>
                  <p className="mb-1">
                    Luxury 3-Bedroom Duplex in Lekki Phase 1
                  </p>
                  <p className="text-muted my-1">Lekki Phase 1, Lagos</p>
                  <p className="text-muted my-1">
                    {" "}
                    3 Beds<span> 5 Baths</span>
                    <span> 450 SQM</span>
                  </p>
                  <div className="position-relative mt-3">
                    <p style={{ color: "#2A478D" }} className=" h4 fw-bold">
                      15.0M
                      <Link to="/rent3">
                        <span
                          className="inset-e-0 position-absolute fw-bold py-2 px-3 rounded-3"
                          style={{
                            color: "#2A478D",
                            border: "1px solid #2A478D",
                            fontFamily: "Arial",
                            fontSize: "16px",
                          }}
                        >
                          View Details
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-10 col-lg-4 col-xl-4 col-md-6 rounded-3 border-0 mb-4 h-100 pe-3 "
            style={{ objectFit: "cover" }}
          >
            <div className="card shadow border-0">
              <div className="position-relative">
                <img src="/images/Hotel-2.jpg" className="card-img-top"></img>
                <div className="card-body text-start">
                  <span
                    className="badge btn position-absolute bg-white rounded-5 py-2 top-0 mt-2 ms-0 px-3 "
                    style={{ color: "#2A478D" }}
                  >
                    LEASE
                  </span>
                  <span className="badge btn position-absolute bg-dark text-white rounded-4 py-2 inset-e-0 me-3 top-0 mt-2  px-3 align ">
                    FEATURED
                  </span>
                  <p className="mb-1">
                    Luxury 5-Bedroom Duplex in Lekki Phase 1
                  </p>
                  <p className="text-muted my-1">Lekki Phase 1, Lagos</p>
                  <p className="text-muted my-1"> 5 Beds 5 Baths 450 SQM</p>
                  <div className="position-relative mt-3">
                    <p style={{ color: "#2A478D" }} className=" h4 fw-bold">
                      205.0M
                      <Link to="/lease2" className="text-dark">
                        <span
                          className="inset-e-0 position-absolute fw-bold py-2 px-3 rounded-3"
                          style={{
                            color: "#2A478D",
                            border: "1px solid #2A478D",
                            fontFamily: "Arial",
                            fontSize: "16px",
                          }}
                        >
                          View Details
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-10 col-lg-4 col-xl-4 col-md-6 rounded-3 border-0 mb-4 h-100 pe-3"
            style={{ objectFit: "cover" }}
          >
            <div className="card shadow border-0">
              <div className="position-relative">
                <img src="/images/Hotel-3.jpg" className="card-img-top"></img>
                <div className="card-body text-start">
                  <span
                    className="badge btn position-absolute bg-white rounded-5 py-2 top-0 mt-2 ms-0 px-3 "
                    style={{ color: "#2A478D" }}
                  >
                    RENT
                  </span>
                  <span className="badge btn position-absolute bg-dark text-white rounded-4 py-2 inset-e-0 me-3 top-0 mt-2  px-3 align ">
                    FEATURED
                  </span>
                  <p className="mb-1">
                    Luxury 4-Bedroom Duplex in Lekki Phase 1
                  </p>
                  <p className="text-muted my-1">Lekki Phase 1, Lagos</p>
                  <p className="text-muted my-1"> 4 Beds 5 Baths 450 SQM</p>
                  <div className="position-relative mt-3">
                    <p style={{ color: "#2A478D" }} className=" h4 fw-bold">
                      15.0M
                      <Link to="/rent3">
                        <span
                          className="inset-e-0 position-absolute fw-bold py-2 px-3 rounded-3"
                          style={{
                            color: "#2A478D",
                            border: "1px solid #2A478D",
                            fontFamily: "Arial",
                            fontSize: "16px",
                          }}
                        >
                          View Details
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-10 col-lg-4 col-xl-4 col-md-6 rounded-3 border-0 mb-4 h-100 pe-3"
            style={{ objectFit: "cover" }}
          >
            <div className="card shadow border-0">
              <div className="position-relative">
                <img src="/images/Hotel-one.jpg" className="card-img-top"></img>
                <div className="card-body text-start">
                  <span
                    className="badge btn position-absolute bg-white rounded-5 py-2 top-0 mt-2 ms-0 px-3 "
                    style={{ color: "#2A478D" }}
                  >
                    BUY
                  </span>
                  <span className="badge btn position-absolute bg-dark text-white rounded-4 py-2 inset-e-0 me-3 top-0 mt-2  px-3 align ">
                    FEATURED
                  </span>
                  <p className="mb-1">
                    Luxury 4-Bedroom Duplex in Lekki Phase 1
                  </p>
                  <p className="text-muted my-1">Lekki Phase 1, Lagos</p>
                  <p className="text-muted my-1"> 4 Beds 5 Baths 450 SQM</p>
                  <div className="position-relative mt-3">
                    <p style={{ color: "#2A478D" }} className=" h4 fw-bold">
                      125.0M
                      <Link to="/buy1">
                        <span
                          className="inset-e-0 position-absolute fw-bold py-2 px-3 rounded-3"
                          style={{
                            color: "#2A478D",
                            border: "1px solid #2A478D",
                            fontFamily: "Arial",
                            fontSize: "16px",
                          }}
                        >
                          View Details
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-10 col-lg-4 col-xl-4 col-md-6 rounded-3 border-0 mb-4 h-100 pe-3"
            style={{ objectFit: "cover" }}
          >
            <div className="card shadow border-0">
              <div className="position-relative">
                <img src="/images/Hotel-one.jpg" className="card-img-top"></img>
                <div className="card-body text-start">
                  <span
                    className="badge btn position-absolute bg-white rounded-5 py-2 top-0 mt-2 ms-0 px-3 "
                    style={{ color: "#2A478D" }}
                  >
                    RENT
                  </span>
                  <span className="badge btn position-absolute bg-dark text-white rounded-4 py-2 inset-e-0 me-3 top-0 mt-2  px-3 align ">
                    FEATURED
                  </span>
                  <p className="mb-1">
                    Luxury 4-Bedroom Duplex in Lekki Phase 1
                  </p>
                  <p className="text-muted my-1">Lekki Phase 1, Lagos</p>
                  <p className="text-muted my-1">
                    {" "}
                    4 Beds<span> 5 Baths</span>
                    <span> 450 SQM</span>
                  </p>
                  <div className="position-relative mt-3">
                    <p style={{ color: "#2A478D" }} className=" h4 fw-bold">
                      20.0M
                      <Link to="/rent1">
                        <span
                          className="inset-e-0 position-absolute fw-bold py-2 px-3 rounded-3"
                          style={{
                            color: "#2A478D",
                            border: "1px solid #2A478D",
                            fontFamily: "Arial",
                            fontSize: "16px",
                          }}
                        >
                          View Details
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-10 col-lg-4 col-xl-4 col-md-6 rounded-3 border-0 mb-4 h-100 pe-3 "
            style={{ objectFit: "cover" }}
          >
            <div className="card shadow border-0">
              <div className="position-relative">
                <img src="/images/Hotel-2.jpg" className="card-img-top"></img>
                <div className="card-body text-start">
                  <span
                    className="badge btn position-absolute bg-white  rounded-5 py-2 top-0 mt-2 ms-0 px-3 "
                    style={{ color: "#2A478D" }}
                  >
                    RENT
                  </span>
                  <span className="badge btn position-absolute bg-dark text-white rounded-4 py-2 inset-e-0 me-3 top-0 mt-2  px-3 align ">
                    FEATURED
                  </span>
                  <p className="mb-1">
                    Luxury 5-Bedroom Duplex in Lekki Phase 1
                  </p>
                  <p className="text-muted my-1">Lekki Phase 1, Lagos</p>
                  <p className="text-muted my-1"> 5 Beds 5 Baths 450 SQM</p>
                  <div className="position-relative mt-3">
                    <p style={{ color: "#2A478D" }} className=" h4 fw-bold">
                      50.0M
                      <Link to="/rent2" className="text-dark">
                        <span
                          className="inset-e-0 position-absolute fw-bold py-2 px-3 rounded-3"
                          style={{
                            color: "#2A478D",
                            border: "1px solid #2A478D",
                            fontFamily: "Arial",
                            fontSize: "16px",
                          }}
                        >
                          View Details
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-10 col-lg-4 col-xl-4 col-md-6 rounded-3 border-0 mb-4 h-100 pe-3"
            style={{ objectFit: "cover" }}
          >
            <div className="card shadow border-0">
              <div className="position-relative">
                <img src="/images/Hotel-one.jpg" className="card-img-top"></img>
                <div className="card-body text-start">
                  <span
                    className="badge btn position-absolute bg-white  rounded-5 py-2 top-0 mt-2 ms-0 px-3 "
                    style={{ color: "#2A478D" }}
                  >
                    LEASE
                  </span>
                  <span className="badge btn position-absolute bg-dark text-white rounded-4 py-2 inset-e-0 me-3 top-0 mt-2  px-3 align ">
                    FEATURED
                  </span>
                  <p className="mb-1">
                    Luxury 4-Bedroom Duplex in Lekki Phase 1
                  </p>
                  <p className="text-muted my-1">Lekki Phase 1, Lagos</p>
                  <p className="text-muted my-1"> 4 Beds 5 Baths 450 SQM</p>
                  <div className="position-relative mt-3">
                    <p style={{ color: "#2A478D" }} className=" h4 fw-bold">
                      100.0M
                      <Link to="/lease1">
                        <span
                          className="inset-e-0 position-absolute fw-bold py-2 px-3 rounded-3"
                          style={{
                            color: "#2A478D",
                            border: "1px solid #2A478D",
                            fontFamily: "Arial",
                            fontSize: "16px",
                          }}
                        >
                          View Details
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-10 col-lg-4 col-xl-4 col-md-6 rounded-3 border-0 mb-4 h-100 pe-3"
            style={{ objectFit: "cover" }}
          >
            <div className="card shadow border-0">
              <div className="position-relative">
                <img src="/images/Hotel-3.jpg" className="card-img-top"></img>
                <div className="card-body text-start">
                  <span
                    className="badge btn position-absolute bg-white  rounded-5 py-2 top-0 mt-2 ms-0 px-3 "
                    style={{ color: "#2A478D" }}
                  >
                    RENT
                  </span>
                  <span className="badge btn position-absolute bg-dark text-white rounded-4 py-2 inset-e-0 me-3 top-0 mt-2  px-3 align ">
                    FEATURED
                  </span>
                  <p className="mb-1">
                    Luxury 3-Bedroom Duplex in Lekki Phase 1
                  </p>
                  <p className="text-muted my-1">Lekki Phase 1, Lagos</p>
                  <p className="text-muted my-1">
                    {" "}
                    3 Beds<span> 5 Baths</span>
                    <span> 450 SQM</span>
                  </p>
                  <div className="position-relative mt-3">
                    <p style={{ color: "#2A478D" }} className=" h4 fw-bold">
                      15.0M
                      <Link to="/rent3">
                        <span
                          className="inset-e-0 position-absolute fw-bold py-2 px-3 rounded-3"
                          style={{
                            color: "#2A478D",
                            border: "1px solid #2A478D",
                            fontFamily: "Arial",
                            fontSize: "16px",
                          }}
                        >
                          View Details
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-10 col-lg-4 col-xl-4 col-md-6 rounded-3 border-0 mb-4 h-100 pe-3 "
            style={{ objectFit: "cover" }}
          >
            <div className="card shadow border-0">
              <div className="position-relative">
                <img src="/images/Hotel-2.jpg" className="card-img-top"></img>
                <div className="card-body text-start">
                  <span
                    className="badge btn position-absolute bg-white rounded-5 py-2 top-0 mt-2 ms-0 px-3 "
                    style={{ color: "#2A478D" }}
                  >
                    LEASE
                  </span>
                  <span className="badge btn position-absolute bg-dark text-white rounded-4 py-2 inset-e-0 me-3 top-0 mt-2  px-3 align ">
                    FEATURED
                  </span>
                  <p className="mb-1">
                    Luxury 5-Bedroom Duplex in Lekki Phase 1
                  </p>
                  <p className="text-muted my-1">Lekki Phase 1, Lagos</p>
                  <p className="text-muted my-1"> 5 Beds 5 Baths 450 SQM</p>
                  <div className="position-relative mt-3">
                    <p style={{ color: "#2A478D" }} className=" h4 fw-bold">
                      205.0M
                      <Link to="/lease2" className="text-dark">
                        <span
                          className="inset-e-0 position-absolute fw-bold py-2 px-3 rounded-3"
                          style={{
                            color: "#2A478D",
                            border: "1px solid #2A478D",
                            fontFamily: "Arial",
                            fontSize: "16px",
                          }}
                        >
                          View Details
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-10 col-lg-4 col-xl-4 col-md-6 rounded-3 border-0 mb-4 h-100 pe-3"
            style={{ objectFit: "cover" }}
          >
            <div className="card shadow border-0">
              <div className="position-relative">
                <img src="/images/Hotel-3.jpg" className="card-img-top"></img>
                <div className="card-body text-start">
                  <span
                    className="badge btn position-absolute bg-white rounded-5 py-2 top-0 mt-2 ms-0 px-3 "
                    style={{ color: "#2A478D" }}
                  >
                    RENT
                  </span>
                  <span className="badge btn position-absolute bg-dark text-white rounded-4 py-2 inset-e-0 me-3 top-0 mt-2  px-3 align ">
                    FEATURED
                  </span>
                  <p className="mb-1">
                    Luxury 4-Bedroom Duplex in Lekki Phase 1
                  </p>
                  <p className="text-muted my-1">Lekki Phase 1, Lagos</p>
                  <p className="text-muted my-1"> 4 Beds 5 Baths 450 SQM</p>
                  <div className="position-relative mt-3">
                    <p style={{ color: "#2A478D" }} className=" h4 fw-bold">
                      15.0M
                      <Link to="/rent3">
                        <span
                          className="inset-e-0 position-absolute fw-bold py-2 px-3 rounded-3"
                          style={{
                            color: "#2A478D",
                            border: "1px solid #2A478D",
                            fontFamily: "Arial",
                            fontSize: "16px",
                          }}
                        >
                          View Details
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-10 col-lg-4 col-xl-4 col-md-6 rounded-3 border-0 mb-4 h-100 pe-3"
            style={{ objectFit: "cover" }}
          >
            <div className="card shadow border-0">
              <div className="position-relative">
                <img src="/images/Hotel-one.jpg" className="card-img-top"></img>
                <div className="card-body text-start">
                  <span
                    className="badge btn position-absolute bg-white rounded-5 py-2 top-0 mt-2 ms-0 px-3 "
                    style={{ color: "#2A478D" }}
                  >
                    BUY
                  </span>
                  <span className="badge btn position-absolute bg-dark text-white rounded-4 py-2 inset-e-0 me-3 top-0 mt-2  px-3 align ">
                    FEATURED
                  </span>
                  <p className="mb-1">
                    Luxury 4-Bedroom Duplex in Lekki Phase 1
                  </p>
                  <p className="text-muted my-1">Lekki Phase 1, Lagos</p>
                  <p className="text-muted my-1"> 4 Beds 5 Baths 450 SQM</p>
                  <div className="position-relative mt-3">
                    <p style={{ color: "#2A478D" }} className=" h4 fw-bold">
                      125.0M
                      <Link to="/buy1">
                        <span
                          className="inset-e-0 position-absolute fw-bold py-2 px-3 rounded-3"
                          style={{
                            color: "#2A478D",
                            border: "1px solid #2A478D",
                            fontFamily: "Arial",
                            fontSize: "16px",
                          }}
                        >
                          View Details
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-10 col-lg-4 col-xl-4 col-md-6 rounded-3 border-0 mb-4 h-100 pe-3"
            style={{ objectFit: "cover" }}
          >
            <div className="card shadow border-0">
              <div className="position-relative">
                <img src="/images/Hotel-one.jpg" className="card-img-top"></img>
                <div className="card-body text-start">
                  <span
                    className="badge btn position-absolute bg-white rounded-5 py-2 top-0 mt-2 ms-0 px-3 "
                    style={{ color: "#2A478D" }}
                  >
                    RENT
                  </span>
                  <span className="badge btn position-absolute bg-dark text-white rounded-4 py-2 inset-e-0 me-3 top-0 mt-2  px-3 align ">
                    FEATURED
                  </span>
                  <p className="mb-1">
                    Luxury 4-Bedroom Duplex in Lekki Phase 1
                  </p>
                  <p className="text-muted my-1">Lekki Phase 1, Lagos</p>
                  <p className="text-muted my-1">
                    {" "}
                    4 Beds<span> 5 Baths</span>
                    <span> 450 SQM</span>
                  </p>
                  <div className="position-relative mt-3">
                    <p style={{ color: "#2A478D" }} className=" h4 fw-bold">
                      20.0M
                      <Link to="/rent1">
                        <span
                          className="inset-e-0 position-absolute fw-bold py-2 px-3 rounded-3"
                          style={{
                            color: "#2A478D",
                            border: "1px solid #2A478D",
                            fontFamily: "Arial",
                            fontSize: "16px",
                          }}
                        >
                          View Details
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-10 col-lg-4 col-xl-4 col-md-6 rounded-3 border-0 mb-4 h-100 pe-3 "
            style={{ objectFit: "cover" }}
          >
            <div className="card shadow border-0">
              <div className="position-relative">
                <img src="/images/Hotel-2.jpg" className="card-img-top"></img>
                <div className="card-body text-start">
                  <span
                    className="badge btn position-absolute bg-white  rounded-5 py-2 top-0 mt-2 ms-0 px-3 "
                    style={{ color: "#2A478D" }}
                  >
                    RENT
                  </span>
                  <span className="badge btn position-absolute bg-dark text-white rounded-4 py-2 inset-e-0 me-3 top-0 mt-2  px-3 align ">
                    FEATURED
                  </span>
                  <p className="mb-1">
                    Luxury 5-Bedroom Duplex in Lekki Phase 1
                  </p>
                  <p className="text-muted my-1">Lekki Phase 1, Lagos</p>
                  <p className="text-muted my-1"> 5 Beds 5 Baths 450 SQM</p>
                  <div className="position-relative mt-3">
                    <p style={{ color: "#2A478D" }} className=" h4 fw-bold">
                      50.0M
                      <Link to="/rent2" className="text-dark">
                        <span
                          className="inset-e-0 position-absolute fw-bold py-2 px-3 rounded-3"
                          style={{
                            color: "#2A478D",
                            border: "1px solid #2A478D",
                            fontFamily: "Arial",
                            fontSize: "16px",
                          }}
                        >
                          View Details
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Properties;
