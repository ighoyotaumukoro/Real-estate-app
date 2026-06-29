import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
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

function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_temapu",
        "template_yve0uae",
        form.current,
        "6C2PgqEu5M-DqLVt_",
      )
      .then(
        () => {
          setSent(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Message Failed to send. Try again.");
        },
      );
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

            <Navbar.Collapse id="navbarScroll" className="eba start-0 end-0 mx-0" in={isOpen}>
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
                <Nav.Link
                  as={Link}
                  to="/"
                  className="px-5 text-dark"
                  style={{ color: "#2A478D" }}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/properties"
                  className="px-5 text-dark"
                  href="#action2"
                  style={{ color: "#2A478D" }}
                >
                  Properties
                </Nav.Link>
                
                <Nav.Link
                  as={Link}
                  to="/contact"
                  className="px-5"
                  href="#action4"
                  style={{ color: "#2A478D" }}
                >
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="align-items-start justify-content-start">
          <div className="container-fluid text-start text-white">
            <h1
              className="contact-title display-3 mt-5 fw-light"
              style={{ color: "#2A478D", fontFamily: "Georgia" }}
            >
              Contact Us
            </h1>
            <p className="cont text-start h2 contact-subtitle col-12 col-lg-10 mb-5">
              You can reach out to us via the available channels below
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div
          className="col-12  col-lg-12 col-md-12 col-xl-12"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <div className="row mt-3 mb-0 justify-content-center">
            <div className="col-12 col-md-6 col-lg-6 col-xl-6">
              <div className="whatsapp-card card shadow rounded-4 border-0 text-start pb-3 mb-4">
                <div className="card-body">
                  <p className="fw-bold h5" style={{ fontFamily: "Georgia" }}>
                    Contact Information
                  </p>

                  <div className="mt-3">
                    <svg
                      className="cont position-absolute pe-2"
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                        fill="#2A478D"
                        fill-opacity="0.1"
                      />
                      <path
                        d="M32 22C32 26.993 26.461 32.193 24.601 33.799C24.4277 33.9293 24.2168 33.9998 24 33.9998C23.7832 33.9998 23.5723 33.9293 23.399 33.799C21.539 32.193 16 26.993 16 22C16 19.8783 16.8429 17.8434 18.3431 16.3431C19.8434 14.8429 21.8783 14 24 14C26.1217 14 28.1566 14.8429 29.6569 16.3431C31.1571 17.8434 32 19.8783 32 22Z"
                        stroke="#2A478D"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M24 25C25.6569 25 27 23.6569 27 22C27 20.3431 25.6569 19 24 19C22.3431 19 21 20.3431 21 22C21 23.6569 22.3431 25 24 25Z"
                        stroke="#2A478D"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div
                      className="ms-5 text-md-nowrap text-sm-wrap fw-bold"
                      style={{ fontFamily: "Helvitica" }}
                    >
                      Office Address{" "}
                      <p
                        className=" fw-light text-muted"
                        style={{ fontFamily: "Arial" }}
                      >
                        1, Admiralty Way, Lekki Phase１, Lagos, Nigeria
                      </p>
                    </div>
                  </div>

                  <div className="mt-3">
                    <svg
                      className="cont position-absolute pe-2"
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                        fill="#2A478D"
                        fill-opacity="0.1"
                      />
                      <path
                        d="M34.0004 28.92V31.92C34.0016 32.1985 33.9445 32.4741 33.8329 32.7293C33.7214 32.9845 33.5577 33.2136 33.3525 33.4018C33.1473 33.5901 32.905 33.7335 32.6412 33.8227C32.3773 33.9119 32.0978 33.945 31.8204 33.92C28.7433 33.5856 25.7874 32.5341 23.1904 30.85C20.7742 29.3146 18.7258 27.2661 17.1904 24.85C15.5004 22.2412 14.4487 19.271 14.1204 16.18C14.0954 15.9034 14.1283 15.6247 14.2169 15.3616C14.3055 15.0985 14.448 14.8567 14.6352 14.6516C14.8224 14.4465 15.0502 14.2827 15.3042 14.1705C15.5582 14.0583 15.8328 14.0002 16.1104 14H19.1104C19.5957 13.9952 20.0662 14.1671 20.4342 14.4835C20.8022 14.8 21.0425 15.2394 21.1104 15.72C21.237 16.68 21.4719 17.6227 21.8104 18.53C21.945 18.8879 21.9741 19.2769 21.8943 19.6509C21.8146 20.0248 21.6293 20.3681 21.3604 20.64L20.0904 21.91C21.514 24.4135 23.5869 26.4864 26.0904 27.91L27.3604 26.64C27.6323 26.3711 27.9756 26.1858 28.3495 26.1061C28.7235 26.0263 29.1125 26.0554 29.4704 26.19C30.3777 26.5285 31.3204 26.7634 32.2804 26.89C32.7662 26.9585 33.2098 27.2032 33.527 27.5775C33.8441 27.9518 34.0126 28.4296 34.0004 28.92Z"
                        stroke="#2A478D"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <div
                      className="ms-5 text-nowrap fw-bold"
                      style={{ fontFamily: "Georgia" }}
                    >
                      Phone{" "}
                      <p
                        className=" fw-light text-muted"
                        style={{ fontFamily: "Arial" }}
                      >
                        +2348012345678
                      </p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <svg
                      className="cont position-absolute pe-2"
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                        fill="#2A478D"
                        fill-opacity="0.1"
                      />
                      <path
                        d="M32 16H16C14.8954 16 14 16.8954 14 18V30C14 31.1046 14.8954 32 16 32H32C33.1046 32 34 31.1046 34 30V18C34 16.8954 33.1046 16 32 16Z"
                        stroke="#2A478D"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M34 19L25.03 24.7C24.7213 24.8934 24.3643 24.996 24 24.996C23.6357 24.996 23.2787 24.8934 22.97 24.7L14 19"
                        stroke="#2A478D"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <div
                      className="ms-5 text-nowrap fw-bold"
                      style={{ fontFamily: "Georgia" }}
                    >
                      Email
                      <p
                        className=" fw-light text-muted"
                        style={{ fontFamily: "Arial" }}
                      >
                        info@estateluxe.com
                      </p>
                    </div>
                  </div>

                  <div className="mt-3">
                    <svg
                      className="cont position-absolute pe-2"
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                        fill="#2A478D"
                        fill-opacity="0.1"
                      />
                      <path
                        d="M19.9 32C21.8086 32.979 24.0041 33.2442 26.0909 32.7478C28.1777 32.2513 30.0186 31.0258 31.2818 29.2922C32.545 27.5585 33.1474 25.4307 32.9806 23.2921C32.8137 21.1536 31.8886 19.145 30.3718 17.6282C28.855 16.1114 26.8464 15.1862 24.7078 15.0194C22.5693 14.8526 20.4415 15.455 18.7078 16.7182C16.9742 17.9814 15.7487 19.8223 15.2522 21.9091C14.7558 23.9959 15.0209 26.1914 16 28.1L14 34L19.9 32Z"
                        stroke="#2A478D"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <div
                      className="ms-5 text-nowrap fw-bold"
                      style={{ fontFamily: "Georgia" }}
                    >
                      WhatsApp
                      <p
                        className=" fw-light text-muted"
                        style={{ fontFamily: "Arial" }}
                      >
                        +2348012345678
                      </p>
                    </div>
                  </div>

                  <div className="mt-3">
                    <svg
                      className="cont position-absolute pe-2"
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                        fill="#2A478D"
                        fill-opacity="0.1"
                      />
                      <path
                        d="M24 34C29.5228 34 34 29.5228 34 24C34 18.4772 29.5228 14 24 14C18.4772 14 14 18.4772 14 24C14 29.5228 18.4772 34 24 34Z"
                        stroke="#2A478D"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M24 18V24L28 26"
                        stroke="#2A478D"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div
                      className="ms-5 text-nowrap fw-bold mb-4"
                      style={{ fontFamily: "Georgia" }}
                    >
                      Business Hours
                      <p
                        className=" fw-light text-muted mb-1 text-wrap"
                        style={{ fontFamily: "Arial" }}
                      >
                        Monday - Friday: 9:00 AM - 6:00 PM
                      </p>
                      <p
                        className=" fw-light text-muted mb-1"
                        style={{ fontFamily: "Arial" }}
                      >
                        Saturday: 10:00 AM - 4:00 PM
                      </p>
                      <p
                        className=" fw-light text-muted border-bottom-1 border-black"
                        style={{ fontFamily: "Arial" }}
                      >
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                  <div className="justify-content-center align-items-center d-flex ">
                    <a href="https://wa.me/2348144697306">
                      <Button
                        className="mt-2"
                        variant="btn whatsapp-btn btn-success text-nowrap  "
                        style={{ color: "white" }}
                      >
                        Chat on WhatsApp
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-10 col-md-6 col-lg-6 col-xl-6">
              <div className="message-card card shadow rounded-4 border-0 text-start pt-3 pb-1">
                <div className="card-body">
                  <p className="fw-bold h5" style={{ fontFamily: "Georgia" }}>
                    Send Us a Message
                  </p>
                  {sent ? (
                    <p>Message sent!</p>
                  ) : (
                    <form ref={form} onSubmit={sendEmail} className="pb-3">
                      <p className="mb-2" style={{ fontFamily: "Arial" }}>
                        Full Name
                      </p>
                      <input
                        name="from_name"
                        type="text"
                        className="form-control mb-3"
                        required
                        placeholder="John Doe"
                      />
                      <div className="row">
                        <div className="col-sm-8 col-md-6 col-lg-6 col-xl-6">
                          <p className="mb-2" style={{ fontFamily: "Arial" }}>
                            Email Address
                          </p>
                          <input
                            name="from_email"
                            type="email"
                            className="form-control mb-3"
                            required
                            placeholder="John@example.com"
                          />
                        </div>
                        <div className="col-sm-8 col-md-6 col-lg-6 col-xl-6">
                          <p className=" mb-2" style={{ fontFamily: "Arial" }}>
                            Phone Number
                          </p>
                          <input
                            type="text"
                            className="form-control mb-3"
                            required
                            placeholder="+234 800 000 0000"
                          />
                        </div>
                      </div>
                      <p className="mb-2" style={{ fontFamily: "Arial" }}>
                        Subject
                      </p>
                      <input
                        name="message"
                        type="text"
                        className="form-control mb-3"
                        required
                        placeholder="Property Inquiry"
                      />
                      <p className="mb-2" style={{ fontFamily: "Arial" }}>
                        Message
                      </p>
                      <input
                        name="message"
                        type="text"
                        className="form-control pb-5"
                        rows="5"
                        required
                        placeholder="Tell us how we can help you..."
                      />
                      <div className="justify-content-center align-items-center d-flex">
                        <div className="mt-2">
                          <Button
                            type="submit"
                            variant="btn message-btn  text-nowrap"
                            style={{
                              backgroundColor: "#2A478D",
                              color: "white",
                            }}
                          >
                            Send Message
                          </Button>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 d-flex flex-column pt-5 border p-5 mb-4 mx-3 rounded-2  align-items-center">
        <svg
          className="client  active mt-5 mb-2  d-flex align-self-center mx-auto"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40 20C40 29.986 28.922 40.386 25.202 43.598C24.8554 43.8586 24.4336 43.9995 24 43.9995C23.5664 43.9995 23.1446 43.8586 22.798 43.598C19.078 40.386 8 29.986 8 20C8 15.7565 9.68571 11.6869 12.6863 8.68629C15.6869 5.68571 19.7565 4 24 4C28.2435 4 32.3131 5.68571 35.3137 8.68629C38.3143 11.6869 40 15.7565 40 20Z"
            stroke="#6B6B6B"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M24 26C27.3137 26 30 23.3137 30 20C30 16.6863 27.3137 14 24 14C20.6863 14 18 16.6863 18 20C18 23.3137 20.6863 26 24 26Z"
            stroke="#6B6B6B"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p className="offline text-muted mb-5 d-flex align-self-center mx-auto ">
          Offline Location
        </p>
      </div>
    </>
  );
}

export default Contact;
