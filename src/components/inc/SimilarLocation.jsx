import { useParams, Link } from "react-router-dom";
import { property } from "../../data/Properties";
import Footer from "../inc/Footer";
import { similar } from "../../data/Similar";
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
import { useState } from "react";
export default function SimilarLocation() {
  const [isOpen, setIsOpen] = useState(false);
  const { slug } = useParams();
  const sim = similar.find((p) => p.slug === slug);

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
          src="/images/BOC logo.png"
          className="img-fluid position-absolute ms-2 top-0 mt-3"
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
                className="close position-absolute d-md-none top-0 end-0 mt-2 me-2 btn-close btn-close-dark"
                onClick={() => setIsOpen(false)}
                style={{ fontSize: "1.2rem", color: "#000" }}
                aria-label="Close"
              ></button>
            )}

            <Navbar.Collapse id="navbarScroll" className="eba" in={isOpen}>
              <Nav
                className="mx-auto g-3 bg-white flex-column align-items-center flex-lg-row rounded-5 "
                navbarScroll
                style={{
                  top: "80px",
                  overflowY: "auto",
                  backgroundColor: "white",

                  zIndex: 1050,
                  maxHeight: "calc(100vh -100px)",
                }}
              >
                <Nav.Link as={Link} to="/" className="px-3 text-dark">
                  Home
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/properties"
                  className="px-"
                  href="#action2"
                  style={{ color: "#2A478D" }}
                >
                  Properties
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

              <Link
                to="/properties"
                className="d-none d-md-flex text-dark text-decoration-none"
              >
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
            className="text-start ms-md-5 mb-5 d-flex"
            style={{ textDecoration: "underline", color: "#2A478D" }}
          >
            <svg
              className="mt-2 mt-md-1"
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
      <div className="card border-0 overflow-hidden mx-md-5">
        <div className="position-relative">
          <span
            className="badge btn position-absolute rounded-5 py-2 ms-3 top-0 mt-2 px-3 inset-s-0"
            style={{ color: "white", backgroundColor: "#c4622d", zIndex: "2" }}
          >
            FOR {sim.badge1}
          </span>
          
          <img
            src={sim.image}
            className="thumb w-100 rounded-4"
            style={{ objectFit: "cover", height: "600px", display: "block" }}
          ></img>
        </div>
      </div>

      <div className="container-fluid mt-4 ">
        <div className="row g-4 mx-md4">
          <div className="col-lg-8 text-start">
            <h4
              className="fw-bold"
              style={{ fontFamily: "Georgia", color: "#2A478D" }}
            >
              {sim.name}
            </h4>
            <p className="text-muted small d-flex ">
              <svg
                className="loc"
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
           {sim.location}
            </p>
            <h3
              className="fw-bold mb-3"
              style={{ fontFamily: "Georgia", color: "#2A478D" }}
            >
              {sim.price}
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
                  <div className="fw-bold">{sim.bedroom}</div>
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
              <Link to={`/similar/${sim.slug}`} className="text-dark">
                <span className="me-4 pb-2 d-inline-block ">Overview</span>
              </Link>

              <Link to={`/similarfeatures/${sim.slug}`} className="text-dark">
                <span className="me-4 pb-2 d-inline-block">Features</span>
              </Link>

              <span className="me-4 pb-2 d-inline-block fw-bold border-bottom border-primary">
                Location
              </span>
            </div>

            <div className="container-fluid border-bottom mb-2 col-12 ">
              <div className="row">
                <div className="col-12 col-md-4">
                  <p className="text-secondary mb-0">Neighborhood</p>
                  <p className="mb-5">Lekki Phase 1</p>

                  <p className="text-secondary mb-0">State</p>
                  <p className="">Lagos State</p>
                </div>

                <div className="col-4">
                  <p className="text-secondary mb-0">City</p>
                  <p className="mb-5">Lagos</p>

                  <p className="text-secondary mb-0">Country</p>
                  <p className="">Nigeria</p>
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
                  src={sim.agent}
                  className="rounded-5 me-2"
                  style={{
                    width: "45px",
                    height: "45px",
                    alt: "Agent",
                    objectFit: "cover",
                    flexShrink: 0,
                  }}
                />
                <span className="fw-semibold">BOC Agent - 0027</span>
              </div>

              <Link to="/contact" className="text-dark">
                <button>
                  <a
                    className="btn  w-100 mb-2"
                    style={{ backgroundColor: "#2A478D", color: "white" }}
                  >
                    Send Enquiry
                  </a>
                </button>
              </Link>
              <button>
                <a
                  href={sim.whatsapp}
                  className="btn btn-success w-100 text-decoration-none text-white bi bi-whatsapp"
                >
                  <span className="ms-2">WhatsApp Agent</span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <a href="https://wa.me/2348144697306">
          <span
            className="btn position-fixed rounded-circle "
            style={{
              bottom: "20px",
              right: "20px",
              width: "60px",
              height: "60px",
              backgroundColor: "rgb(44, 212, 11)",
              zIndex: "10",
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
                borderRadius: "30px 30px 30px 2px",
                position: "fixed",
                margin: "15px 15px 15px 15px",
              }}
            ></span>
          </span>
        </a>
      </div><a
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
      <div className="container-fluid text-start">
        <p
          className="mt-5 fw-bold mb-4"
          style={{ fontFamily: "Georgia", fontSize: "30px" }}
        >
          Similar Properties
        </p>
        <div className="row mb-5 justify-content-around d-flex g-4">
          {similar.map((sim) => (
            <div key={sim.id} className="col-12 col-md-4 col-lg-4 col-xl-4 g-4">
              <div className="card">
                <img
                  src={sim.image}
                  className="card-img-top"
                  style={{ objectFit: "cover" }}
                ></img>
                <p
                  className="fw-semibold mt-3 mb-2 ps-3"
                  style={{ fontFamily: "Georgia", fontSize: "20px" }}
                >
                  Executive {sim.bedroom}-Bedroom Mansion with Pool
                </p>
                <p className="ps-3">Banana Island</p>
                <div className="position-relative mt-3">
                  <p
                    style={{ color: "#2A478D", fontFamily: "Georgia" }}
                    className="price ms-2 h4 fw-bold"
                  >
                    {sim.price}
                    <Link to={`/similar/${sim.slug}`} className="text-dark">
                      <span
                        className="details bottom-0 mb-2 end-0 me-2 position-absolute fw-bold py-2 px-2 rounded-3"
                        style={{
                          color: "#2A478D",
                          border: "1px solid #2A478D",
                          fontFamily: "Arial",
                          fontSize: "14px",
                        }}
                      >
                        View Details
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
