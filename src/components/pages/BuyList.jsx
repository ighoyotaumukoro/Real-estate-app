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
function BuyList() {
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
        <Navbar expand="lg" variant="light" className="mt-4 py-1">
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
                  className="px-3"
                  style={{ color: "#2A478D" }}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/properties"
                  className="px-3 text-dark"
                  href="#action2"
                >
                  Properties
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/about"
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

              <Link to="/properties" className="text-dark">
                <Button
                  to="/properties"
                  variant="btn px-3"
                  style={{ background: "#2A478D", color: "white" }}
                >
                  Browse Properties
                </Button>
              </Link>
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
        <div className="row mt-3 mb-0 g-3">
          <div className="col-sm-10 col-lg-4 col-md-4 col-xl-4">
            <div className="card shadow rounded-4 border-0 text-start pt-3">
              <div className="card-body">
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
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                      <input
                        type="number"
                        className="form-control mb-3"
                        required
                        placeholder="Min."
                      />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
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
                <select className="bg-white text-dark d-flex mt-1 p-2 pe-3 border  mb-3 rounded-2 fw-bold">
                  <option value="">New Listing</option>
                  <option>Oldest Listing</option>
                </select>
              </div>
              <div className="col-4 position-absolute inset-e-0">
                <Link to="/buy" className="px-2 text-dark">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 6C0 2.68629 2.68629 0 6 0H30C33.3137 0 36 2.68629 36 6V30C36 33.3137 33.3137 36 30 36H6C2.68629 36 0 33.3137 0 30V6Z"
                      fill="white"
                    />
                    <path
                      d="M6 0.5H30C33.0376 0.5 35.5 2.96243 35.5 6V30C35.5 33.0376 33.0376 35.5 30 35.5H6C2.96243 35.5 0.5 33.0376 0.5 30V6C0.500001 2.96243 2.96243 0.5 6 0.5Z"
                      stroke="#1A1A1A"
                      strokeOpacity="0.2"
                    />
                    <path
                      d="M23.8333 10.5H12.1667C11.2462 10.5 10.5 11.2462 10.5 12.1667V23.8333C10.5 24.7538 11.2462 25.5 12.1667 25.5H23.8333C24.7538 25.5 25.5 24.7538 25.5 23.8333V12.1667C25.5 11.2462 24.7538 10.5 23.8333 10.5Z"
                      stroke="#1A1A1A"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.5 15.5H25.5"
                      stroke="#1A1A1A"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.5 20.5H25.5"
                      stroke="#1A1A1A"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.5 10.5V25.5"
                      stroke="#1A1A1A"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20.5 10.5V25.5"
                      stroke="#1A1A1A"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>

                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_1092_2063" fill="white">
                    <path d="M0 6C0 2.68629 2.68629 0 6 0H32C35.3137 0 38 2.68629 38 6V32C38 35.3137 35.3137 38 32 38H6C2.68629 38 0 35.3137 0 32V6Z" />
                  </mask>
                  <path
                    d="M0 6C0 2.68629 2.68629 0 6 0H32C35.3137 0 38 2.68629 38 6V32C38 35.3137 35.3137 38 32 38H6C2.68629 38 0 35.3137 0 32V6Z"
                    fill="#2A478D"
                  />
                  <path
                    d="M6 0V1H32V0V-1H6V0ZM38 6H37V32H38H39V6H38ZM32 38V37H6V38V39H32V38ZM0 32H1V6H0H-1V32H0ZM6 38V37C3.23858 37 1 34.7614 1 32H0H-1C-1 35.866 2.13401 39 6 39V38ZM38 32H37C37 34.7614 34.7614 37 32 37V38V39C35.866 39 39 35.866 39 32H38ZM32 0V1C34.7614 1 37 3.23858 37 6H38H39C39 2.13401 35.866 -1 32 -1V0ZM6 0V-1C2.13401 -1 -1 2.13401 -1 6H0H1C1 3.23858 3.23858 1 6 1V0Z"
                    fill="#1A1A1A"
                    fillOpacity="0.1"
                    mask="url(#path-1-inside-1_1092_2063)"
                  />
                  <path
                    d="M11.5 19H11.5083"
                    stroke="white"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.5 24H11.5083"
                    stroke="white"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.5 14H11.5083"
                    stroke="white"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.6665 19H26.4998"
                    stroke="white"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.6665 24H26.4998"
                    stroke="white"
                    stroke-Width="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.6665 14H26.4998"
                    stroke="white"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    stroke-Linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="card col shadow rounded-4 border-0 text-start mb-3">
              <div className="">
                <div className="row align items-center">
                  <div className="col-5">
                    <img
                      src="/images/Hotel-one.jpg "
                      className="img-fluid h-100  rounded"
                      alt="Property"
                    ></img>
                  </div>
                  <div className="col-7">
                    <span
                      className="badge btn position-absolute bg-white rounded-5 py-1  top-0 inset-s-0 mt-2 ms-0 px-3 "
                      style={{ color: "#2A478D" }}
                    >
                      BUY
                    </span>
                    <h5 className="mt-1">Luxury 4-bedroom in Lekki Phase 1</h5>
                    <p className="text-muted">
                      <svg
                        className="me-1"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1114_1768)">
                          <path
                            d="M11.7511 5.87529C11.7511 8.80883 8.49674 11.864 7.40393 12.8076C7.30213 12.8841 7.1782 12.9255 7.05083 12.9255C6.92345 12.9255 6.79953 12.8841 6.69772 12.8076C5.60491 11.864 2.35059 8.80883 2.35059 5.87529C2.35059 4.62871 2.84579 3.43318 3.72725 2.55172C4.60872 1.67025 5.80424 1.17505 7.05083 1.17505C8.29741 1.17505 9.49293 1.67025 10.3744 2.55172C11.2559 3.43318 11.7511 4.62871 11.7511 5.87529Z"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7.05019 7.63791C8.02364 7.63791 8.81278 6.84877 8.81278 5.87532C8.81278 4.90187 8.02364 4.11273 7.05019 4.11273C6.07674 4.11273 5.2876 4.90187 5.2876 5.87532C5.2876 6.84877 6.07674 7.63791 7.05019 7.63791Z"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1114_1768">
                            <rect
                              width="14.1007"
                              height="14.1007"
                              fill="white"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      Lekki Phase 1
                    </p>
                    <p className="text-muted">
                      <svg
                        className="me-1"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1114_1774)">
                          <path
                            d="M1.1748 2.35016V11.7506"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M1.1748 4.70026H11.7503C12.062 4.70026 12.3609 4.82406 12.5812 5.04442C12.8016 5.26479 12.9254 5.56367 12.9254 5.87532V11.7506"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M1.1748 9.98798H12.9254"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M3.52539 4.70026V9.98803"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1114_1774">
                            <rect
                              width="14.1007"
                              height="14.1007"
                              fill="white"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      4
                      <svg
                        className="ms-3 me-1"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1114_1781)">
                          <path
                            d="M5.87477 2.35016L4.69971 3.52522"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9.98779 11.1631V12.3381"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M1.1748 7.05035H12.9254"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M4.11279 11.1631V12.3381"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M5.28775 2.93768L4.47754 2.12747C4.30764 1.95678 4.09191 1.83897 3.85645 1.78832C3.621 1.73766 3.37591 1.75631 3.15084 1.84203C2.92577 1.92775 2.73035 2.07685 2.58824 2.27129C2.44613 2.46574 2.36342 2.6972 2.3501 2.93768V9.98804C2.3501 10.2997 2.4739 10.5986 2.69426 10.8189C2.91463 11.0393 3.21351 11.1631 3.52516 11.1631H10.5755C10.8872 11.1631 11.186 11.0393 11.4064 10.8189C11.6268 10.5986 11.7506 10.2997 11.7506 9.98804V7.05039"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1114_1781">
                            <rect
                              width="14.1007"
                              height="14.1007"
                              fill="white"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      5
                      <svg
                        className="me-1 ms-3"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.70035 1.76257H2.93776C2.62611 1.76257 2.32723 1.88637 2.10686 2.10674C1.8865 2.32711 1.7627 2.62599 1.7627 2.93763V4.70022"
                          stroke="#6B6B6B"
                          stroke-width="1.17506"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.3385 4.70022V2.93763C12.3385 2.62599 12.2147 2.32711 11.9944 2.10674C11.774 1.88637 11.4751 1.76257 11.1635 1.76257H9.40088"
                          stroke="#6B6B6B"
                          stroke-width="1.17506"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M1.7627 9.40051V11.1631C1.7627 11.4747 1.8865 11.7736 2.10686 11.994C2.32723 12.2144 2.62611 12.3382 2.93776 12.3382H4.70035"
                          stroke="#6B6B6B"
                          stroke-width="1.17506"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.40088 12.3382H11.1635C11.4751 12.3382 11.774 12.2144 11.9944 11.994C12.2147 11.7736 12.3385 11.4747 12.3385 11.1631V9.40051"
                          stroke="#6B6B6B"
                          stroke-width="1.17506"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      450 SQM
                    </p>
                    <h4
                      className="fw-bold"
                      style={{ color: " #2A478D", fontFamily: "Georgia" }}
                    >
                      ₦125.0M
                    </h4>
                    <Link to="/buy1" className="text-dark">
                      <button
                        className="btn btn-sm "
                        style={{
                          border: "1px solid #2A478D",
                          fontFamily: "Arial",
                          fontSize: "16px",
                          color: "#2A478D",
                        }}
                      >
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="card col shadow rounded-4 border-0 text-start mb-3">
              <div className="">
                <div className="row align items-center">
                  <div className="col-5">
                    <img
                      src="/images/Hotel-3.jpg"
                      className="img-fluid h-100  rounded"
                      alt="Property"
                    ></img>
                  </div>
                  <div className="col-7">
                    <span
                      className="badge ms-2 btn position-absolute bg-white rounded-5 py-1  top-0 inset-s-0 mt-2  px-3 "
                      style={{ color: "#2A478D" }}
                    >
                      BUY
                    </span>
                    <h5 className="mt-1">Luxury 3-bedroom in Lekki Phase 1</h5>
                    <p className="text-muted">
                      <svg
                        className="me-1"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1114_1768)">
                          <path
                            d="M11.7511 5.87529C11.7511 8.80883 8.49674 11.864 7.40393 12.8076C7.30213 12.8841 7.1782 12.9255 7.05083 12.9255C6.92345 12.9255 6.79953 12.8841 6.69772 12.8076C5.60491 11.864 2.35059 8.80883 2.35059 5.87529C2.35059 4.62871 2.84579 3.43318 3.72725 2.55172C4.60872 1.67025 5.80424 1.17505 7.05083 1.17505C8.29741 1.17505 9.49293 1.67025 10.3744 2.55172C11.2559 3.43318 11.7511 4.62871 11.7511 5.87529Z"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7.05019 7.63791C8.02364 7.63791 8.81278 6.84877 8.81278 5.87532C8.81278 4.90187 8.02364 4.11273 7.05019 4.11273C6.07674 4.11273 5.2876 4.90187 5.2876 5.87532C5.2876 6.84877 6.07674 7.63791 7.05019 7.63791Z"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1114_1768">
                            <rect
                              width="14.1007"
                              height="14.1007"
                              fill="white"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      Lekki Phase 1
                    </p>
                    <p className="text-muted">
                      <svg
                        className="me-1"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1114_1774)">
                          <path
                            d="M1.1748 2.35016V11.7506"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M1.1748 4.70026H11.7503C12.062 4.70026 12.3609 4.82406 12.5812 5.04442C12.8016 5.26479 12.9254 5.56367 12.9254 5.87532V11.7506"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M1.1748 9.98798H12.9254"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M3.52539 4.70026V9.98803"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1114_1774">
                            <rect
                              width="14.1007"
                              height="14.1007"
                              fill="white"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      3
                      <svg
                        className="ms-3 me-1"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1114_1781)">
                          <path
                            d="M5.87477 2.35016L4.69971 3.52522"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9.98779 11.1631V12.3381"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M1.1748 7.05035H12.9254"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M4.11279 11.1631V12.3381"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M5.28775 2.93768L4.47754 2.12747C4.30764 1.95678 4.09191 1.83897 3.85645 1.78832C3.621 1.73766 3.37591 1.75631 3.15084 1.84203C2.92577 1.92775 2.73035 2.07685 2.58824 2.27129C2.44613 2.46574 2.36342 2.6972 2.3501 2.93768V9.98804C2.3501 10.2997 2.4739 10.5986 2.69426 10.8189C2.91463 11.0393 3.21351 11.1631 3.52516 11.1631H10.5755C10.8872 11.1631 11.186 11.0393 11.4064 10.8189C11.6268 10.5986 11.7506 10.2997 11.7506 9.98804V7.05039"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1114_1781">
                            <rect
                              width="14.1007"
                              height="14.1007"
                              fill="white"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      5
                      <svg
                        className="me-1 ms-3"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.70035 1.76257H2.93776C2.62611 1.76257 2.32723 1.88637 2.10686 2.10674C1.8865 2.32711 1.7627 2.62599 1.7627 2.93763V4.70022"
                          stroke="#6B6B6B"
                          stroke-width="1.17506"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.3385 4.70022V2.93763C12.3385 2.62599 12.2147 2.32711 11.9944 2.10674C11.774 1.88637 11.4751 1.76257 11.1635 1.76257H9.40088"
                          stroke="#6B6B6B"
                          stroke-width="1.17506"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M1.7627 9.40051V11.1631C1.7627 11.4747 1.8865 11.7736 2.10686 11.994C2.32723 12.2144 2.62611 12.3382 2.93776 12.3382H4.70035"
                          stroke="#6B6B6B"
                          stroke-width="1.17506"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.40088 12.3382H11.1635C11.4751 12.3382 11.774 12.2144 11.9944 11.994C12.2147 11.7736 12.3385 11.4747 12.3385 11.1631V9.40051"
                          stroke="#6B6B6B"
                          stroke-width="1.17506"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      450 SQM
                    </p>
                    <h4
                      className="fw-bold"
                      style={{ color: " #2A478D", fontFamily: "Georgia" }}
                    >
                      ₦120.0M
                    </h4>
                    <Link to="/buy3" className="text-dark">
                      <button
                        className="btn btn-sm "
                        style={{
                          border: "1px solid #2A478D",
                          fontFamily: "Arial",
                          fontSize: "16px",
                          color: "#2A478D",
                        }}
                      >
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="card col shadow rounded-4 border-0 text-start mb-3">
              <div className="">
                <div className="row align items-center">
                  <div className="col-5">
                    <img
                      src="/images/Hotel-2.jpg"
                      className="img-fluid h-100  rounded"
                      alt="Property"
                    ></img>
                  </div>
                  <div className="col-7">
                    <span
                      className="badge ms-2 btn position-absolute bg-white rounded-5 py-1  top-0 inset-s-0 mt-2  px-3 "
                      style={{ color: "#2A478D" }}
                    >
                      BUY
                    </span>
                    <h5 className="mt-1">Luxury 5-bedroom in Lekki Phase 1</h5>
                    <p className="text-muted">
                      <svg
                        className="me-1"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1114_1768)">
                          <path
                            d="M11.7511 5.87529C11.7511 8.80883 8.49674 11.864 7.40393 12.8076C7.30213 12.8841 7.1782 12.9255 7.05083 12.9255C6.92345 12.9255 6.79953 12.8841 6.69772 12.8076C5.60491 11.864 2.35059 8.80883 2.35059 5.87529C2.35059 4.62871 2.84579 3.43318 3.72725 2.55172C4.60872 1.67025 5.80424 1.17505 7.05083 1.17505C8.29741 1.17505 9.49293 1.67025 10.3744 2.55172C11.2559 3.43318 11.7511 4.62871 11.7511 5.87529Z"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7.05019 7.63791C8.02364 7.63791 8.81278 6.84877 8.81278 5.87532C8.81278 4.90187 8.02364 4.11273 7.05019 4.11273C6.07674 4.11273 5.2876 4.90187 5.2876 5.87532C5.2876 6.84877 6.07674 7.63791 7.05019 7.63791Z"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1114_1768">
                            <rect
                              width="14.1007"
                              height="14.1007"
                              fill="white"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      Lekki Phase 1
                    </p>
                    <p className="text-muted">
                      <svg
                        className="me-1"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1114_1774)">
                          <path
                            d="M1.1748 2.35016V11.7506"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M1.1748 4.70026H11.7503C12.062 4.70026 12.3609 4.82406 12.5812 5.04442C12.8016 5.26479 12.9254 5.56367 12.9254 5.87532V11.7506"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M1.1748 9.98798H12.9254"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M3.52539 4.70026V9.98803"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1114_1774">
                            <rect
                              width="14.1007"
                              height="14.1007"
                              fill="white"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      5
                      <svg
                        className="ms-3 me-1"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1114_1781)">
                          <path
                            d="M5.87477 2.35016L4.69971 3.52522"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9.98779 11.1631V12.3381"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M1.1748 7.05035H12.9254"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M4.11279 11.1631V12.3381"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M5.28775 2.93768L4.47754 2.12747C4.30764 1.95678 4.09191 1.83897 3.85645 1.78832C3.621 1.73766 3.37591 1.75631 3.15084 1.84203C2.92577 1.92775 2.73035 2.07685 2.58824 2.27129C2.44613 2.46574 2.36342 2.6972 2.3501 2.93768V9.98804C2.3501 10.2997 2.4739 10.5986 2.69426 10.8189C2.91463 11.0393 3.21351 11.1631 3.52516 11.1631H10.5755C10.8872 11.1631 11.186 11.0393 11.4064 10.8189C11.6268 10.5986 11.7506 10.2997 11.7506 9.98804V7.05039"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1114_1781">
                            <rect
                              width="14.1007"
                              height="14.1007"
                              fill="white"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      5
                      <svg
                        className="me-1 ms-3"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.70035 1.76257H2.93776C2.62611 1.76257 2.32723 1.88637 2.10686 2.10674C1.8865 2.32711 1.7627 2.62599 1.7627 2.93763V4.70022"
                          stroke="#6B6B6B"
                          stroke-width="1.17506"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.3385 4.70022V2.93763C12.3385 2.62599 12.2147 2.32711 11.9944 2.10674C11.774 1.88637 11.4751 1.76257 11.1635 1.76257H9.40088"
                          stroke="#6B6B6B"
                          stroke-width="1.17506"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M1.7627 9.40051V11.1631C1.7627 11.4747 1.8865 11.7736 2.10686 11.994C2.32723 12.2144 2.62611 12.3382 2.93776 12.3382H4.70035"
                          stroke="#6B6B6B"
                          stroke-width="1.17506"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.40088 12.3382H11.1635C11.4751 12.3382 11.774 12.2144 11.9944 11.994C12.2147 11.7736 12.3385 11.4747 12.3385 11.1631V9.40051"
                          stroke="#6B6B6B"
                          stroke-width="1.17506"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      450 SQM
                    </p>
                    <h4
                      className="fw-bold"
                      style={{ color: " #2A478D", fontFamily: "Georgia" }}
                    >
                      ₦250.0M
                    </h4>
                    <Link to="/buy2" className="text-dark">
                      <button
                        className="btn btn-sm "
                        style={{
                          border: "1px solid #2A478D",
                          fontFamily: "Arial",
                          fontSize: "16px",
                          color: "#2A478D",
                        }}
                      >
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="card col shadow rounded-4 border-0 text-start mb-3">
              <div className="">
                <div className="row align items-center">
                  <div className="col-5">
                    <img
                      src="/images/Hotel-one.jpg "
                      className="img-fluid h-100  rounded"
                      alt="Property"
                    ></img>
                  </div>
                  <div className="col-7">
                    <span
                      className="badge ms-2 btn position-absolute bg-white rounded-5 py-1  top-0 inset-s-0 mt-2  px-3 "
                      style={{ color: "#2A478D" }}
                    >
                      BUY
                    </span>
                    <h5 className="mt-1">Luxury 4-bedroom in Lekki Phase 1</h5>
                    <p className="text-muted">
                      <svg
                        className="me-1"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1114_1768)">
                          <path
                            d="M11.7511 5.87529C11.7511 8.80883 8.49674 11.864 7.40393 12.8076C7.30213 12.8841 7.1782 12.9255 7.05083 12.9255C6.92345 12.9255 6.79953 12.8841 6.69772 12.8076C5.60491 11.864 2.35059 8.80883 2.35059 5.87529C2.35059 4.62871 2.84579 3.43318 3.72725 2.55172C4.60872 1.67025 5.80424 1.17505 7.05083 1.17505C8.29741 1.17505 9.49293 1.67025 10.3744 2.55172C11.2559 3.43318 11.7511 4.62871 11.7511 5.87529Z"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7.05019 7.63791C8.02364 7.63791 8.81278 6.84877 8.81278 5.87532C8.81278 4.90187 8.02364 4.11273 7.05019 4.11273C6.07674 4.11273 5.2876 4.90187 5.2876 5.87532C5.2876 6.84877 6.07674 7.63791 7.05019 7.63791Z"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1114_1768">
                            <rect
                              width="14.1007"
                              height="14.1007"
                              fill="white"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      Lekki Phase 1
                    </p>
                    <p className="text-muted">
                      <svg
                        className="me-1"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1114_1774)">
                          <path
                            d="M1.1748 2.35016V11.7506"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M1.1748 4.70026H11.7503C12.062 4.70026 12.3609 4.82406 12.5812 5.04442C12.8016 5.26479 12.9254 5.56367 12.9254 5.87532V11.7506"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M1.1748 9.98798H12.9254"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M3.52539 4.70026V9.98803"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1114_1774">
                            <rect
                              width="14.1007"
                              height="14.1007"
                              fill="white"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      4
                      <svg
                        className="ms-3 me-1"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1114_1781)">
                          <path
                            d="M5.87477 2.35016L4.69971 3.52522"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9.98779 11.1631V12.3381"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M1.1748 7.05035H12.9254"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M4.11279 11.1631V12.3381"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M5.28775 2.93768L4.47754 2.12747C4.30764 1.95678 4.09191 1.83897 3.85645 1.78832C3.621 1.73766 3.37591 1.75631 3.15084 1.84203C2.92577 1.92775 2.73035 2.07685 2.58824 2.27129C2.44613 2.46574 2.36342 2.6972 2.3501 2.93768V9.98804C2.3501 10.2997 2.4739 10.5986 2.69426 10.8189C2.91463 11.0393 3.21351 11.1631 3.52516 11.1631H10.5755C10.8872 11.1631 11.186 11.0393 11.4064 10.8189C11.6268 10.5986 11.7506 10.2997 11.7506 9.98804V7.05039"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1114_1781">
                            <rect
                              width="14.1007"
                              height="14.1007"
                              fill="white"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      5
                      <svg
                        className="me-1 ms-3"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.70035 1.76257H2.93776C2.62611 1.76257 2.32723 1.88637 2.10686 2.10674C1.8865 2.32711 1.7627 2.62599 1.7627 2.93763V4.70022"
                          stroke="#6B6B6B"
                          stroke-width="1.17506"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.3385 4.70022V2.93763C12.3385 2.62599 12.2147 2.32711 11.9944 2.10674C11.774 1.88637 11.4751 1.76257 11.1635 1.76257H9.40088"
                          stroke="#6B6B6B"
                          stroke-width="1.17506"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M1.7627 9.40051V11.1631C1.7627 11.4747 1.8865 11.7736 2.10686 11.994C2.32723 12.2144 2.62611 12.3382 2.93776 12.3382H4.70035"
                          stroke="#6B6B6B"
                          stroke-width="1.17506"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.40088 12.3382H11.1635C11.4751 12.3382 11.774 12.2144 11.9944 11.994C12.2147 11.7736 12.3385 11.4747 12.3385 11.1631V9.40051"
                          stroke="#6B6B6B"
                          stroke-width="1.17506"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      450 SQM
                    </p>
                    <h4
                      className="fw-bold"
                      style={{ color: " #2A478D", fontFamily: "Georgia" }}
                    >
                      ₦125.0M
                    </h4>
                    <Link to="/buy1" className="text-dark">
                      <button
                        className="btn btn-sm "
                        style={{
                          border: "1px solid #2A478D",
                          fontFamily: "Arial",
                          fontSize: "16px",
                          color: "#2A478D",
                        }}
                      >
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="card col shadow rounded-4 border-0 text-start mb-3">
              <div className="">
                <div className="row align items-center">
                  <div className="col-5">
                    <img
                      src="/images/Hotel-3.jpg"
                      className="img-fluid h-100  rounded"
                      alt="Property"
                    ></img>
                  </div>
                  <div className="col-7">
                    <span
                      className="badge ms-2 btn position-absolute bg-white rounded-5 py-1  top-0 inset-s-0 mt-2  px-3 "
                      style={{ color: "#2A478D" }}
                    >
                      BUY
                    </span>
                    <h5 className="mt-1">Luxury 3-bedroom in Lekki Phase 1</h5>
                    <p className="text-muted">
                      <svg
                        className="me-1"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1114_1768)">
                          <path
                            d="M11.7511 5.87529C11.7511 8.80883 8.49674 11.864 7.40393 12.8076C7.30213 12.8841 7.1782 12.9255 7.05083 12.9255C6.92345 12.9255 6.79953 12.8841 6.69772 12.8076C5.60491 11.864 2.35059 8.80883 2.35059 5.87529C2.35059 4.62871 2.84579 3.43318 3.72725 2.55172C4.60872 1.67025 5.80424 1.17505 7.05083 1.17505C8.29741 1.17505 9.49293 1.67025 10.3744 2.55172C11.2559 3.43318 11.7511 4.62871 11.7511 5.87529Z"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7.05019 7.63791C8.02364 7.63791 8.81278 6.84877 8.81278 5.87532C8.81278 4.90187 8.02364 4.11273 7.05019 4.11273C6.07674 4.11273 5.2876 4.90187 5.2876 5.87532C5.2876 6.84877 6.07674 7.63791 7.05019 7.63791Z"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1114_1768">
                            <rect
                              width="14.1007"
                              height="14.1007"
                              fill="white"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      Lekki Phase 1
                    </p>
                    <p className="text-muted">
                      <svg
                        className="me-1"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1114_1774)">
                          <path
                            d="M1.1748 2.35016V11.7506"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M1.1748 4.70026H11.7503C12.062 4.70026 12.3609 4.82406 12.5812 5.04442C12.8016 5.26479 12.9254 5.56367 12.9254 5.87532V11.7506"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M1.1748 9.98798H12.9254"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M3.52539 4.70026V9.98803"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1114_1774">
                            <rect
                              width="14.1007"
                              height="14.1007"
                              fill="white"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      3
                      <svg
                        className="ms-3 me-1"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1114_1781)">
                          <path
                            d="M5.87477 2.35016L4.69971 3.52522"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9.98779 11.1631V12.3381"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M1.1748 7.05035H12.9254"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M4.11279 11.1631V12.3381"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M5.28775 2.93768L4.47754 2.12747C4.30764 1.95678 4.09191 1.83897 3.85645 1.78832C3.621 1.73766 3.37591 1.75631 3.15084 1.84203C2.92577 1.92775 2.73035 2.07685 2.58824 2.27129C2.44613 2.46574 2.36342 2.6972 2.3501 2.93768V9.98804C2.3501 10.2997 2.4739 10.5986 2.69426 10.8189C2.91463 11.0393 3.21351 11.1631 3.52516 11.1631H10.5755C10.8872 11.1631 11.186 11.0393 11.4064 10.8189C11.6268 10.5986 11.7506 10.2997 11.7506 9.98804V7.05039"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1114_1781">
                            <rect
                              width="14.1007"
                              height="14.1007"
                              fill="white"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      5
                      <svg
                        className="me-1 ms-3"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.70035 1.76257H2.93776C2.62611 1.76257 2.32723 1.88637 2.10686 2.10674C1.8865 2.32711 1.7627 2.62599 1.7627 2.93763V4.70022"
                          stroke="#6B6B6B"
                          stroke-width="1.17506"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.3385 4.70022V2.93763C12.3385 2.62599 12.2147 2.32711 11.9944 2.10674C11.774 1.88637 11.4751 1.76257 11.1635 1.76257H9.40088"
                          stroke="#6B6B6B"
                          stroke-width="1.17506"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M1.7627 9.40051V11.1631C1.7627 11.4747 1.8865 11.7736 2.10686 11.994C2.32723 12.2144 2.62611 12.3382 2.93776 12.3382H4.70035"
                          stroke="#6B6B6B"
                          stroke-width="1.17506"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.40088 12.3382H11.1635C11.4751 12.3382 11.774 12.2144 11.9944 11.994C12.2147 11.7736 12.3385 11.4747 12.3385 11.1631V9.40051"
                          stroke="#6B6B6B"
                          stroke-width="1.17506"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      450 SQM
                    </p>
                    <h4
                      className="fw-bold"
                      style={{ color: " #2A478D", fontFamily: "Georgia" }}
                    >
                      ₦120.0M
                    </h4>
                    <Link to="/buy3" className="text-dark">
                      <button
                        className="btn btn-sm "
                        style={{
                          border: "1px solid #2A478D",
                          fontFamily: "Arial",
                          fontSize: "16px",
                          color: "#2A478D",
                        }}
                      >
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="card col shadow rounded-4 border-0 text-start mb-3">
              <div className="">
                <div className="row align items-center">
                  <div className="col-5">
                    <img
                      src="/images/Hotel-one.jpg"
                      className="img-fluid h-100  rounded"
                      alt="Property"
                    ></img>
                  </div>
                  <div className="col-7">
                    <span
                      className="badge ms-2 btn position-absolute bg-white rounded-5 py-1  top-0 inset-s-0 mt-2 px-3 "
                      style={{ color: "#2A478D" }}
                    >
                      BUY
                    </span>
                    <h5 className="mt-1">Luxury 4-bedroom in Lekki Phase 1</h5>
                    <p className="text-muted">
                      <svg
                        className="me-1"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1114_1768)">
                          <path
                            d="M11.7511 5.87529C11.7511 8.80883 8.49674 11.864 7.40393 12.8076C7.30213 12.8841 7.1782 12.9255 7.05083 12.9255C6.92345 12.9255 6.79953 12.8841 6.69772 12.8076C5.60491 11.864 2.35059 8.80883 2.35059 5.87529C2.35059 4.62871 2.84579 3.43318 3.72725 2.55172C4.60872 1.67025 5.80424 1.17505 7.05083 1.17505C8.29741 1.17505 9.49293 1.67025 10.3744 2.55172C11.2559 3.43318 11.7511 4.62871 11.7511 5.87529Z"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7.05019 7.63791C8.02364 7.63791 8.81278 6.84877 8.81278 5.87532C8.81278 4.90187 8.02364 4.11273 7.05019 4.11273C6.07674 4.11273 5.2876 4.90187 5.2876 5.87532C5.2876 6.84877 6.07674 7.63791 7.05019 7.63791Z"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1114_1768">
                            <rect
                              width="14.1007"
                              height="14.1007"
                              fill="white"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      Lekki Phase 1
                    </p>
                    <p className="text-muted">
                      <svg
                        className="me-1"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1114_1774)">
                          <path
                            d="M1.1748 2.35016V11.7506"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M1.1748 4.70026H11.7503C12.062 4.70026 12.3609 4.82406 12.5812 5.04442C12.8016 5.26479 12.9254 5.56367 12.9254 5.87532V11.7506"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M1.1748 9.98798H12.9254"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M3.52539 4.70026V9.98803"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1114_1774">
                            <rect
                              width="14.1007"
                              height="14.1007"
                              fill="white"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      4
                      <svg
                        className="ms-3 me-1"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1114_1781)">
                          <path
                            d="M5.87477 2.35016L4.69971 3.52522"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9.98779 11.1631V12.3381"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M1.1748 7.05035H12.9254"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M4.11279 11.1631V12.3381"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M5.28775 2.93768L4.47754 2.12747C4.30764 1.95678 4.09191 1.83897 3.85645 1.78832C3.621 1.73766 3.37591 1.75631 3.15084 1.84203C2.92577 1.92775 2.73035 2.07685 2.58824 2.27129C2.44613 2.46574 2.36342 2.6972 2.3501 2.93768V9.98804C2.3501 10.2997 2.4739 10.5986 2.69426 10.8189C2.91463 11.0393 3.21351 11.1631 3.52516 11.1631H10.5755C10.8872 11.1631 11.186 11.0393 11.4064 10.8189C11.6268 10.5986 11.7506 10.2997 11.7506 9.98804V7.05039"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1114_1781">
                            <rect
                              width="14.1007"
                              height="14.1007"
                              fill="white"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      5
                      <svg
                        className="me-1 ms-3"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.70035 1.76257H2.93776C2.62611 1.76257 2.32723 1.88637 2.10686 2.10674C1.8865 2.32711 1.7627 2.62599 1.7627 2.93763V4.70022"
                          stroke="#6B6B6B"
                          stroke-width="1.17506"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.3385 4.70022V2.93763C12.3385 2.62599 12.2147 2.32711 11.9944 2.10674C11.774 1.88637 11.4751 1.76257 11.1635 1.76257H9.40088"
                          stroke="#6B6B6B"
                          stroke-width="1.17506"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M1.7627 9.40051V11.1631C1.7627 11.4747 1.8865 11.7736 2.10686 11.994C2.32723 12.2144 2.62611 12.3382 2.93776 12.3382H4.70035"
                          stroke="#6B6B6B"
                          stroke-width="1.17506"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.40088 12.3382H11.1635C11.4751 12.3382 11.774 12.2144 11.9944 11.994C12.2147 11.7736 12.3385 11.4747 12.3385 11.1631V9.40051"
                          stroke="#6B6B6B"
                          stroke-width="1.17506"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      450 SQM
                    </p>
                    <h4
                      className="fw-bold"
                      style={{ color: " #2A478D", fontFamily: "Georgia" }}
                    >
                      ₦125.0M
                    </h4>
                    <Link to="/buy1" className="text-dark">
                      <button
                        className="btn btn-sm "
                        style={{
                          border: "1px solid #2A478D",
                          fontFamily: "Arial",
                          fontSize: "16px",
                          color: "#2A478D",
                        }}
                      >
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="card col shadow rounded-4 border-0 text-start mb-3">
              <div className="">
                <div className="row align items-center">
                  <div className="col-5">
                    <img
                      src="/images/Hotel-2.jpg"
                      className="img-fluid h-100  rounded"
                      alt="Property"
                    ></img>
                  </div>
                  <div className="col-7">
                    <span
                      className="badge ms-2 btn position-absolute bg-white rounded-5 py-1  top-0 inset-s-0 mt-2  px-3 "
                      style={{ color: "#2A478D" }}
                    >
                      BUY
                    </span>
                    <h5 className="mt-1">Luxury 5-bedroom in Lekki Phase 1</h5>
                    <p className="text-muted">
                      <svg
                        className="me-1"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1114_1768)">
                          <path
                            d="M11.7511 5.87529C11.7511 8.80883 8.49674 11.864 7.40393 12.8076C7.30213 12.8841 7.1782 12.9255 7.05083 12.9255C6.92345 12.9255 6.79953 12.8841 6.69772 12.8076C5.60491 11.864 2.35059 8.80883 2.35059 5.87529C2.35059 4.62871 2.84579 3.43318 3.72725 2.55172C4.60872 1.67025 5.80424 1.17505 7.05083 1.17505C8.29741 1.17505 9.49293 1.67025 10.3744 2.55172C11.2559 3.43318 11.7511 4.62871 11.7511 5.87529Z"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7.05019 7.63791C8.02364 7.63791 8.81278 6.84877 8.81278 5.87532C8.81278 4.90187 8.02364 4.11273 7.05019 4.11273C6.07674 4.11273 5.2876 4.90187 5.2876 5.87532C5.2876 6.84877 6.07674 7.63791 7.05019 7.63791Z"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1114_1768">
                            <rect
                              width="14.1007"
                              height="14.1007"
                              fill="white"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      Lekki Phase 1
                    </p>
                    <p className="text-muted">
                      <svg
                        className="me-1"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1114_1774)">
                          <path
                            d="M1.1748 2.35016V11.7506"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M1.1748 4.70026H11.7503C12.062 4.70026 12.3609 4.82406 12.5812 5.04442C12.8016 5.26479 12.9254 5.56367 12.9254 5.87532V11.7506"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M1.1748 9.98798H12.9254"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M3.52539 4.70026V9.98803"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1114_1774">
                            <rect
                              width="14.1007"
                              height="14.1007"
                              fill="white"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      5
                      <svg
                        className="ms-3 me-1"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1114_1781)">
                          <path
                            d="M5.87477 2.35016L4.69971 3.52522"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9.98779 11.1631V12.3381"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M1.1748 7.05035H12.9254"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M4.11279 11.1631V12.3381"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M5.28775 2.93768L4.47754 2.12747C4.30764 1.95678 4.09191 1.83897 3.85645 1.78832C3.621 1.73766 3.37591 1.75631 3.15084 1.84203C2.92577 1.92775 2.73035 2.07685 2.58824 2.27129C2.44613 2.46574 2.36342 2.6972 2.3501 2.93768V9.98804C2.3501 10.2997 2.4739 10.5986 2.69426 10.8189C2.91463 11.0393 3.21351 11.1631 3.52516 11.1631H10.5755C10.8872 11.1631 11.186 11.0393 11.4064 10.8189C11.6268 10.5986 11.7506 10.2997 11.7506 9.98804V7.05039"
                            stroke="#6B6B6B"
                            stroke-width="1.17506"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1114_1781">
                            <rect
                              width="14.1007"
                              height="14.1007"
                              fill="white"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      5
                      <svg
                        className="me-1 ms-3"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.70035 1.76257H2.93776C2.62611 1.76257 2.32723 1.88637 2.10686 2.10674C1.8865 2.32711 1.7627 2.62599 1.7627 2.93763V4.70022"
                          stroke="#6B6B6B"
                          stroke-width="1.17506"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.3385 4.70022V2.93763C12.3385 2.62599 12.2147 2.32711 11.9944 2.10674C11.774 1.88637 11.4751 1.76257 11.1635 1.76257H9.40088"
                          stroke="#6B6B6B"
                          stroke-width="1.17506"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M1.7627 9.40051V11.1631C1.7627 11.4747 1.8865 11.7736 2.10686 11.994C2.32723 12.2144 2.62611 12.3382 2.93776 12.3382H4.70035"
                          stroke="#6B6B6B"
                          stroke-width="1.17506"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.40088 12.3382H11.1635C11.4751 12.3382 11.774 12.2144 11.9944 11.994C12.2147 11.7736 12.3385 11.4747 12.3385 11.1631V9.40051"
                          stroke="#6B6B6B"
                          stroke-width="1.17506"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      450 SQM
                    </p>
                    <h4
                      className="fw-bold"
                      style={{ color: " #2A478D", fontFamily: "Georgia" }}
                    >
                      ₦250.0M
                    </h4>
                    <Link to="/buy2" className="text-dark">
                      <button
                        className="btn btn-sm "
                        style={{
                          border: "1px solid #2A478D",
                          fontFamily: "Arial",
                          fontSize: "16px",
                          color: "#2A478D",
                        }}
                      >
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="d-none d-md-block container-fluid  bg-dark w-100"
          style={{ paddingTop: "70px " }}
        >
          <div className="row flex-nowrap mx-5 pb-3">
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
              <p
                className=" text-white mb-3"
                style={{ fontFamily: "Helvitica" }}
              >
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
              <p
                className=" text-white mb-3"
                style={{ fontFamily: "Helvitica" }}
              >
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
        <div className="d-none d-md-block container-fluid bg-dark text-white pt-5 border-top  border-secondary">
          <p className="text-secondary mb-0" style={{ fontSize: "14px" }}>
            © 2026 BOC Real Estate Limited. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default BuyList;
