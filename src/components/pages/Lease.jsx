import React from "react";
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
function Lease() {
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
          src="assets/BOC logo.png"
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
                className="me-auto my-2 my-lg-0 ms-auto bg-white rounded-5 px-5"
                navbarScroll
              >
                <Nav.Link
                  as={Link}
                  to="/"
                  className="ps-5 pe-3"
                  style={{ color: "#2A478D" }}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/properties"
                  className="px-4 text-dark"
                  href="#action2"
                >
                  Properties
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/about"
                  className="ps-4 text-dark"
                  href="#action3"
                >
                  About Us
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/contact"
                  className="ps-4 pe-5 text-dark"
                  href="#action4"
                >
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="flex-grow-1 d-flex align-items-start justify-content-start">
          <div className="container text-start text-white ps-5">
            <h1
              className="display-3 mt-5 fw-light"
              style={{ color: "#2A478D", fontFamily: "Helvitica" }}
            >
              Properties for Lease
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
                    className="mt-1 fw-bold flex position-absolute end-0 pe-2"
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
                        type="number"
                        className="form-control mb-3"
                        required
                        placeholder="Min."
                      />
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                      <input
                        type="number"
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
                <select className="bg-white text-dark d-flex p-2 pe-3 border-1 mt-3 rounded-2 fw-bold">
                  <option value="">New Listing</option>
                  <option>Oldest Listing</option>
                </select>
              </div>
              <div className="col-4 position-absolute end-0">
                <Link to="/Lease" className="px-2 text-dark">
                  <svg
                    className="mt-3"
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
                <Link to="/LeaseList" className="text-dark">
                  <svg
                    className="mt-3"
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
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6 col-xl-6 ">
                <div className="card shadow border-0 mt-4 mb-3">
                  <img
                    src="assets/Hotel-one.jpg"
                    className="card-img-top"
                  ></img>
                  <div className="card-body text-start">
                    <span
                      className="badge btn position-absolute bg-white  rounded-5 py-2 top-0 mt-2 ms-0 px-3 "
                      style={{ color: "#2A478D" }}
                    >
                      LEASE
                    </span>
                    <span className="badge btn position-absolute bg-dark text-white rounded-4 py-2 end-0 me-3 top-0 mt-2  px-3 align ">
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
                        className=" h4 fw-bold"
                      >
                        ₦100.0M
                        <Link to="/lease1" className="text-dark">
                          <span
                            className="end-0 position-absolute fw-bold py-2 px-3 rounded-3 "
                            style={{
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
                  <img src="assets/Hotel-2.jpg" className="card-img-top"></img>
                  <div className="card-body text-start">
                    <span
                      className="badge btn position-absolute bg-white  rounded-5 py-2 top-0 mt-2 ms-0 px-3 "
                      style={{ color: "#2A478D" }}
                    >
                      LEASE
                    </span>
                    <span className="badge btn position-absolute bg-dark text-white rounded-4 py-2 end-0 me-3 top-0 mt-2  px-3 align ">
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
                        className=" h4 fw-bold"
                      >
                        ₦205.0M
                        <Link to="/lease2" className="text-dark">
                          <span
                            className="end-0 position-absolute fw-bold py-2 px-3 rounded-3 "
                            style={{
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
                  <img src="assets/Hotel-3.jpg" className="card-img-top"></img>
                  <div className="card-body text-start">
                    <span
                      className="badge btn position-absolute bg-white  rounded-5 py-2 top-0 mt-2 ms-0 px-3 "
                      style={{ color: "#2A478D" }}
                    >
                      LEASE
                    </span>
                    <span className="badge btn position-absolute bg-dark text-white rounded-4 py-2 end-0 me-3 top-0 mt-2  px-3 align ">
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
                        className=" h4 fw-bold"
                      >
                        ₦90.0M
                        <Link to="/lease3" className="text-dark">
                          <span
                            className="end-0 position-absolute fw-bold py-2 px-3 rounded-3 "
                            style={{
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
                  <img src="assets/Hotel-2.jpg" className="card-img-top"></img>
                  <div className="card-body text-start">
                    <span
                      className="badge btn position-absolute bg-white  rounded-5 py-2 top-0 mt-2 ms-0 px-3 "
                      style={{ color: "#2A478D" }}
                    >
                      LEASE
                    </span>
                    <span className="badge btn position-absolute bg-dark text-white rounded-4 py-2 end-0 me-3 top-0 mt-2  px-3 align ">
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
                        className=" h4 fw-bold"
                      >
                        ₦205.0M
                        <Link to="/lease2" className="text-dark">
                          <span
                            className="end-0 position-absolute fw-bold py-2 px-3 rounded-3 "
                            style={{
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
                <div className="card shadow border-0 mt-4 mb-3">
                  <img src="assets/Hotel-3.jpg" className="card-img-top"></img>
                  <div className="card-body text-start">
                    <span
                      className="badge btn position-absolute bg-white  rounded-5 py-2 top-0 mt-2 ms-0 px-3 "
                      style={{ color: "#2A478D" }}
                    >
                      LEASE
                    </span>
                    <span className="badge btn position-absolute bg-dark text-white rounded-4 py-2 end-0 me-3 top-0 mt-2  px-3 align ">
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
                        className=" h4 fw-bold"
                      >
                        ₦90.0M
                        <Link to="/lease3" className="text-dark">
                          <span
                            className="end-0 position-absolute fw-bold py-2 px-3 rounded-3 "
                            style={{
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
                    src="assets/Hotel-one.jpg"
                    className="card-img-top"
                  ></img>
                  <div className="card-body text-start">
                    <span
                      className="badge btn position-absolute bg-white  rounded-5 py-2 top-0 mt-2 ms-0 px-3 "
                      style={{ color: "#2A478D" }}
                    >
                      LEASE
                    </span>
                    <span className="badge btn position-absolute bg-dark text-white rounded-4 py-2 end-0 me-3 top-0 mt-2  px-3 align ">
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
                        className=" h4 fw-bold"
                      >
                        ₦100.0M
                        <Link to="/lease1" className="text-dark">
                          <span
                            className="end-0 position-absolute fw-bold py-2 px-3 rounded-3 "
                            style={{
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
                  <img src="assets/Hotel-2.jpg" className="card-img-top"></img>
                  <div className="card-body text-start">
                    <span
                      className="badge btn position-absolute bg-white  rounded-5 py-2 top-0 mt-2 ms-0 px-3 "
                      style={{ color: "#2A478D" }}
                    >
                      LEASE
                    </span>
                    <span className="badge btn position-absolute bg-dark text-white rounded-4 py-2 end-0 me-3 top-0 mt-2  px-3 align ">
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
                        className=" h4 fw-bold"
                      >
                        ₦205.0M
                        <Link to="/lease2" className="text-dark">
                          <span
                            className="end-0 position-absolute fw-bold py-2 px-3 rounded-3 "
                            style={{
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
                  <img src="assets/Hotel-3.jpg" className="card-img-top"></img>
                  <div className="card-body text-start">
                    <span
                      className="badge btn position-absolute bg-white  rounded-5 py-2 top-0 mt-2 ms-0 px-3 "
                      style={{ color: "#2A478D" }}
                    >
                      LEASE
                    </span>
                    <span className="badge btn position-absolute bg-dark text-white rounded-4 py-2 end-0 me-3 top-0 mt-2  px-3 align ">
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
                        className=" h4 fw-bold"
                      >
                        ₦90.0M
                        <Link to="/lease3" className="text-dark">
                          <span
                            className="end-0 position-absolute fw-bold py-2 px-3 rounded-3 "
                            style={{
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

      <div
        className="d-none d-md-block container-fluid  bg-dark"
        style={{ paddingTop: "70px ", minWidth: "100%" }}
      >
        <div className="row flex-nowrap ms-0 me-5 pb-3">
          <div className="col-lg-3 col-xl-3 col-md-3 text-start">
            <p className="h5 text-white mb-3 text-nowrap ">
              BOC Real Estate Limited
            </p>
            <p className="text-secondary" style={{ fontSize: "12px" }}>
              Nigeria's premier luxury real estate platform, connecting
              discerning clients with exceptional properties since 2021.
            </p>
          </div>
          <div className="col-lg-3 col-xl-3 col-md-3 ms-5 text-start">
            <p className=" text-white mb-3" style={{ fontFamily: "Helvitica" }}>
              Quick Links
            </p>
            <p className="text-secondary mb-1" style={{ fontSize: "12px" }}>
              Buy
            </p>
            <p className="text-secondary mb-1" style={{ fontSize: "12px" }}>
              Rent
            </p>
            <p className="text-secondary mb-1" style={{ fontSize: "12px" }}>
              Lease
            </p>
            <p className="text-secondary mb-1" style={{ fontSize: "12px" }}>
              About
            </p>
            <p className="text-secondary mb-1" style={{ fontSize: "12px" }}>
              Agents
            </p>
            <p className="text-secondary mb-1" style={{ fontSize: "12px" }}>
              Contact
            </p>
          </div>
          <div className="col-lg-3 col-xl-3 col-md-3 text-start mx-0">
            <p
              className=" text-white mb-3 "
              style={{ fontFamily: "Helvitica" }}
            >
              Property Types
            </p>
            <p className="text-secondary mb-1" style={{ fontSize: "12px" }}>
              Apartments
            </p>
            <p className="text-secondary mb-1" style={{ fontSize: "12px" }}>
              Duplexes
            </p>
            <p className="text-secondary mb-1" style={{ fontSize: "12px" }}>
              Terraces
            </p>
            <p className="text-secondary mb-1" style={{ fontSize: "12px" }}>
              Commercial
            </p>
            <p className="text-secondary mb-1" style={{ fontSize: "12px" }}>
              Land
            </p>
          </div>
          <div className="col-lg-3 col-xl-3 col-md-3 text-start">
            <p className=" text-white mb-3" style={{ fontFamily: "Helvitica" }}>
              Contact Us
            </p>
            <p className="text-secondary mb-1" style={{ fontSize: "12px" }}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.6666 8.33341C16.6666 12.4942 12.0508 16.8276 10.5008 18.1659C10.3564 18.2745 10.1806 18.3332 9.99992 18.3332C9.81925 18.3332 9.64348 18.2745 9.49909 18.1659C7.94909 16.8276 3.33325 12.4942 3.33325 8.33341C3.33325 6.5653 4.03563 4.86961 5.28587 3.61937C6.53612 2.36913 8.23181 1.66675 9.99992 1.66675C11.768 1.66675 13.4637 2.36913 14.714 3.61937C15.9642 4.86961 16.6666 6.5653 16.6666 8.33341Z"
                  stroke="white"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 10.8333C11.3807 10.8333 12.5 9.71396 12.5 8.33325C12.5 6.95254 11.3807 5.83325 10 5.83325C8.61929 5.83325 7.5 6.95254 7.5 8.33325C7.5 9.71396 8.61929 10.8333 10 10.8333Z"
                  stroke="white"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>{" "}
              Plot 15, Admiralty Way, Lekki Phase 1, Lagos, Nigeria
            </p>
            <p className="text-secondary mb-1" style={{ fontSize: "12px" }}>
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.4067 13.2667V15.7667C17.4076 15.9988 17.3601 16.2285 17.2671 16.4411C17.1741 16.6538 17.0378 16.8447 16.8667 17.0016C16.6957 17.1585 16.4938 17.2779 16.274 17.3523C16.0541 17.4266 15.8212 17.4542 15.59 17.4333C13.0257 17.1547 10.5625 16.2785 8.39835 14.875C6.38487 13.5956 4.6778 11.8885 3.39835 9.875C1.99 7.701 1.11355 5.22583 0.840016 2.65C0.819191 2.41956 0.846578 2.1873 0.920433 1.96802C0.994287 1.74874 1.11299 1.54724 1.26899 1.37635C1.42498 1.20546 1.61485 1.06892 1.82651 0.975434C2.03816 0.881945 2.26697 0.833551 2.49835 0.833333H4.99835C5.40277 0.829352 5.79484 0.972565 6.10148 1.23628C6.40813 1.49999 6.60841 1.8662 6.66502 2.26667C6.77053 3.06672 6.96622 3.85227 7.24835 4.60833C7.36047 4.9066 7.38473 5.23076 7.31827 5.5424C7.25181 5.85404 7.0974 6.14009 6.87335 6.36667L5.81502 7.425C7.00131 9.51129 8.72873 11.2387 10.815 12.425L11.8733 11.3667C12.0999 11.1426 12.386 10.9882 12.6976 10.9217C13.0093 10.8553 13.3334 10.8795 13.6317 10.9917C14.3877 11.2738 15.1733 11.4695 15.9733 11.575C16.3782 11.6321 16.7479 11.836 17.0121 12.1479C17.2764 12.4598 17.4168 12.858 17.4067 13.2667Z"
                  stroke="white"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>{" "}
              +2348012345678
            </p>
            <p className="text-secondary mb-1" style={{ fontSize: "12px" }}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.6665 3.33325H3.33317C2.4127 3.33325 1.6665 4.07944 1.6665 4.99992V14.9999C1.6665 15.9204 2.4127 16.6666 3.33317 16.6666H16.6665C17.587 16.6666 18.3332 15.9204 18.3332 14.9999V4.99992C18.3332 4.07944 17.587 3.33325 16.6665 3.33325Z"
                  stroke="white"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.3332 5.83325L10.8582 10.5833C10.6009 10.7444 10.3034 10.8299 9.99984 10.8299C9.69624 10.8299 9.39878 10.7444 9.1415 10.5833L1.6665 5.83325"
                  stroke="white"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>{" "}
              info@estateluxe.com
            </p>
          </div>
        </div>
      </div>
      <div
        className="d-none d-md-block container-fluid bg-dark text-white pt-5 border-top  border-secondary"
        style={{ minWidth: "100%" }}
      >
        <p className="text-secondary mb-0" style={{ fontSize: "14px" }}>
          © 2026 BOC Real Estate Limited. All rights reserved.
        </p>
      </div>
    </>
  );
}

export default Lease;
