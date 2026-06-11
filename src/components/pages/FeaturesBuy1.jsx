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
import MyNavbar from "../inc/Navbar";
import { Link } from "react-router-dom";

function FeaturesBuy1() {
  const headWrapperStyle = {
    backgroundPosition: "center",
    minHeight: "12vh", //
    display: "flex",
    flexDirection: "column",
    position: "relative",
  };
  return (
    <>
      <div className="container-fluid mx-auto" style={headWrapperStyle}>
        <img
          src="assets/BOC logo.png"
          className="img-fluid position-absolute ms-5 top-0 mt-3"
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
      </div>

      <div>
        <Link to="/properties" className="text-dark">
          <p
            className="text-start ms-5 mb-5"
            style={{ textDecoration: "underline", color: "#2A478D" }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.5 12.002H19"
                stroke="#2A478D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.9999 18.002C10.9999 18.002 5.00001 13.583 5 12.0019C4.99999 10.4208 11 6.00195 11 6.00195"
                stroke="#2A478D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Back to Properties
          </p>
        </Link>
      </div>
      <div className="card border-0 overflow-hidden mx-5">
        <div className="position-relative">
          <span
            className="badge btn position-absolute rounded-5 py-2 ms-3 top-0 mt-2 px-3 start-0"
            style={{ color: "white", backgroundColor: "#c4622d", zIndex: "2" }}
          >
            FOR BUY
          </span>
          <svg
            className="position-absolute top-50 start-0 translate-middle-y ms-3 jusify-content-center align-items-center"
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 16.2304C0 7.26658 7.26658 0 16.2304 0C25.1942 0 32.4607 7.26658 32.4607 16.2304C32.4607 25.1942 25.1942 32.4607 16.2304 32.4607C7.26658 32.4607 0 25.1942 0 16.2304Z"
              fill="white"
              fill-opacity="0.9"
            />
            <path
              d="M18.6645 21.0995L13.7954 16.2303L18.6645 11.3612"
              stroke="#1A1A1A"
              stroke-width="1.62304"
              stroke-linecap="round"
              stroke-linejoin="round"
              style={{ zIndex: "2" }}
            />
          </svg>
          <svg
            className="position-absolute top-50 end-0 translate-middle-y me-3"
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 16.2304C0 7.26658 7.26658 0 16.2304 0C25.1942 0 32.4607 7.26658 32.4607 16.2304C32.4607 25.1942 25.1942 32.4607 16.2304 32.4607C7.26658 32.4607 0 25.1942 0 16.2304Z"
              fill="white"
              fill-opacity="0.9"
            />
            <path
              d="M13.7949 21.0995L18.664 16.2303L13.7949 11.3612"
              stroke="#1A1A1A"
              stroke-width="1.62304"
              stroke-linecap="round"
              stroke-linejoin="round"
              style={{ zIndex: "2" }}
            />
          </svg>
          <span className="badge bg-dark bg-opacity-75 position-absolute bottom-0 start-50 translate-middle-x mb-3">
            1/4
          </span>
          <img
            src="assets/Hotel-one.jpg"
            className="thumb w-100 rounded-4"
            style={{ objectFit: "cover", height: "600px", display: "block" }}
          ></img>
        </div>
      </div>

      <div className="container-fluid mt-4 ">
        <div className="row g-4 ms-4 me-4">
          <div className="col-lg-8 text-start">
            <h4
              className="fw-bold"
              style={{ fontFamily: "Georgia", color: "#2A478D" }}
            >
              Luxury 4-Bedroom Duplex in Lekki Phase 1
            </h4>
            <p className="text-muted small">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1092_1211)">
                  <path
                    d="M13.5535 6.77665C13.5535 10.1602 9.79996 13.6841 8.53951 14.7724C8.42209 14.8607 8.27915 14.9084 8.13224 14.9084C7.98532 14.9084 7.84238 14.8607 7.72496 14.7724C6.46451 13.6841 2.71094 10.1602 2.71094 6.77665C2.71094 5.33883 3.28211 3.9599 4.2988 2.94321C5.31549 1.92652 6.69442 1.35535 8.13224 1.35535C9.57006 1.35535 10.949 1.92652 11.9657 2.94321C12.9824 3.9599 13.5535 5.33883 13.5535 6.77665Z"
                    stroke="#6B6B6B"
                    stroke-width="1.35533"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.13162 8.80963C9.25441 8.80963 10.1646 7.89943 10.1646 6.77664C10.1646 5.65385 9.25441 4.74365 8.13162 4.74365C7.00883 4.74365 6.09863 5.65385 6.09863 6.77664C6.09863 7.89943 7.00883 8.80963 8.13162 8.80963Z"
                    stroke="#6B6B6B"
                    stroke-width="1.35533"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1092_1211">
                    <rect width="16.2639" height="16.2639" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              15 Admiralty Way, Lekki Phase 1, Lagos
            </p>
            <h3
              className="fw-bold mb-3"
              style={{ fontFamily: "Georgia", color: "#2A478D" }}
            >
              ₦125.0M
            </h3>

            <div className="row g-2 mb-4">
              <div className="col-3">
                <div className="bg-light rounded-3 p-3 text-start">
                  <div>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1092_1219)">
                        <path
                          d="M1.62695 3.25281V16.2639"
                          stroke="#2A478D"
                          stroke-width="1.62639"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M1.62695 6.50562H16.2645C16.6958 6.50562 17.1095 6.67697 17.4145 6.98197C17.7195 7.28698 17.8909 7.70066 17.8909 8.13201V16.264"
                          stroke="#2A478D"
                          stroke-width="1.62639"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M1.62695 13.8243H17.8909"
                          stroke="#2A478D"
                          stroke-width="1.62639"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4.87988 6.50562V13.8244"
                          stroke="#2A478D"
                          stroke-width="1.62639"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1092_1219">
                          <rect width="19.5167" height="19.5167" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="fw-bold">4</div>
                  <div style={{ fontSize: "12px", whiteSpace: "nowrap" }}>
                    Bedrooms
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="bg-light rounded-3 p-3 text-start">
                  <div>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.13225 3.25281L6.50586 4.8792"
                        stroke="#2A478D"
                        stroke-width="1.62639"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.8242 15.4507V17.0771"
                        stroke="#2A478D"
                        stroke-width="1.62639"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1.62695 9.75836H17.8909"
                        stroke="#2A478D"
                        stroke-width="1.62639"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.69238 15.4507V17.0771"
                        stroke="#2A478D"
                        stroke-width="1.62639"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.3189 4.06599L6.19751 2.94459C5.96234 2.70834 5.66375 2.54529 5.33786 2.47517C5.01197 2.40505 4.67275 2.43088 4.36123 2.54952C4.04971 2.66815 3.77924 2.87452 3.58255 3.14366C3.38585 3.41279 3.27136 3.73315 3.25293 4.06599V13.8243C3.25293 14.2557 3.42428 14.6694 3.72929 14.9744C4.0343 15.2794 4.44797 15.4507 4.87932 15.4507H14.6377C15.069 15.4507 15.4827 15.2794 15.7877 14.9744C16.0927 14.6694 16.264 14.2557 16.264 13.8243V9.75835"
                        stroke="#2A478D"
                        stroke-width="1.62639"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="fw-bold">5</div>
                  <div style={{ fontSize: "12px", whiteSpace: "nowrap" }}>
                    Bathrooms
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="bg-light rounded-3 p-3 text-start">
                  <div>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.50543 2.43958H4.06584C3.6345 2.43958 3.22082 2.61093 2.91581 2.91593C2.6108 3.22094 2.43945 3.63462 2.43945 4.06597V6.50555"
                        stroke="#2A478D"
                        stroke-width="1.62639"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17.0767 6.50555V4.06597C17.0767 3.63462 16.9054 3.22094 16.6004 2.91593C16.2954 2.61093 15.8817 2.43958 15.4503 2.43958H13.0107"
                        stroke="#2A478D"
                        stroke-width="1.62639"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2.43945 13.0112V15.4508C2.43945 15.8821 2.6108 16.2958 2.91581 16.6008C3.22082 16.9058 3.6345 17.0771 4.06584 17.0771H6.50543"
                        stroke="#2A478D"
                        stroke-width="1.62639"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.0107 17.0771H15.4503C15.8817 17.0771 16.2954 16.9058 16.6004 16.6008C16.9054 16.2958 17.0767 15.8821 17.0767 15.4508V13.0112"
                        stroke="#2A478D"
                        stroke-width="1.62639"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="fw-bold">450</div>
                  <div style={{ fontSize: "12px", whiteSpace: "nowrap" }}>
                    SQM
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="bg-light rounded-3 p-3 text-start">
                  <div>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.4503 13.8243H17.0767C17.5646 13.8243 17.8899 13.4991 17.8899 13.0111V10.5716C17.8899 9.83968 17.3206 9.18912 16.6701 9.02648C15.2063 8.61988 13.0107 8.13197 13.0107 8.13197C13.0107 8.13197 11.9536 6.99349 11.2217 6.26162C10.8151 5.93634 10.3272 5.69238 9.75793 5.69238H4.06556C3.57764 5.69238 3.17105 6.01766 2.92709 6.42426L1.78862 8.78252C1.68093 9.0966 1.62598 9.42633 1.62598 9.75836V13.0111C1.62598 13.4991 1.95125 13.8243 2.43917 13.8243H4.06556"
                        stroke="#2A478D"
                        stroke-width="1.62639"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.6928 15.4507C6.59103 15.4507 7.31919 14.7226 7.31919 13.8243C7.31919 12.9261 6.59103 12.1979 5.6928 12.1979C4.79457 12.1979 4.06641 12.9261 4.06641 13.8243C4.06641 14.7226 4.79457 15.4507 5.6928 15.4507Z"
                        stroke="#2A478D"
                        stroke-width="1.62639"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.31934 13.8243H12.1985"
                        stroke="#2A478D"
                        stroke-width="1.62639"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.8246 15.4507C14.7229 15.4507 15.451 14.7226 15.451 13.8243C15.451 12.9261 14.7229 12.1979 13.8246 12.1979C12.9264 12.1979 12.1982 12.9261 12.1982 13.8243C12.1982 14.7226 12.9264 15.4507 13.8246 15.4507Z"
                        stroke="#2A478D"
                        stroke-width="1.62639"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="fw-bold">3</div>
                  <div style={{ fontSize: "12px", whiteSpace: "nowrap" }}>
                    Parking
                  </div>
                </div>
              </div>
            </div>

            <div className="border-bottom mb-3">
              <Link to="/buy1" className="text-dark">
                <span className="me-4 pb-2 d-inline-block  ">Overview</span>
              </Link>

              <span className="me-4 pb-2 d-inline-block border-bottom border-primary fw-bold">
                Features
              </span>

              <Link to="/locationbuy1" className="text-dark">
                <span className="me-4 pb-2 d-inline-block">Location</span>
              </Link>
            </div>

            <h6
              className="fw-bold mb-3"
              style={{ fontFamily: "Georgia", color: "#2A478D" }}
            >
              Features & Amenities
            </h6>

            <div className="container-fluid border-bottom mb-2 col-12 ">
              <div className="row">
                <div className="col-12 col-md-4">
                  <p className="text-secondary mb-2 ">
                    <svg
                      className="me-2"
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4Z"
                        fill="#2A478D"
                      />
                    </svg>
                    Swimming Pool
                  </p>
                  <p className="text-secondary mb-2 ">
                    <svg
                      className="me-2"
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4Z"
                        fill="#2A478D"
                      />
                    </svg>
                    Backup Generator
                  </p>
                  <p className="text-secondary mb-2 ">
                    <svg
                      className="me-2"
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4Z"
                        fill="#2A478D"
                      />
                    </svg>
                    Air Conditioning
                  </p>
                  <p className="text-secondary mb-3 ">
                    <svg
                      className="me-2"
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4Z"
                        fill="#2A478D"
                      />
                    </svg>
                    Garden
                  </p>
                </div>

                <div className="col-12 col-md-4">
                  <p className="text-secondary mb-2">
                    <svg
                      className="me-2"
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4Z"
                        fill="#2A478D"
                      />
                    </svg>
                    Gym
                  </p>
                  <p className="text-secondary mb-2">
                    <svg
                      className="me-2"
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4Z"
                        fill="#2A478D"
                      />
                    </svg>
                    CCTV
                  </p>
                  <p className="text-secondary mb-2">
                    <svg
                      className="me-2"
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4Z"
                        fill="#2A478D"
                      />
                    </svg>
                    Borehole
                  </p>
                </div>

                <div className="col-12 col-md-4">
                  <p className="text-secondary mb-2">
                    <svg
                      className="me-2"
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4Z"
                        fill="#2A478D"
                      />
                    </svg>
                    24/7 Security
                  </p>
                  <p className="text-secondary mb-2">
                    <svg
                      className="me-2"
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4Z"
                        fill="#2A478D"
                      />
                    </svg>
                    Fitted Kitchen
                  </p>
                  <p className="text-secondary mb-2">
                    <svg
                      className="me-2"
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4Z"
                        fill="#2A478D"
                      />
                    </svg>
                    Parking
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card shadow-sm border rounded-3 p-3">
              <h6
                className="fw-bold mb-3 text-start"
                style={{ fontFamily: "Georgia" }}
              >
                Contact Us
              </h6>

              <div className="d-flex align-items-center mb-3">
                <img
                  src="assets/Hotel-2.jpg"
                  className="rounded-circle me-2"
                  width="45"
                  height="45"
                  alt="Agent"
                />
                <span className="fw-semibold">BOC Agent - 0027</span>
              </div>

              <button
                className="btn  w-100 mb-2"
                style={{ backgroundColor: "#2A478D", color: "white" }}
              >
                Send Enquiry
              </button>
              <button className="btn btn-success w-100">
                <i className="bi bi-whatsapp me-2"></i>WhatsApp Agent
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid text-start">
        <p
          className="mt-5 fw-bold mb-4"
          style={{ fontFamily: "Georgia", fontSize: "30px" }}
        >
          Similar Properties
        </p>
        <div className="row mb-5">
          <div className="col-12 col-md-4 col-lg-4 col-xl-4">
            <div className="card">
              <img
                src="assets/Hotel-2.jpg"
                className="card-img-top"
                style={{ objectFit: "cover" }}
              ></img>
              <p
                className="fw-semibold mt-3 mb-2 ps-3"
                style={{ fontFamily: "Georgia", fontSize: "20px" }}
              >
                Executive 5-Bedroom Mansion with Pool
              </p>
              <p className="ps-3">Banana Island</p>
              <p
                className="ps-3 fw-semibold"
                style={{
                  fontFamily: "Georgia",
                  fontSize: "20px",
                  color: "#2a478d",
                }}
              >
                ₦250.0M
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-4 col-xl-4">
            <div className="card">
              <img
                src="assets/Hotel-3.jpg"
                className="card-img-top"
                style={{ objectFit: "cover" }}
              ></img>
              <p
                className="fw-semibold mt-3 mb-2 ps-3"
                style={{ fontFamily: "Georgia", fontSize: "20px" }}
              >
                Executive 5-Bedroom Mansion with Pool
              </p>
              <p className="ps-3">Banana Island</p>
              <p
                className="ps-3 fw-semibold"
                style={{
                  fontFamily: "Georgia",
                  fontSize: "20px",
                  color: "#2a478d",
                }}
              >
                ₦250.0M
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-4 col-xl-4">
            <div className="card">
              <img
                src="assets/Hotel-one.jpg"
                className="card-img-top"
                style={{ objectFit: "cover" }}
              ></img>
              <p
                className="fw-semibold mt-3 mb-2 ps-3"
                style={{ fontFamily: "Georgia", fontSize: "20px" }}
              >
                Executive 5-Bedroom Mansion with Pool
              </p>
              <p className="ps-3">Banana Island</p>
              <p
                className="ps-3 fw-semibold"
                style={{
                  fontFamily: "Georgia",
                  fontSize: "20px",
                  color: "#2a478d",
                }}
              >
                ₦250.0M
              </p>
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
        className="d-none d-md-block container-fluid align-items-center bg-dark text-white pt-5 border-top  border-secondary"
        style={{ minWidth: "100%" }}
      >
        <p className="text-secondary mb-0" style={{ fontSize: "14px" }}>
          © 2026 BOC Real Estate Limited. All rights reserved.
        </p>
      </div>
    </>
  );
}

export default FeaturesBuy1;
