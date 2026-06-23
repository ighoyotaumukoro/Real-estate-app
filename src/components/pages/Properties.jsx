import React from "react";
import Footer from "../inc/Footer";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
import HeroBg from "../../assets/Hero-bg.jpg";
import { Link } from "react-router-dom";
import { property } from "../../data/Properties";
function Properties() {
  const heroWrapperStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${HeroBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    marginRight: "15px",
    marginLeft: "15px",
    marginTop: "15px",
    flexDirection: "column",
    position: "relative",
    marginBottom: "15px",
  };

  return (
    <>
      <div className="rounded-4" style={heroWrapperStyle}>
        <img
          src="/images/BOC logo.png"
          className="img-fluid position-absolute top-0 ms-5 mt-3"
          style={{ height: "60px", width: "80px" }}
        ></img>
        <Navbar expand="lg" variant="dark" className="mt-4 py-1">
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
                  className="text-dark px-3"
                  
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/properties"
                  className="px-3 "
                  style={{ color: "#2A478D" }}
                  href="#action2"
                >
                  Properties
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to=""
                  className="px-3 text-dark"
                  
                  href="#action3"
                >
                  About Us
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/contact"
                  className="px-3 text-dark"
                  href="#action4"
                >
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="grow d-flex align-items-start justify-content-start">
          <div className="container text-start text-white ps-5">
            <h1
              className="display-3 mt-5 fw-light"
              style={{ color: "#2A478D", fontFamily: "Helvitica" }}
            >
              Properties for Sale
            </h1>
            <p className="col-lg-8 mb-5">8 properties found</p>
          </div>
        </div>
      </div>

      <div className="container-fluid px-3 px-md-4">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-4 col-xl-4">
            <div className="card shadow mt-3 border-0">
              <div className="card-body text-start">
                <p
                  className="fw-bold mt-0"
                  style={{ fontFamily: "Helvitical" }}
                >
                  Filter
                  <label
                    className="mt-1 fw-bold flex position-absolute inset-e-0 pe-2"
                    style={{
                      color: "#2A478D",
                      fontFamily: "Arial",
                      fontSize: "12px",
                    }}
                  >
                    Reset All
                  </label>
                </p>
                <form className="pb-3">
                  <p className="mb-2" style={{ fontFamily: "Arial" }}>
                    Property Type
                  </p>
                  <input type="text" className="form-control mb-3" />
                  <p className="mb-2" style={{ fontFamily: "Arial" }}>
                    Location
                  </p>
                  <input
                    type="text"
                    className="form-control mb-3"
                    required
                    placeholder="City or Neighborhood"
                  />

                  <p className="mb-2" style={{ fontFamily: "Arial" }}>
                    Price Range (₦)
                  </p>
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                      <input
                        type="text"
                        className="form-control mb-3"
                        required
                        placeholder="Min."
                      />
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                      <input
                        type="text"
                        className="form-control mb-3"
                        required
                        placeholder="Max."
                      />
                    </div>
                  </div>
                  <p className="mb-2" style={{ fontFamily: "Arial" }}>
                    Bedrooms
                  </p>
                  <input type="text" className="form-control mb-3" />
                  <p className="mb-2" style={{ fontFamily: "Arial" }}>
                    Bathrooms
                  </p>
                  <input type="text" className="form-control mb-3" />
                </form>
                <div className="d-none d-md-block">
                  <p className="mb-2 fw-bold" style={{ fontFamily: "Arial" }}>
                    Amenities
                  </p>
                  <p className="mb-2 ps-3" style={{ fontFamily: "Arial" }}>
                    Swimming Pool
                  </p>
                  <p className="mb-2 ps-3" style={{ fontFamily: "Arial" }}>
                    Gym
                  </p>
                  <p className="mb-2 ps-3" style={{ fontFamily: "Arial" }}>
                    24/7 Security
                  </p>
                  <p className="mb-2 ps-3" style={{ fontFamily: "Arial" }}>
                    Backup Generator
                  </p>
                  <p className="mb-2 ps-3" style={{ fontFamily: "Arial" }}>
                    CCTV
                  </p>
                  <p className="mb-2 ps-3" style={{ fontFamily: "Arial" }}>
                    Fitted Kitchen
                  </p>
                  <p className="mb-2 ps-3" style={{ fontFamily: "Arial" }}>
                    Air Conditioning
                  </p>
                  <p className="mb-2 ps-3" style={{ fontFamily: "Arial" }}>
                    Borehole
                  </p>
                  <p className="mb-2 ps-3" style={{ fontFamily: "Arial" }}>
                    Parking
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8">
            <div className="row mt-3">
              <div className="col-8">
                <select className="bg-white text-dark d-flex p-2 pe-3 border mb-3  mt-3 rounded-2 fw-bold">
                  <option value="">New Listing</option>
                  <option>Oldest Listing</option>
                </select>
              </div>
              <div className="row col-4 d-flex justify-content-evenly px-auto">
                <div className="col-3">
                <Link to="/properties" className="text-dark">
                  <svg
                    className="mt-3 icon"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 6C0 2.68629 2.68629 0 6 0H30C33.3137 0 36 2.68629 36 6V30C36 33.3137 33.3137 36 30 36H6C2.68629 36 0 33.3137 0 30V6Z"
                      fill="#2A478D"
                    />
                    <path
                      d="M23.8333 10.5H12.1667C11.2462 10.5 10.5 11.2462 10.5 12.1667V23.8333C10.5 24.7538 11.2462 25.5 12.1667 25.5H23.8333C24.7538 25.5 25.5 24.7538 25.5 23.8333V12.1667C25.5 11.2462 24.7538 10.5 23.8333 10.5Z"
                      stroke="white"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.5 15.5H25.5"
                      stroke="white"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.5 20.5H25.5"
                      stroke="white"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.5 10.5V25.5"
                      stroke="white"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20.5 10.5V25.5"
                      stroke="white"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  
                </Link>
                </div>
                <div className="col-2">
                <Link to="/propertyList" className="text-dark">
                  <svg
                    className="icon mt-3 position-relative"
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask id="path-1-inside-1_1081_7631" fill="white">
                      <path d="M0 6C0 2.68629 2.68629 0 6 0H32C35.3137 0 38 2.68629 38 6V32C38 35.3137 35.3137 38 32 38H6C2.68629 38 0 35.3137 0 32V6Z" />
                    </mask>
                    <path
                      d="M0 6C0 2.68629 2.68629 0 6 0H32C35.3137 0 38 2.68629 38 6V32C38 35.3137 35.3137 38 32 38H6C2.68629 38 0 35.3137 0 32V6Z"
                      fill="white"
                    />
                    <path
                      d="M6 0V1H32V0V-1H6V0ZM38 6H37V32H38H39V6H38ZM32 38V37H6V38V39H32V38ZM0 32H1V6H0H-1V32H0ZM6 38V37C3.23858 37 1 34.7614 1 32H0H-1C-1 35.866 2.13401 39 6 39V38ZM38 32H37C37 34.7614 34.7614 37 32 37V38V39C35.866 39 39 35.866 39 32H38ZM32 0V1C34.7614 1 37 3.23858 37 6H38H39C39 2.13401 35.866 -1 32 -1V0ZM6 0V-1C2.13401 -1 -1 2.13401 -1 6H0H1C1 3.23858 3.23858 1 6 1V0Z"
                      fill="#1A1A1A"
                      fillOpacity="0.1"
                      mask="url(#path-1-inside-1_1081_7631)"
                    />
                    <path
                      d="M11.5 19H11.5083"
                      stroke="#1A1A1A"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.5 24H11.5083"
                      stroke="#1A1A1A"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.5 14H11.5083"
                      stroke="#1A1A1A"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.6665 19H26.4998"
                      stroke="#1A1A1A"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.6665 24H26.4998"
                      stroke="#1A1A1A"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.6665 14H26.4998"
                      stroke="#1A1A1A"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6 col-xl-6 ">
                <div className="card shadow border-0 mb-3">
                  <img
                    src="/images/Hotel-one.jpg"
                    className="card-img-top"
                  ></img>
                  <div className="card-body text-start">
                    <span
                      className="badge btn position-absolute bg-white  rounded-5 py-2 top-0 mt-2 ms-0 px-3 "
                      style={{ color: "#2A478D" }}
                    >
                      BUY
                    </span>
                    <span className="badge btn position-absolute bg-dark text-white rounded-4 py-2 inset-e-0 me-3 top-0 mt-2  px-3 align ">
                      FEATURED
                    </span>
                    <p className="mb-1 text-wrap">
                      Luxury 4-Bedroom Duplex in Lekki Phase 1
                    </p>
                    <p className="text-muted my-1">Lekki Phase 1, Lagos</p>
                    <p className="text-muted my-1"> 4 Beds 5 Baths 450 SQM</p>
                    <div className="position-relative mt-3">
                      <p
                        style={{ color: "#2A478D", fontFamily: "Georgia" }}
                        className="price h4 fw-bold"
                      >
                        ₦125.0M
                        <Link to="/buy1" className="text-dark">
                          <span
                            className="details end-0 position-absolute fw-bold py-2 px-3 rounded-3"
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

                <div className="card shadow border-0 mb-3">
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
                      <p
                        style={{ color: "#2A478D", fontFamily: "Georgia" }}
                        className="price h4 fw-bold"
                      >
                        ₦50.0M
                        <Link to="/rent2" className="text-dark">
                          <span
                            className="details end-0 position-absolute fw-bold py-2 px-3 rounded-3"
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

                <div className="card shadow border-0 mb-3">
                  <img src="/images/Hotel-3.jpg" className="card-img-top"></img>
                  <div className="card-body text-start">
                    <span
                      className="badge btn position-absolute bg-white  rounded-5 py-2 top-0 mt-2 ms-0 px-3 "
                      style={{ color: "#2A478D" }}
                    >
                      BUY
                    </span>
                    <span className="badge btn position-absolute bg-dark text-white rounded-4 py-2 inset-e-0 me-3 top-0 mt-2  px-3 align ">
                      FEATURED
                    </span>
                    <p className="mb-1">
                      Luxury 3-Bedroom Duplex in Lekki Phase 1
                    </p>
                    <p className="text-muted my-1">Lekki Phase 1, Lagos</p>
                    <p className="text-muted my-1"> 3 Beds 5 Baths 450 SQM</p>
                    <div className="position-relative mt-3">
                      <p
                        style={{ color: "#2A478D", fontFamily: "Georgia" }}
                        className="price h4 fw-bold"
                      >
                        ₦120.0M
                        <Link to="/buy3" className="text-dark">
                          <span
                            className="details end-0 position-absolute fw-bold py-2 px-3 rounded-3"
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

                <div className="card shadow border-0">
                  <img src="/images/Hotel-2.jpg" className="card-img-top"></img>
                  <div className="card-body text-start">
                    <span
                      className="badge btn position-absolute bg-white  rounded-5 py-2 top-0 mt-2 ms-0 px-3 "
                      style={{ color: "#2A478D" }}
                    >
                      BUY
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
                      <p
                        style={{ color: "#2A478D", fontFamily: "Georgia" }}
                        className="price h4 fw-bold"
                      >
                        ₦250.0M
                        <Link to="/buy2" className="text-dark">
                          <span
                            className="details end-0 position-absolute fw-bold py-2 px-3 rounded-3"
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

              <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                <div className="card shadow border-0 mb-3 mt-3">
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
                    <p className="mb-1 text-wrap">
                      Luxury 3-Bedroom Duplex in Lekki Phase 1
                    </p>
                    <p className="text-muted my-1">Lekki Phase 1, Lagos</p>
                    <p className="text-muted my-1"> 3 Beds 5 Baths 450 SQM</p>
                    <div className="position-relative mt-3">
                      <p
                        style={{ color: "#2A478D", fontFamily: "Georgia" }}
                        className="price h4 fw-bold"
                      >
                        ₦15.0M
                        <Link to="/rent3" className="text-dark">
                          <span
                            className="details end-0 position-absolute fw-bold py-2 px-3 rounded-3"
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

                <div className="card shadow border-0 mb-3">
                  <img
                    src="/images/Hotel-one.jpg"
                    className="card-img-top"
                  ></img>
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
                      <p
                        style={{ color: "#2A478D", fontFamily: "Georgia" }}
                        className="price  h4 fw-bold"
                      >
                        ₦100.0M
                        <Link to="/lease1" className="text-dark">
                          <span
                            className="details end-0 position-absolute fw-bold py-2 px-3 rounded-3"
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

                <div className="card shadow border-0 mb-3">
                  <img src="/images/Hotel-2.jpg" className="card-img-top"></img>
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
                      Luxury 5-Bedroom Duplex in Lekki Phase 1
                    </p>
                    <p className="text-muted my-1">Lekki Phase 1, Lagos</p>
                    <p className="text-muted my-1"> 4 Beds 5 Baths 450 SQM</p>
                    <div className="position-relative mt-3">
                      <p
                        style={{ color: "#2A478D", fontFamily: "Georgia" }}
                        className="price h4 fw-bold"
                      >
                        ₦150.0M
                        <Link to="/lease2" className="text-dark">
                          <span
                            className="details end-0 position-absolute fw-bold py-2 px-3 rounded-3"
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

                <div className="card shadow border-0">
                  <img src="/images/Hotel-3.jpg" className="card-img-top"></img>
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
                      Luxury 3-Bedroom Duplex in Lekki Phase 1
                    </p>
                    <p className="text-muted my-1">Lekki Phase 1, Lagos</p>
                    <p className="text-muted my-1"> 3 Beds 5 Baths 450 SQM</p>
                    <div className="position-relative mt-3">
                      <p
                        style={{ color: "#2A478D", fontFamily: "Georgia" }}
                        className="price h4 fw-bold"
                      >
                        ₦90.0M
                        <Link to="/lease3" className="text-dark">
                          <span
                            className="details end-0 position-absolute fw-bold py-2 px-3 rounded-3"
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
      </div>
<div className="mt-4">
      <Footer />
      </div>
    </>
  );
}

export default Properties;
