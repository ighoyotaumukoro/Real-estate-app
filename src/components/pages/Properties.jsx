import React, { useState, useEffect, useMemo } from "react";
import Footer from "../inc/Footer";
import { usePropertyFilter } from "../../usePropertyFilter";
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

const Properties = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const property = property2.find((p) => p.slug === slug);

  const [displayCount, setDisplayCount] = useState(0);
  console.log("property2:", property2);
  const { filteredProperty, filters, handlers, updateParam } =
    usePropertyFilter(property2);
  const {
    name,
    selectedAmenities,
    showAmenities,
    allAmenities,
    location,
    minPrice,
    bathroomOptions,
    maxPrice,
    bedroom,
    bathroom,
    sort,
  } = filters;
  const {
    setName,
    setLocation,
    setMinPrice,
    setMaxPrice,
    setBedroom,
    setBathroom,
    setSort,
    toggleAmenity,
    setShowAmenities,
    resetAll,
  } = handlers;

  const handleReset = () => {
    resetAll();
  };

  const goToList = () => {
    navigate(`/propertyList?${searchParams.toString()}`);
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

  console.log("I AM MAPPING:", filteredProperty.length, filteredProperty);
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
                <Nav.Link as={Link} to="/" className="text-dark px-5">
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
          <div className="container text-center text-md-start text-white ps-5">
            <h1
              className="display-3 mt-5 fw-light"
              style={{ color: "#2A478D", fontFamily: "Helvitica" }}
            >
              Properties for Sale
            </h1>
            <p className="pack text-center text-center text-md-start col-lg-8  mb-5">
              {displayCount} property found
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid px-3 px-md-4">
        <div className="row">
          <div
            className="col-12 col-md-4 col-lg-4 col-xl-4 position-relative"
            style={{ zIndex: showAmenities ? 1060 : 2 }}
          >
            <div className="prop-card card shadow mt-3 border-0 position-relative">
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

                <form className="pb-3" onSubmit={(e) => e.preventDefault()}>
                  <p className="mb-2" style={{ fontFamily: "Arial" }}>
                    Property Type
                  </p>
                  <input
                    type="text"
                    value={name}
                    className="form-control mb-3"
                    onChange={(e) => setName(e.target.value)}
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
                    onChange={(e) => setLocation(e.target.value)}
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
                        placeholder="Min. e.g 10M"
                        onChange={(e) => setMinPrice(e.target.value)}
                      />
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                      <input
                        value={maxPrice}
                        type="text"
                        className="form-control mb-3"
                        required
                        placeholder="Max. e.g 12M"
                        onChange={(e) => setMaxPrice(e.target.value)}
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
                    onChange={(e) => setBedroom(e.target.value)}
                  />
                  <p className="mb-2" style={{ fontFamily: "Arial" }}>
                    Bathrooms
                  </p>
                  <select
                    value={bathroom}
                    onChange={(e) => setBathroom(e.target.value)}
                    className="form-select"
                  >
                    {bathroomOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <button
                    type="button"
                    className="form-control mt-5 text-start d-flex justify-content-between align-items-center"
                    onClick={() => setShowAmenities(!showAmenities)}
                  >
                    <span>
                      {selectedAmenities.length > 0
                        ? `${selectedAmenities.length} Selected`
                        : "All Amenities"}
                    </span>
                    <i
                      className={`bi bi-chevron-${showAmenities ? "up" : "down"}`}
                    ></i>
                  </button>
                  {showAmenities && (
                    <div
                      className="dropdown-menu show w-100 p-2 shadow"
                      style={{
                        maxHeight: "min(600px, 60vh)",
                        maxWidth: "480px",
                        overflowY: "auto",
                        zIndex: 1050,
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {allAmenities.map((amenity) => (
                        <div key={amenity} className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id={amenity}
                            checked={selectedAmenities.includes(amenity)}
                            onChange={() => toggleAmenity(amenity)}
                          />
                          <label
                            className="form-check-label w-100"
                            htmlFor={amenity}
                          >
                            {amenity}
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>

          <div
            className="col-sm-12 col-md-8 col-lg-8 col-xl-8 position-relative"
            style={{ zIndex: 1 }}
          >
            <div className="row mt-3">
              <div className="col-8">
                <select
                  value={sort}
                  onChange={setSort}
                  className="bg-white fw-light custom-select-light text-dark d-flex p-1 pe-3 border mb-3  mt-3 rounded-2 fw-bold"
                >
                  <option value="" className="fw-light">
                    Default
                  </option>
                  <option value="low" className="fw-light">
                    {" "}
                    low-to-high
                  </option>
                  <option value="high" className="">
                    high-to-low
                  </option>
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
                  <button onClick={goToList} className="text-dark">
                    <svg
                      className="icon mt-3"
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
                  </button>
                </div>
              </div>
            </div>
            <p>{filteredProperty.length} property found</p>
            <div className="row">
              {console.log("First property:", filteredProperty[0])}
              {filteredProperty.length > 0 ? (
                filteredProperty.map((property) => (
                  <div
                    key={property.id}
                    property={property}
                    className="col-12 col-md-6 col-lg-6 col-xl-6 "
                  >
                    <div className="card shadow border-0 mb-3 mt-3">
                      <img src={property.image} className="card-img-top"></img>
                      <div className="card-body text-start">
                        <span
                          className="badge btn position-absolute bg-white  rounded-5 py-2 top-0 mt-2 ms-0 px-3 "
                          style={{ color: "#2A478D" }}
                        >
                          {property.badge1}
                        </span>
                        <span className="badge btn position-absolute bg-dark text-white rounded-4 py-2 inset-e-0 me-3 top-0 mt-2  px-3 align ">
                          {property.badge2}
                        </span>
                        <p className="mb-1 text-wrap">{property.name}</p>
                        <p className="text-muted my-1">{property.location}</p>
                        <p className="text-muted my-1">
                          {" "}
                          {property.bedroom} Beds 5 Baths 450 SQM
                        </p>
                        <div className="position-relative mt-3">
                          <p
                            style={{ color: "#2A478D", fontFamily: "Georgia" }}
                            className="price h4 fw-bold"
                          >
                            {property.price}
                            <Link to={`/buy1/${property.slug}`}>
                              <span
                                className="details end-0 position-absolute fw-bold py-2 px-3 rounded-3"
                                style={{
                                  color: "#2A478D",
                                  border: "1px solid #2A478D",
                                  fontFamily: "Arial",
                                  fontSize: "16px",
                                }}
                              >
                                {property.details}
                              </span>
                            </Link>
                          </p>
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
        </div>
      </div>

      <div className="mt-4">
        <Footer />
      </div>
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
          paddingTop: "0px",
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
    </>
  );
};

export default Properties;