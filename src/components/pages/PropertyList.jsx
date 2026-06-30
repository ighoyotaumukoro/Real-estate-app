import React, { useState, useEffect, useMemo } from "react";
import Footer from "../inc/Footer";
import {usePropertyFilter} from "../../usePropertyFilter";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
import HeroBg from "../../assets/Hero-bg.jpg";
import {
  Link,
  useParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { property2 } from "../../data/Properties2";

const PropertyList = () => {
   const navigate = useNavigate();
    const { slug } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const property = property2.find((p) => p.slug === slug);
  
    const [displayCount, setDisplayCount] = useState(0);
  
    const { filteredProperty, filters, handlers } = usePropertyFilter(property2);
    const { name, location, minPrice, maxPrice, bedroom, bathroom, sort } =
      filters;
    const {
      setName,
      setLocation,
      setMinPrice,
      setMaxPrice,
      setBedroom,
      setBathroom,
      setSort,
     resetAll
  } = handlers;

  const handleReset = () => {
    resetAll();
  };

  
    const goToList = () => {
      navigate(`/properties?${searchParams.toString()}`);
    };
  
    const [isOpen, setIsOpen] = useState(false);
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
          className="img-fluid position-absolute top-0 ms-2 mt-3"
          style={{ height: "60px", width: "80px" }}
        ></img>
        <Navbar expand="lg" variant="light" className="mt-4 py-1">
          <Container fluid className="position-relative">
            {!isOpen && (
              <Navbar.Toggle
                aria-controls="navbarScroll"
                className="ms-auto justify-content-center align-content-center"
                onClick={() => setIsOpen(true)}
              />
            )}

            {isOpen && (
              <button
                className="position-absolute d-md-none top-0 end-0 mt-2 me-2 btn-close btn-close-dark"
                onClick={() => setIsOpen(false)}
                style={{ fontSize: "1.2rem", color: "#000" }}
                aria-label="Close"
              ></button>
            )}

            <Navbar.Collapse
              id="navbarScroll"
              className="eba start-0 end-0 mx-0"
              in={isOpen}
            >
              <Nav
                className=" mx-auto g-3 bg-white flex-column align-items-center flex-lg-row rounded-5 "
                navbarScroll
                style={{
                  top: "50px",
                  overflowY: "auto",
                  backgroundColor: "white",
                  zIndex: 1050,
                  maxHeight: "calc(100vh -100px)",
                }}
              >
                <Nav.Link as={Link} to="/" className="text-dark px-3">
                  Home
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/properties"
                  className="px-5 "
                  style={{ color: "#2A478D" }}
                  href="#action2"
                >
                  Properties
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="/contact"
                  className="px-5 text-dark"
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
            <p className="col-lg-8 mb-5">{displayCount} property found</p>
          </div>
        </div>
      </div>

      <div className="container-fluid px-3 px-md-4">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-4 col-xl-4">
            <div className="prop-card card shadow mt-3 border-0">
              <div className="prop-body card-body text-start">
                <p
                  className="fw-bold mt-0"
                  style={{ fontFamily: "Helvitical" }}
                >
                  Filter
                  <button
                    onClick={handleReset}
                    className="btn mt-1 fw-bold flex position-absolute inset-e-0 me-2"
                    style={{
                      color: "#2A478D",
                      fontFamily: "Arial",
                      fontSize: "12px",
                    }}
                  >
                    Reset All
                  </button>
                </p>

                <form className="pb-3">
                  <p className="mb-2" style={{ fontFamily: "Arial" }}>
                    Property Type
                  </p>
                  <input
                    type="text"
                    value={name}
                    className="form-control mb-3"
                    onChange={setName}
                  />
                  <p className="mb-2" style={{ fontFamily: "Arial" }}>
                    Location
                  </p>
                  <input
                    value={location}
                    type="text"
                    className="form-control mb-3"
                    required
                    placeholder="City or Neighborhood"
                    onChange={setLocation}
                  />

                  <p className="mb-2" style={{ fontFamily: "Arial" }}>
                    Price Range (₦)
                  </p>
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                      <input
                        value={minPrice}
                        type="text"
                        className="form-control mb-3"
                        required
                        placeholder="Min."
                        onChange={setMinPrice}
                      />
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                      <input
                        value={maxPrice}
                        type="text"
                        className="form-control mb-3"
                        required
                        placeholder="Max."
                        onChange={setMaxPrice}
                      />
                    </div>
                  </div>
                  <p className="mb-2" style={{ fontFamily: "Arial" }}>
                    Bedrooms
                  </p>
                  <input
                    value={bedroom}
                    type="text"
                    className="form-control mb-3"
                    onChange={setBedroom}
                  />
                  <p className="mb-2" style={{ fontFamily: "Arial" }}>
                    Bathrooms
                  </p>
                  <input
                    value={bathroom}
                    type="text"
                    className="form-control mb-3"
                    onChange={setBathroom}
                  />
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
            <div className="row">
              <div className="col-8">
                <select
                  value={sort}
                  onChange={setSort}
                  className="bg-white text-dark d-flex p-1 pe-3 border mb-3  mt-3 rounded-2 fw-bold"
                >
                  <option value="" className="fw-light">Default</option>
                  <option value="low" className="fw-light"> low-to-high</option>
                  <option value="high" className="">high-to-low</option>
                </select>
              </div>

              <div className="row col-4 d mt-2 flex justify-content-evenly px-auto">
                <div className="col-3">
                  <button onClick={goToList} className="text-dark">
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
                  </button>
                </div>
                <div className="col-2">
                  <svg
                    className="icon mt-3 position-relative"
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
            </div>
            <p>{filteredProperty.length} property found</p>
            <a
        href="https://wa.me/2348144697306"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
         className="whatsapp-background"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 9999,
          width: "64px",
          height: "64px",
          borderRadius: "50%",
          backgroundColor: "rgb(44, 212, 11)",
          display: "flex",
          alignItems: "center",
          paddingTop:"0px",
          justifyContent: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
          textDecoration: "none",
        }}
      >
        
        <svg
        className="whatsapp m-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="45"
          height="45"

          fill="white"
        >
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.466 2.027 7.76L0 32l8.455-2.008A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.756-1.842l-.485-.29-5.02 1.193 1.224-4.888-.317-.502A13.267 13.267 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.878c-.398-.199-2.355-1.162-2.72-1.295-.366-.133-.632-.199-.899.2-.266.398-1.031 1.294-1.264 1.56-.233.266-.466.3-.864.1-.398-.2-1.681-.62-3.203-1.977-1.184-1.056-1.983-2.36-2.216-2.758-.233-.399-.025-.614.175-.812.18-.178.399-.466.598-.699.2-.233.266-.399.4-.665.132-.266.066-.499-.034-.698-.1-.2-.899-2.167-1.232-2.967-.324-.78-.654-.674-.899-.686l-.765-.013c-.266 0-.698.1-.1065.499-.366.4-1.397 1.363-1.397 3.325 0 1.963 1.43 3.86 1.63 4.126.199.266 2.815 4.3 6.822 6.03.954.412 1.698.658 2.278.842.957.305 1.828.262 2.516.159.767-.114 2.355-.963 2.688-1.893.332-.93.332-1.727.232-1.893-.1-.166-.366-.266-.765-.465z" />
        </svg>
      </a>
            {filteredProperty.length > 0 ? (
              filteredProperty.map((property) => (
                <div
                  key={property.id}
                  property={property}
                  className="list card shadow rounded-4 border-0  text-start mb-3 "
                >
                  <div className="">
                    <div className="row align items-center">
                      <div className="col-6">
                        <img
                          src={property.image}
                          className="img-fluid  rounded position-absolute top-0 w-50 h-100"
                          alt="Property"
                        ></img>
                      </div>
                      <div className="buylist col-6">
                        <span
                          className="badge  position-absolute top-3 bg-white rounded-5 start-3 px-3 inset-s-0 "
                          style={{ color: "#2A478D" }}
                        >
                          {property.badge1}
                        </span>

                        <div className="">
                          <h5 className="name mt-1">{property.name}</h5>
                          <p className="text-muted d-flex mb-2">
                            <svg
                              className="me-1 mt-1"
                              width="20"
                              height="20"
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
                            {property.location}
                          </p>
                          <p className="text-muted d-flex ">
                            <svg
                              className="me-1 mt-1"
                              width="20"
                              height="20"
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
                            {property.bedroom}
                            <svg
                              className="ms-3 me-1 mt-1"
                              width="20"
                              height="20"
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
                              className="me-1 ms-3 mt-1"
                              width="20"
                              height="20"
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
                            className="name fw-bold"
                            style={{ color: " #2A478D", fontFamily: "Georgia" }}
                          >
                            {property.price}
                          </h4>
                          <Link to={`/buy1/${property.slug}`}>
                            <button
                              className="details-btn btn btn-sm mb-2"
                              style={{
                                border: "1px solid #2A478D",
                                fontFamily: "Arial",
                                fontSize: "16px",
                                color: "#2A478D",
                              }}
                            >
                              {property.details}
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div>
                <div className="col-12">
                  <div className="card  border-0  shadow-sm align-items-center align-self-center py-5 mt-5">
                    <div className="card-body empty-state">
                      <p>No properties match your filters</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="position-absolute end-0 start-0 mx-0">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default PropertyList;
