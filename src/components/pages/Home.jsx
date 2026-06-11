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
function Home() {
  const heroWrapperStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${HeroBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "60vh",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    paddingBottom: "20vh",
  };

  return (
    <>
      <div style={heroWrapperStyle}>
        <img
          src="assets/BOC logo.png"
          className="img-fluid position-absolute top-0 ms-3 mt-3"
          style={{ height: "60px", width: "80px" }}
        ></img>
        <MyNavbar />

        <div className="flex-grow-1 align-items-center justify-content-center">
          <div className="text-center text-white">
            <h1
              className="display-1 mt-5 fw-light"
              style={{ color: "#2A478D", fontFamily: "Georgia" }}
            >
              Claim Your Space
            </h1>
            <h1
              className="display-3  mb-5 fw-light"
              style={{ color: "#2A478D", fontFamily: "Georgia" }}
            >
              Define Your Life
            </h1>
            <p
              className="col-lg-8 mx-auto mb-5 text-wrap text-center"
              style={{ fontSize: "14px" }}
            >
              Discover spaces that go beyond walls and structures—thoughtfully
              crafted environments where your ambitions can thrive, your
              lifestyle is elevated, and every moment feels like a step toward
              the life you've always envisioned.
            </p>
          </div>
        </div>
      </div>
      <div
        className="container"
        style={{ marginTop: "-80px", position: "relative", zIndex: 10 }}
      >
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card shadow-lg border-0 rounded-3">
              <div className="card-body p-4">
                <div className="d-flex gap-2 mb-3 bg-light col justify-content-between">
                  <Link to="/buy" className="text-dark">
                    <label
                      className="btn  rounded-2 fw-bold buy-btn "
                      style={{ background: "#2A478D", color: "white" }}
                    >
                      Buy
                    </label>
                  </Link>

                  <Link to="/rent" className="text-dark">
                    <label
                      className=" py-2 rounded-2 text-dark fw-bold"
                      style={{}}
                    >
                      Rent
                    </label>
                  </Link>

                  <Link to="/Lease" className="text-dark">
                    <label className="me-2 py-2 rounded-2 text-dark fw-bold">
                      Lease
                    </label>
                  </Link>
                </div>

                <div className="row g-1 align-items-center justify-content-around">
                  <div className="col-sm-10 col-lg-2 col-md-2 col-xl-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Location"
                    />
                  </div>
                  <div className="col-sm-10 col-lg-2 col-md-2 col-xl-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Property Type"
                    />
                  </div>
                  <div className="col-sm-10 col-lg-2 col-md-2 col-xl-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Min. Price"
                    />
                  </div>
                  <div className="col-sm-10 col-lg-2 col-md-2 col-xl-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Max. price"
                    />
                  </div>
                  <div className="col-sm-10 col-lg-2 col-md-2 col-xl-2">
                    <button
                      className="search-btn btn btn-dark-blue py-2 px-4"
                      style={{ background: "#2A478D", color: "white" }}
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
            Featured Properties
          </h1>
          <p className="text-muted mb-5">
            Handpicked exclusive listings just for you
          </p>
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
                <img src="assets/Hotel-one.jpg" className="card-img-top"></img>
                <div className="card-body text-start">
                  <span
                    className="badge btn position-absolute bg-white rounded-5 py-2 top-0 mt-2 ms-0 px-3 "
                    style={{ color: "#2A478D" }}
                  >
                    BUY
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
                    <p style={{ color: "#2A478D" }} className=" h4 fw-bold">
                      125.0M
                      <Link to="/buy1">
                        <span
                          className="end-0 position-absolute fw-bold py-2 px-3 rounded-3"
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
                <img src="assets/Hotel-one.jpg" className="card-img-top"></img>
                <div className="card-body text-start">
                  <span
                    className="badge btn position-absolute bg-white rounded-5 py-2 top-0 mt-2 ms-0 px-3 "
                    style={{ color: "#2A478D" }}
                  >
                    RENT
                  </span>
                  <span className="badge btn position-absolute bg-dark text-white rounded-4 py-2 end-0 me-3 top-0 mt-2  px-3 align ">
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
                          className="end-0 position-absolute fw-bold py-2 px-3 rounded-3"
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
                <img src="assets/Hotel-2.jpg" className="card-img-top"></img>
                <div className="card-body text-start">
                  <span
                    className="badge btn position-absolute bg-white  rounded-5 py-2 top-0 mt-2 ms-0 px-3 "
                    style={{ color: "#2A478D" }}
                  >
                    RENT
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
                    <p style={{ color: "#2A478D" }} className=" h4 fw-bold">
                      50.0M
                      <Link to="/rent2" className="text-dark">
                        <span
                          className="end-0 position-absolute fw-bold py-2 px-3 rounded-3"
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
                <img src="assets/Hotel-one.jpg" className="card-img-top"></img>
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
                    <p style={{ color: "#2A478D" }} className=" h4 fw-bold">
                      100.0M
                      <Link to="/lease1">
                        <span
                          className="end-0 position-absolute fw-bold py-2 px-3 rounded-3"
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
                <img src="assets/Hotel-3.jpg" className="card-img-top"></img>
                <div className="card-body text-start">
                  <span
                    className="badge btn position-absolute bg-white  rounded-5 py-2 top-0 mt-2 ms-0 px-3 "
                    style={{ color: "#2A478D" }}
                  >
                    RENT
                  </span>
                  <span className="badge btn position-absolute bg-dark text-white rounded-4 py-2 end-0 me-3 top-0 mt-2  px-3 align ">
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
                          className="end-0 position-absolute fw-bold py-2 px-3 rounded-3"
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
                <img src="assets/Hotel-2.jpg" className="card-img-top"></img>
                <div className="card-body text-start">
                  <span
                    className="badge btn position-absolute bg-white rounded-5 py-2 top-0 mt-2 ms-0 px-3 "
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
                    <p style={{ color: "#2A478D" }} className=" h4 fw-bold">
                      205.0M
                      <Link to="/lease2" className="text-dark">
                        <span
                          className="end-0 position-absolute fw-bold py-2 px-3 rounded-3"
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
                <Link to="/viewAll" className="text-dark">
                  <p
                    className="position-absolute end-0 pt-2 text-decoration-underline"
                    style={{ color: "#2A478D" }}
                  >
                    View All Properties
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white" style={{ paddingTop: "100px " }}>
          <div className="container-fluid px-3 px-md-4 text-center">
            <h1
              className="display-5 fw-light"
              style={{ color: "#2A478D", fontFamily: "Georgia" }}
            >
              Why Choose BOC Real Estate Limited
            </h1>
            <p className="text-muted mb-5">
              We are commited to make your property journey seamless and
              successful
            </p>
          </div>
          <div
            className="row pb-3 g-3 g-md-0 mx-5 justify-content-center"
            style={{ fontFamily: "Georgia" }}
          >
            <div
              className="col-10 col-lg-4 col-xl-4 col-md-6 rounded-3 border-0 mb-4 h-100 pe-3"
              style={{ objectFit: "cover" }}
            >
              <div
                className="card"
                style={{ boxShadow: "-8px 8px #2A478D", borderRadius: "12px" }}
              >
                <div className="card-body text-start">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32Z"
                      fill="#2A478D"
                      fill-opacity="0.2"
                    />
                    <path
                      d="M36.636 33.1868L38.656 44.5548C38.6787 44.6886 38.6599 44.8262 38.6022 44.9491C38.5445 45.072 38.4507 45.1744 38.3333 45.2425C38.2159 45.3106 38.0804 45.3413 37.9451 45.3304C37.8098 45.3195 37.681 45.2675 37.576 45.1814L32.8027 41.5988C32.5723 41.4266 32.2923 41.3336 32.0047 41.3336C31.7171 41.3336 31.4371 41.4266 31.2067 41.5988L26.4254 45.1801C26.3205 45.266 26.1919 45.3179 26.0567 45.3288C25.9215 45.3398 25.7863 45.3092 25.6689 45.2413C25.5516 45.1733 25.4577 45.0712 25.3999 44.9485C25.3421 44.8259 25.3231 44.6885 25.3454 44.5548L27.364 33.1868"
                      stroke="#2A478D"
                      stroke-width="2.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M32 34.6667C36.4183 34.6667 40 31.085 40 26.6667C40 22.2485 36.4183 18.6667 32 18.6667C27.5817 18.6667 24 22.2485 24 26.6667C24 31.085 27.5817 34.6667 32 34.6667Z"
                      stroke="#2A478D"
                      stroke-width="2.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <div className="card-title">
                    <p className="fw-bolder h5">Expert Guidance</p>
                  </div>
                  <div className="card-subtitle">
                    <p className="mt-4">
                      Our experienced agents provide personalized advice
                      tailored to your unique reach
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-10 col-lg-4 col-xl-4 col-md-6 rounded-3 border-0 mb-4 h-100 pe-3"
              style={{ objectFit: "cover" }}
            >
              <div
                className="card"
                style={{ boxShadow: "-8px 8px #2A478D", borderRadius: "12px" }}
              >
                <div className="card-body text-start">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32Z"
                      fill="#2A478D"
                      fill-opacity="0.2"
                    />
                    <path
                      d="M36.636 33.1868L38.656 44.5548C38.6787 44.6886 38.6599 44.8262 38.6022 44.9491C38.5445 45.072 38.4507 45.1744 38.3333 45.2425C38.2159 45.3106 38.0804 45.3413 37.9451 45.3304C37.8098 45.3195 37.681 45.2675 37.576 45.1814L32.8027 41.5988C32.5723 41.4266 32.2923 41.3336 32.0047 41.3336C31.7171 41.3336 31.4371 41.4266 31.2067 41.5988L26.4254 45.1801C26.3205 45.266 26.1919 45.3179 26.0567 45.3288C25.9215 45.3398 25.7863 45.3092 25.6689 45.2413C25.5516 45.1733 25.4577 45.0712 25.3999 44.9485C25.3421 44.8259 25.3231 44.6885 25.3454 44.5548L27.364 33.1868"
                      stroke="#2A478D"
                      stroke-width="2.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M32 34.6667C36.4183 34.6667 40 31.085 40 26.6667C40 22.2485 36.4183 18.6667 32 18.6667C27.5817 18.6667 24 22.2485 24 26.6667C24 31.085 27.5817 34.6667 32 34.6667Z"
                      stroke="#2A478D"
                      stroke-width="2.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <div className="card-title">
                    <p className="fw-bolder h5">Trusted Network</p>
                  </div>
                  <div className="card-subtitle">
                    <p className="mt-4">
                      Join thousands of verified clients who have found their
                      perfect property with us
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-10 col-lg-4 col-xl-4 col-md-6 rounded-3 border-0 mb-4 h-100 pe-3 "
              style={{ objectFit: "cover" }}
            >
              <div
                className="card"
                style={{ boxShadow: "-8px 8px #2A478D", borderRadius: "12px" }}
              >
                <div className="card-body text-start">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32Z"
                      fill="#2A478D"
                      fill-opacity="0.2"
                    />
                    <path
                      d="M36.636 33.1868L38.656 44.5548C38.6787 44.6886 38.6599 44.8262 38.6022 44.9491C38.5445 45.072 38.4507 45.1744 38.3333 45.2425C38.2159 45.3106 38.0804 45.3413 37.9451 45.3304C37.8098 45.3195 37.681 45.2675 37.576 45.1814L32.8027 41.5988C32.5723 41.4266 32.2923 41.3336 32.0047 41.3336C31.7171 41.3336 31.4371 41.4266 31.2067 41.5988L26.4254 45.1801C26.3205 45.266 26.1919 45.3179 26.0567 45.3288C25.9215 45.3398 25.7863 45.3092 25.6689 45.2413C25.5516 45.1733 25.4577 45.0712 25.3999 44.9485C25.3421 44.8259 25.3231 44.6885 25.3454 44.5548L27.364 33.1868"
                      stroke="#2A478D"
                      stroke-width="2.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M32 34.6667C36.4183 34.6667 40 31.085 40 26.6667C40 22.2485 36.4183 18.6667 32 18.6667C27.5817 18.6667 24 22.2485 24 26.6667C24 31.085 27.5817 34.6667 32 34.6667Z"
                      stroke="#2A478D"
                      stroke-width="2.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <div className="card-title">
                    <p className="fw-bolder h5">Best Market Value</p>
                  </div>
                  <div className="card-subtitle">
                    <p className="mt-4">
                      We ensure you get the best value for your money with
                      transparent pricing and market insight
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white" style={{ paddingTop: "100px " }}>
          <div className="container-fluid px-3 px-md-4 text-center">
            <h1
              className="display-5 fw-light"
              style={{ color: "#2A478D", fontFamily: "Georgia" }}
            >
              What Our Clients Say
            </h1>
            <p className="text-muted mb-5">
              Hear from our satisfied clients about their experiences with BOC
              real estate limited
            </p>
          </div>
          <div
            className="row flex-nowrap overflow-auto overflow-auto  pb-3 ps-3 pe-3 pe-md-0"
            style={{ fontFamily: "Helvitica", scrollSnapType: "x-mandatory" }}
          >
            <div
              className="col-10 col-lg-4 col-xl-4 col-md-6 rounded-3 border-0 mb-4 h-100 pe-3"
              style={{ objectFit: "cover", scrollSnapAlign: "start" }}
            >
              <div className="card">
                <div className="card-body text-start">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32 6C30.9391 6 29.9217 6.42143 29.1716 7.17157C28.4214 7.92172 28 8.93913 28 10V22C28 23.0609 28.4214 24.0783 29.1716 24.8284C29.9217 25.5786 30.9391 26 32 26C32.5304 26 33.0391 26.2107 33.4142 26.5858C33.7893 26.9609 34 27.4696 34 28V30C34 31.0609 33.5786 32.0783 32.8284 32.8284C32.0783 33.5786 31.0609 34 30 34C29.4696 34 28.9609 34.2107 28.5858 34.5858C28.2107 34.9609 28 35.4696 28 36V40C28 40.5304 28.2107 41.0391 28.5858 41.4142C28.9609 41.7893 29.4696 42 30 42C33.1826 42 36.2348 40.7357 38.4853 38.4853C40.7357 36.2348 42 33.1826 42 30V10C42 8.93913 41.5786 7.92172 40.8284 7.17157C40.0783 6.42143 39.0609 6 38 6H32Z"
                      stroke="#2A478D"
                      stroke-opacity="0.4"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 6C8.93913 6 7.92172 6.42143 7.17157 7.17157C6.42143 7.92172 6 8.93913 6 10V22C6 23.0609 6.42143 24.0783 7.17157 24.8284C7.92172 25.5786 8.93913 26 10 26C10.5304 26 11.0391 26.2107 11.4142 26.5858C11.7893 26.9609 12 27.4696 12 28V30C12 31.0609 11.5786 32.0783 10.8284 32.8284C10.0783 33.5786 9.06087 34 8 34C7.46957 34 6.96086 34.2107 6.58579 34.5858C6.21071 34.9609 6 35.4696 6 36V40C6 40.5304 6.21071 41.0391 6.58579 41.4142C6.96086 41.7893 7.46957 42 8 42C11.1826 42 14.2348 40.7357 16.4853 38.4853C18.7357 36.2348 20 33.1826 20 30V10C20 8.93913 19.5786 7.92172 18.8284 7.17157C18.0783 6.42143 17.0609 6 16 6H10Z"
                      stroke="#2A478D"
                      stroke-opacity="0.4"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <div className="card-title">
                    <p className="fw-bolder h5"></p>
                  </div>
                  <div className="card-subtitle">
                    <p className="mt-4">
                      "Estate Luxe made finding our dream home effortless. Their
                      professionalism and attention to detail exceeded all
                      expectations. We couldn't be happier with our new property
                      in Lekki."
                    </p>
                  </div>
                  <svg
                    width="403"
                    height="20"
                    viewBox="0 0 403 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.60428 1.91249C9.6408 1.83871 9.69722 1.7766 9.76716 1.73318C9.8371 1.68976 9.91779 1.66675 10.0001 1.66675C10.0824 1.66675 10.1631 1.68976 10.2331 1.73318C10.303 1.7766 10.3594 1.83871 10.396 1.91249L12.3209 5.81166C12.4478 6.0683 12.635 6.29033 12.8665 6.4587C13.098 6.62707 13.3669 6.73675 13.6501 6.77833L17.9551 7.40833C18.0367 7.42015 18.1133 7.45455 18.1764 7.50766C18.2394 7.56076 18.2863 7.63045 18.3118 7.70883C18.3373 7.78721 18.3403 7.87116 18.3206 7.95119C18.3009 8.03121 18.2591 8.10412 18.2001 8.16166L15.0868 11.1933C14.8815 11.3934 14.7278 11.6404 14.6391 11.913C14.5504 12.1856 14.5293 12.4757 14.5776 12.7583L15.3126 17.0417C15.327 17.1232 15.3182 17.2071 15.2872 17.2839C15.2562 17.3607 15.2042 17.4272 15.1372 17.4758C15.0702 17.5245 14.9909 17.5533 14.9083 17.5591C14.8257 17.5648 14.7432 17.5472 14.6701 17.5083L10.8218 15.485C10.5682 15.3518 10.2861 15.2823 9.9997 15.2823C9.7133 15.2823 9.43119 15.3518 9.17762 15.485L5.33012 17.5083C5.25706 17.547 5.17461 17.5644 5.09216 17.5585C5.0097 17.5527 4.93055 17.5238 4.8637 17.4752C4.79684 17.4266 4.74498 17.3601 4.714 17.2835C4.68302 17.2069 4.67416 17.1231 4.68845 17.0417L5.42262 12.7592C5.47111 12.4764 5.4501 12.1862 5.3614 11.9134C5.27269 11.6406 5.11896 11.3935 4.91345 11.1933L1.80012 8.16249C1.74061 8.10502 1.69844 8.03199 1.67842 7.95172C1.65839 7.87145 1.66131 7.78717 1.68685 7.70849C1.71238 7.6298 1.75951 7.55986 1.82285 7.50665C1.88619 7.45343 1.9632 7.41907 2.04512 7.40749L6.34928 6.77833C6.63283 6.73708 6.90211 6.62754 7.13394 6.45915C7.36577 6.29076 7.5532 6.06855 7.68012 5.81166L9.60428 1.91249Z"
                      fill="#2A478D"
                      stroke="#2A478D"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M33.6043 1.91249C33.6408 1.83871 33.6972 1.7766 33.7672 1.73318C33.8371 1.68976 33.9178 1.66675 34.0001 1.66675C34.0824 1.66675 34.1631 1.68976 34.2331 1.73318C34.303 1.7766 34.3594 1.83871 34.396 1.91249L36.3209 5.81166C36.4478 6.0683 36.635 6.29033 36.8665 6.4587C37.098 6.62707 37.3669 6.73675 37.6501 6.77833L41.9551 7.40833C42.0367 7.42015 42.1133 7.45455 42.1764 7.50766C42.2394 7.56076 42.2863 7.63045 42.3118 7.70883C42.3373 7.78721 42.3403 7.87116 42.3206 7.95119C42.3009 8.03121 42.2591 8.10412 42.2001 8.16166L39.0868 11.1933C38.8815 11.3934 38.7278 11.6404 38.6391 11.913C38.5504 12.1856 38.5293 12.4757 38.5776 12.7583L39.3126 17.0417C39.327 17.1232 39.3182 17.2071 39.2872 17.2839C39.2562 17.3607 39.2042 17.4272 39.1372 17.4758C39.0702 17.5245 38.9909 17.5533 38.9083 17.5591C38.8257 17.5648 38.7432 17.5472 38.6701 17.5083L34.8218 15.485C34.5682 15.3518 34.2861 15.2823 33.9997 15.2823C33.7133 15.2823 33.4312 15.3518 33.1776 15.485L29.3301 17.5083C29.2571 17.547 29.1746 17.5644 29.0922 17.5585C29.0097 17.5527 28.9305 17.5238 28.8637 17.4752C28.7968 17.4266 28.745 17.3601 28.714 17.2835C28.683 17.2069 28.6742 17.1231 28.6884 17.0417L29.4226 12.7592C29.4711 12.4764 29.4501 12.1862 29.3614 11.9134C29.2727 11.6406 29.119 11.3935 28.9134 11.1933L25.8001 8.16249C25.7406 8.10502 25.6984 8.03199 25.6784 7.95172C25.6584 7.87145 25.6613 7.78717 25.6868 7.70849C25.7124 7.6298 25.7595 7.55986 25.8228 7.50665C25.8862 7.45343 25.9632 7.41907 26.0451 7.40749L30.3493 6.77833C30.6328 6.73708 30.9021 6.62754 31.1339 6.45915C31.3658 6.29076 31.5532 6.06855 31.6801 5.81166L33.6043 1.91249Z"
                      fill="#2A478D"
                      stroke="#2A478D"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M57.6043 1.91249C57.6408 1.83871 57.6972 1.7766 57.7672 1.73318C57.8371 1.68976 57.9178 1.66675 58.0001 1.66675C58.0824 1.66675 58.1631 1.68976 58.2331 1.73318C58.303 1.7766 58.3594 1.83871 58.396 1.91249L60.3209 5.81166C60.4478 6.0683 60.635 6.29033 60.8665 6.4587C61.098 6.62707 61.3669 6.73675 61.6501 6.77833L65.9551 7.40833C66.0367 7.42015 66.1133 7.45455 66.1764 7.50766C66.2394 7.56076 66.2863 7.63045 66.3118 7.70883C66.3373 7.78721 66.3403 7.87116 66.3206 7.95119C66.3009 8.03121 66.2591 8.10412 66.2001 8.16166L63.0868 11.1933C62.8815 11.3934 62.7278 11.6404 62.6391 11.913C62.5504 12.1856 62.5293 12.4757 62.5776 12.7583L63.3126 17.0417C63.327 17.1232 63.3182 17.2071 63.2872 17.2839C63.2562 17.3607 63.2042 17.4272 63.1372 17.4758C63.0702 17.5245 62.9909 17.5533 62.9083 17.5591C62.8257 17.5648 62.7432 17.5472 62.6701 17.5083L58.8218 15.485C58.5682 15.3518 58.2861 15.2823 57.9997 15.2823C57.7133 15.2823 57.4312 15.3518 57.1776 15.485L53.3301 17.5083C53.2571 17.547 53.1746 17.5644 53.0922 17.5585C53.0097 17.5527 52.9305 17.5238 52.8637 17.4752C52.7968 17.4266 52.745 17.3601 52.714 17.2835C52.683 17.2069 52.6742 17.1231 52.6884 17.0417L53.4226 12.7592C53.4711 12.4764 53.4501 12.1862 53.3614 11.9134C53.2727 11.6406 53.119 11.3935 52.9134 11.1933L49.8001 8.16249C49.7406 8.10502 49.6984 8.03199 49.6784 7.95172C49.6584 7.87145 49.6613 7.78717 49.6868 7.70849C49.7124 7.6298 49.7595 7.55986 49.8228 7.50665C49.8862 7.45343 49.9632 7.41907 50.0451 7.40749L54.3493 6.77833C54.6328 6.73708 54.9021 6.62754 55.1339 6.45915C55.3658 6.29076 55.5532 6.06855 55.6801 5.81166L57.6043 1.91249Z"
                      fill="#2A478D"
                      stroke="#2A478D"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M81.6043 1.91249C81.6408 1.83871 81.6972 1.7766 81.7672 1.73318C81.8371 1.68976 81.9178 1.66675 82.0001 1.66675C82.0824 1.66675 82.1631 1.68976 82.2331 1.73318C82.303 1.7766 82.3594 1.83871 82.396 1.91249L84.3209 5.81166C84.4478 6.0683 84.635 6.29033 84.8665 6.4587C85.098 6.62707 85.3669 6.73675 85.6501 6.77833L89.9551 7.40833C90.0367 7.42015 90.1133 7.45455 90.1764 7.50766C90.2394 7.56076 90.2863 7.63045 90.3118 7.70883C90.3373 7.78721 90.3403 7.87116 90.3206 7.95119C90.3009 8.03121 90.2591 8.10412 90.2001 8.16166L87.0868 11.1933C86.8815 11.3934 86.7278 11.6404 86.6391 11.913C86.5504 12.1856 86.5293 12.4757 86.5776 12.7583L87.3126 17.0417C87.327 17.1232 87.3182 17.2071 87.2872 17.2839C87.2562 17.3607 87.2042 17.4272 87.1372 17.4758C87.0702 17.5245 86.9909 17.5533 86.9083 17.5591C86.8257 17.5648 86.7432 17.5472 86.6701 17.5083L82.8218 15.485C82.5682 15.3518 82.2861 15.2823 81.9997 15.2823C81.7133 15.2823 81.4312 15.3518 81.1776 15.485L77.3301 17.5083C77.2571 17.547 77.1746 17.5644 77.0922 17.5585C77.0097 17.5527 76.9305 17.5238 76.8637 17.4752C76.7968 17.4266 76.745 17.3601 76.714 17.2835C76.683 17.2069 76.6742 17.1231 76.6884 17.0417L77.4226 12.7592C77.4711 12.4764 77.4501 12.1862 77.3614 11.9134C77.2727 11.6406 77.119 11.3935 76.9134 11.1933L73.8001 8.16249C73.7406 8.10502 73.6984 8.03199 73.6784 7.95172C73.6584 7.87145 73.6613 7.78717 73.6868 7.70849C73.7124 7.6298 73.7595 7.55986 73.8228 7.50665C73.8862 7.45343 73.9632 7.41907 74.0451 7.40749L78.3493 6.77833C78.6328 6.73708 78.9021 6.62754 79.1339 6.45915C79.3658 6.29076 79.5532 6.06855 79.6801 5.81166L81.6043 1.91249Z"
                      fill="#2A478D"
                      stroke="#2A478D"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M105.604 1.91249C105.641 1.83871 105.697 1.7766 105.767 1.73318C105.837 1.68976 105.918 1.66675 106 1.66675C106.082 1.66675 106.163 1.68976 106.233 1.73318C106.303 1.7766 106.359 1.83871 106.396 1.91249L108.321 5.81166C108.448 6.0683 108.635 6.29033 108.866 6.4587C109.098 6.62707 109.367 6.73675 109.65 6.77833L113.955 7.40833C114.037 7.42015 114.113 7.45455 114.176 7.50766C114.239 7.56076 114.286 7.63045 114.312 7.70883C114.337 7.78721 114.34 7.87116 114.321 7.95119C114.301 8.03121 114.259 8.10412 114.2 8.16166L111.087 11.1933C110.881 11.3934 110.728 11.6404 110.639 11.913C110.55 12.1856 110.529 12.4757 110.578 12.7583L111.313 17.0417C111.327 17.1232 111.318 17.2071 111.287 17.2839C111.256 17.3607 111.204 17.4272 111.137 17.4758C111.07 17.5245 110.991 17.5533 110.908 17.5591C110.826 17.5648 110.743 17.5472 110.67 17.5083L106.822 15.485C106.568 15.3518 106.286 15.2823 106 15.2823C105.713 15.2823 105.431 15.3518 105.178 15.485L101.33 17.5083C101.257 17.547 101.175 17.5644 101.092 17.5585C101.01 17.5527 100.931 17.5238 100.864 17.4752C100.797 17.4266 100.745 17.3601 100.714 17.2835C100.683 17.2069 100.674 17.1231 100.688 17.0417L101.423 12.7592C101.471 12.4764 101.45 12.1862 101.361 11.9134C101.273 11.6406 101.119 11.3935 100.913 11.1933L97.8001 8.16249C97.7406 8.10502 97.6984 8.03199 97.6784 7.95172C97.6584 7.87145 97.6613 7.78717 97.6868 7.70849C97.7124 7.6298 97.7595 7.55986 97.8228 7.50665C97.8862 7.45343 97.9632 7.41907 98.0451 7.40749L102.349 6.77833C102.633 6.73708 102.902 6.62754 103.134 6.45915C103.366 6.29076 103.553 6.06855 103.68 5.81166L105.604 1.91249Z"
                      fill="#2A478D"
                      stroke="#2A478D"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div
              className="col-10 col-lg-4 col-xl-4 col-md-6 rounded-3 border-0 mb-4 h-100 pe-3"
              style={{ objectFit: "cover" }}
            >
              <div className="card">
                <div className="card-body text-start">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32 6C30.9391 6 29.9217 6.42143 29.1716 7.17157C28.4214 7.92172 28 8.93913 28 10V22C28 23.0609 28.4214 24.0783 29.1716 24.8284C29.9217 25.5786 30.9391 26 32 26C32.5304 26 33.0391 26.2107 33.4142 26.5858C33.7893 26.9609 34 27.4696 34 28V30C34 31.0609 33.5786 32.0783 32.8284 32.8284C32.0783 33.5786 31.0609 34 30 34C29.4696 34 28.9609 34.2107 28.5858 34.5858C28.2107 34.9609 28 35.4696 28 36V40C28 40.5304 28.2107 41.0391 28.5858 41.4142C28.9609 41.7893 29.4696 42 30 42C33.1826 42 36.2348 40.7357 38.4853 38.4853C40.7357 36.2348 42 33.1826 42 30V10C42 8.93913 41.5786 7.92172 40.8284 7.17157C40.0783 6.42143 39.0609 6 38 6H32Z"
                      stroke="#2A478D"
                      stroke-opacity="0.4"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 6C8.93913 6 7.92172 6.42143 7.17157 7.17157C6.42143 7.92172 6 8.93913 6 10V22C6 23.0609 6.42143 24.0783 7.17157 24.8284C7.92172 25.5786 8.93913 26 10 26C10.5304 26 11.0391 26.2107 11.4142 26.5858C11.7893 26.9609 12 27.4696 12 28V30C12 31.0609 11.5786 32.0783 10.8284 32.8284C10.0783 33.5786 9.06087 34 8 34C7.46957 34 6.96086 34.2107 6.58579 34.5858C6.21071 34.9609 6 35.4696 6 36V40C6 40.5304 6.21071 41.0391 6.58579 41.4142C6.96086 41.7893 7.46957 42 8 42C11.1826 42 14.2348 40.7357 16.4853 38.4853C18.7357 36.2348 20 33.1826 20 30V10C20 8.93913 19.5786 7.92172 18.8284 7.17157C18.0783 6.42143 17.0609 6 16 6H10Z"
                      stroke="#2A478D"
                      stroke-opacity="0.4"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <div className="card-title">
                    <p className="fw-bolder h5"></p>
                  </div>
                  <div className="card-subtitle">
                    <p className="mt-4">
                      "The team went above and beyond to understand my needs.
                      From viewing to closing, every step was smooth and
                      transparent. Highly recommend their services!"
                    </p>
                  </div>
                  <svg
                    width="403"
                    height="20"
                    viewBox="0 0 403 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.60428 1.91249C9.6408 1.83871 9.69722 1.7766 9.76716 1.73318C9.8371 1.68976 9.91779 1.66675 10.0001 1.66675C10.0824 1.66675 10.1631 1.68976 10.2331 1.73318C10.303 1.7766 10.3594 1.83871 10.396 1.91249L12.3209 5.81166C12.4478 6.0683 12.635 6.29033 12.8665 6.4587C13.098 6.62707 13.3669 6.73675 13.6501 6.77833L17.9551 7.40833C18.0367 7.42015 18.1133 7.45455 18.1764 7.50766C18.2394 7.56076 18.2863 7.63045 18.3118 7.70883C18.3373 7.78721 18.3403 7.87116 18.3206 7.95119C18.3009 8.03121 18.2591 8.10412 18.2001 8.16166L15.0868 11.1933C14.8815 11.3934 14.7278 11.6404 14.6391 11.913C14.5504 12.1856 14.5293 12.4757 14.5776 12.7583L15.3126 17.0417C15.327 17.1232 15.3182 17.2071 15.2872 17.2839C15.2562 17.3607 15.2042 17.4272 15.1372 17.4758C15.0702 17.5245 14.9909 17.5533 14.9083 17.5591C14.8257 17.5648 14.7432 17.5472 14.6701 17.5083L10.8218 15.485C10.5682 15.3518 10.2861 15.2823 9.9997 15.2823C9.7133 15.2823 9.43119 15.3518 9.17762 15.485L5.33012 17.5083C5.25706 17.547 5.17461 17.5644 5.09216 17.5585C5.0097 17.5527 4.93055 17.5238 4.8637 17.4752C4.79684 17.4266 4.74498 17.3601 4.714 17.2835C4.68302 17.2069 4.67416 17.1231 4.68845 17.0417L5.42262 12.7592C5.47111 12.4764 5.4501 12.1862 5.3614 11.9134C5.27269 11.6406 5.11896 11.3935 4.91345 11.1933L1.80012 8.16249C1.74061 8.10502 1.69844 8.03199 1.67842 7.95172C1.65839 7.87145 1.66131 7.78717 1.68685 7.70849C1.71238 7.6298 1.75951 7.55986 1.82285 7.50665C1.88619 7.45343 1.9632 7.41907 2.04512 7.40749L6.34928 6.77833C6.63283 6.73708 6.90211 6.62754 7.13394 6.45915C7.36577 6.29076 7.5532 6.06855 7.68012 5.81166L9.60428 1.91249Z"
                      fill="#2A478D"
                      stroke="#2A478D"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M33.6043 1.91249C33.6408 1.83871 33.6972 1.7766 33.7672 1.73318C33.8371 1.68976 33.9178 1.66675 34.0001 1.66675C34.0824 1.66675 34.1631 1.68976 34.2331 1.73318C34.303 1.7766 34.3594 1.83871 34.396 1.91249L36.3209 5.81166C36.4478 6.0683 36.635 6.29033 36.8665 6.4587C37.098 6.62707 37.3669 6.73675 37.6501 6.77833L41.9551 7.40833C42.0367 7.42015 42.1133 7.45455 42.1764 7.50766C42.2394 7.56076 42.2863 7.63045 42.3118 7.70883C42.3373 7.78721 42.3403 7.87116 42.3206 7.95119C42.3009 8.03121 42.2591 8.10412 42.2001 8.16166L39.0868 11.1933C38.8815 11.3934 38.7278 11.6404 38.6391 11.913C38.5504 12.1856 38.5293 12.4757 38.5776 12.7583L39.3126 17.0417C39.327 17.1232 39.3182 17.2071 39.2872 17.2839C39.2562 17.3607 39.2042 17.4272 39.1372 17.4758C39.0702 17.5245 38.9909 17.5533 38.9083 17.5591C38.8257 17.5648 38.7432 17.5472 38.6701 17.5083L34.8218 15.485C34.5682 15.3518 34.2861 15.2823 33.9997 15.2823C33.7133 15.2823 33.4312 15.3518 33.1776 15.485L29.3301 17.5083C29.2571 17.547 29.1746 17.5644 29.0922 17.5585C29.0097 17.5527 28.9305 17.5238 28.8637 17.4752C28.7968 17.4266 28.745 17.3601 28.714 17.2835C28.683 17.2069 28.6742 17.1231 28.6884 17.0417L29.4226 12.7592C29.4711 12.4764 29.4501 12.1862 29.3614 11.9134C29.2727 11.6406 29.119 11.3935 28.9134 11.1933L25.8001 8.16249C25.7406 8.10502 25.6984 8.03199 25.6784 7.95172C25.6584 7.87145 25.6613 7.78717 25.6868 7.70849C25.7124 7.6298 25.7595 7.55986 25.8228 7.50665C25.8862 7.45343 25.9632 7.41907 26.0451 7.40749L30.3493 6.77833C30.6328 6.73708 30.9021 6.62754 31.1339 6.45915C31.3658 6.29076 31.5532 6.06855 31.6801 5.81166L33.6043 1.91249Z"
                      fill="#2A478D"
                      stroke="#2A478D"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M57.6043 1.91249C57.6408 1.83871 57.6972 1.7766 57.7672 1.73318C57.8371 1.68976 57.9178 1.66675 58.0001 1.66675C58.0824 1.66675 58.1631 1.68976 58.2331 1.73318C58.303 1.7766 58.3594 1.83871 58.396 1.91249L60.3209 5.81166C60.4478 6.0683 60.635 6.29033 60.8665 6.4587C61.098 6.62707 61.3669 6.73675 61.6501 6.77833L65.9551 7.40833C66.0367 7.42015 66.1133 7.45455 66.1764 7.50766C66.2394 7.56076 66.2863 7.63045 66.3118 7.70883C66.3373 7.78721 66.3403 7.87116 66.3206 7.95119C66.3009 8.03121 66.2591 8.10412 66.2001 8.16166L63.0868 11.1933C62.8815 11.3934 62.7278 11.6404 62.6391 11.913C62.5504 12.1856 62.5293 12.4757 62.5776 12.7583L63.3126 17.0417C63.327 17.1232 63.3182 17.2071 63.2872 17.2839C63.2562 17.3607 63.2042 17.4272 63.1372 17.4758C63.0702 17.5245 62.9909 17.5533 62.9083 17.5591C62.8257 17.5648 62.7432 17.5472 62.6701 17.5083L58.8218 15.485C58.5682 15.3518 58.2861 15.2823 57.9997 15.2823C57.7133 15.2823 57.4312 15.3518 57.1776 15.485L53.3301 17.5083C53.2571 17.547 53.1746 17.5644 53.0922 17.5585C53.0097 17.5527 52.9305 17.5238 52.8637 17.4752C52.7968 17.4266 52.745 17.3601 52.714 17.2835C52.683 17.2069 52.6742 17.1231 52.6884 17.0417L53.4226 12.7592C53.4711 12.4764 53.4501 12.1862 53.3614 11.9134C53.2727 11.6406 53.119 11.3935 52.9134 11.1933L49.8001 8.16249C49.7406 8.10502 49.6984 8.03199 49.6784 7.95172C49.6584 7.87145 49.6613 7.78717 49.6868 7.70849C49.7124 7.6298 49.7595 7.55986 49.8228 7.50665C49.8862 7.45343 49.9632 7.41907 50.0451 7.40749L54.3493 6.77833C54.6328 6.73708 54.9021 6.62754 55.1339 6.45915C55.3658 6.29076 55.5532 6.06855 55.6801 5.81166L57.6043 1.91249Z"
                      fill="#2A478D"
                      stroke="#2A478D"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M81.6043 1.91249C81.6408 1.83871 81.6972 1.7766 81.7672 1.73318C81.8371 1.68976 81.9178 1.66675 82.0001 1.66675C82.0824 1.66675 82.1631 1.68976 82.2331 1.73318C82.303 1.7766 82.3594 1.83871 82.396 1.91249L84.3209 5.81166C84.4478 6.0683 84.635 6.29033 84.8665 6.4587C85.098 6.62707 85.3669 6.73675 85.6501 6.77833L89.9551 7.40833C90.0367 7.42015 90.1133 7.45455 90.1764 7.50766C90.2394 7.56076 90.2863 7.63045 90.3118 7.70883C90.3373 7.78721 90.3403 7.87116 90.3206 7.95119C90.3009 8.03121 90.2591 8.10412 90.2001 8.16166L87.0868 11.1933C86.8815 11.3934 86.7278 11.6404 86.6391 11.913C86.5504 12.1856 86.5293 12.4757 86.5776 12.7583L87.3126 17.0417C87.327 17.1232 87.3182 17.2071 87.2872 17.2839C87.2562 17.3607 87.2042 17.4272 87.1372 17.4758C87.0702 17.5245 86.9909 17.5533 86.9083 17.5591C86.8257 17.5648 86.7432 17.5472 86.6701 17.5083L82.8218 15.485C82.5682 15.3518 82.2861 15.2823 81.9997 15.2823C81.7133 15.2823 81.4312 15.3518 81.1776 15.485L77.3301 17.5083C77.2571 17.547 77.1746 17.5644 77.0922 17.5585C77.0097 17.5527 76.9305 17.5238 76.8637 17.4752C76.7968 17.4266 76.745 17.3601 76.714 17.2835C76.683 17.2069 76.6742 17.1231 76.6884 17.0417L77.4226 12.7592C77.4711 12.4764 77.4501 12.1862 77.3614 11.9134C77.2727 11.6406 77.119 11.3935 76.9134 11.1933L73.8001 8.16249C73.7406 8.10502 73.6984 8.03199 73.6784 7.95172C73.6584 7.87145 73.6613 7.78717 73.6868 7.70849C73.7124 7.6298 73.7595 7.55986 73.8228 7.50665C73.8862 7.45343 73.9632 7.41907 74.0451 7.40749L78.3493 6.77833C78.6328 6.73708 78.9021 6.62754 79.1339 6.45915C79.3658 6.29076 79.5532 6.06855 79.6801 5.81166L81.6043 1.91249Z"
                      fill="#2A478D"
                      stroke="#2A478D"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M105.604 1.91249C105.641 1.83871 105.697 1.7766 105.767 1.73318C105.837 1.68976 105.918 1.66675 106 1.66675C106.082 1.66675 106.163 1.68976 106.233 1.73318C106.303 1.7766 106.359 1.83871 106.396 1.91249L108.321 5.81166C108.448 6.0683 108.635 6.29033 108.866 6.4587C109.098 6.62707 109.367 6.73675 109.65 6.77833L113.955 7.40833C114.037 7.42015 114.113 7.45455 114.176 7.50766C114.239 7.56076 114.286 7.63045 114.312 7.70883C114.337 7.78721 114.34 7.87116 114.321 7.95119C114.301 8.03121 114.259 8.10412 114.2 8.16166L111.087 11.1933C110.881 11.3934 110.728 11.6404 110.639 11.913C110.55 12.1856 110.529 12.4757 110.578 12.7583L111.313 17.0417C111.327 17.1232 111.318 17.2071 111.287 17.2839C111.256 17.3607 111.204 17.4272 111.137 17.4758C111.07 17.5245 110.991 17.5533 110.908 17.5591C110.826 17.5648 110.743 17.5472 110.67 17.5083L106.822 15.485C106.568 15.3518 106.286 15.2823 106 15.2823C105.713 15.2823 105.431 15.3518 105.178 15.485L101.33 17.5083C101.257 17.547 101.175 17.5644 101.092 17.5585C101.01 17.5527 100.931 17.5238 100.864 17.4752C100.797 17.4266 100.745 17.3601 100.714 17.2835C100.683 17.2069 100.674 17.1231 100.688 17.0417L101.423 12.7592C101.471 12.4764 101.45 12.1862 101.361 11.9134C101.273 11.6406 101.119 11.3935 100.913 11.1933L97.8001 8.16249C97.7406 8.10502 97.6984 8.03199 97.6784 7.95172C97.6584 7.87145 97.6613 7.78717 97.6868 7.70849C97.7124 7.6298 97.7595 7.55986 97.8228 7.50665C97.8862 7.45343 97.9632 7.41907 98.0451 7.40749L102.349 6.77833C102.633 6.73708 102.902 6.62754 103.134 6.45915C103.366 6.29076 103.553 6.06855 103.68 5.81166L105.604 1.91249Z"
                      fill="#2A478D"
                      stroke="#2A478D"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div
              className="col-10 col-lg-4 col-xl-4 col-md-6 rounded-3 border-0 mb-4 h-100 pe-3"
              style={{ objectFit: "cover" }}
            >
              <div className="card">
                <div className="card-body text-start">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32 6C30.9391 6 29.9217 6.42143 29.1716 7.17157C28.4214 7.92172 28 8.93913 28 10V22C28 23.0609 28.4214 24.0783 29.1716 24.8284C29.9217 25.5786 30.9391 26 32 26C32.5304 26 33.0391 26.2107 33.4142 26.5858C33.7893 26.9609 34 27.4696 34 28V30C34 31.0609 33.5786 32.0783 32.8284 32.8284C32.0783 33.5786 31.0609 34 30 34C29.4696 34 28.9609 34.2107 28.5858 34.5858C28.2107 34.9609 28 35.4696 28 36V40C28 40.5304 28.2107 41.0391 28.5858 41.4142C28.9609 41.7893 29.4696 42 30 42C33.1826 42 36.2348 40.7357 38.4853 38.4853C40.7357 36.2348 42 33.1826 42 30V10C42 8.93913 41.5786 7.92172 40.8284 7.17157C40.0783 6.42143 39.0609 6 38 6H32Z"
                      stroke="#2A478D"
                      stroke-opacity="0.4"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 6C8.93913 6 7.92172 6.42143 7.17157 7.17157C6.42143 7.92172 6 8.93913 6 10V22C6 23.0609 6.42143 24.0783 7.17157 24.8284C7.92172 25.5786 8.93913 26 10 26C10.5304 26 11.0391 26.2107 11.4142 26.5858C11.7893 26.9609 12 27.4696 12 28V30C12 31.0609 11.5786 32.0783 10.8284 32.8284C10.0783 33.5786 9.06087 34 8 34C7.46957 34 6.96086 34.2107 6.58579 34.5858C6.21071 34.9609 6 35.4696 6 36V40C6 40.5304 6.21071 41.0391 6.58579 41.4142C6.96086 41.7893 7.46957 42 8 42C11.1826 42 14.2348 40.7357 16.4853 38.4853C18.7357 36.2348 20 33.1826 20 30V10C20 8.93913 19.5786 7.92172 18.8284 7.17157C18.0783 6.42143 17.0609 6 16 6H10Z"
                      stroke="#2A478D"
                      stroke-opacity="0.4"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <div className="card-title">
                    <p className="fw-bolder h5"></p>
                  </div>
                  <div className="card-subtitle">
                    <p className="mt-4">
                      "As a first-time buyer, I was nervous about the process.
                      Estate Luxe guided me every step of the way with patience
                      and expertise. I found the perfect investment property "
                    </p>
                  </div>
                  <svg
                    width="403"
                    height="20"
                    viewBox="0 0 403 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.60428 1.91249C9.6408 1.83871 9.69722 1.7766 9.76716 1.73318C9.8371 1.68976 9.91779 1.66675 10.0001 1.66675C10.0824 1.66675 10.1631 1.68976 10.2331 1.73318C10.303 1.7766 10.3594 1.83871 10.396 1.91249L12.3209 5.81166C12.4478 6.0683 12.635 6.29033 12.8665 6.4587C13.098 6.62707 13.3669 6.73675 13.6501 6.77833L17.9551 7.40833C18.0367 7.42015 18.1133 7.45455 18.1764 7.50766C18.2394 7.56076 18.2863 7.63045 18.3118 7.70883C18.3373 7.78721 18.3403 7.87116 18.3206 7.95119C18.3009 8.03121 18.2591 8.10412 18.2001 8.16166L15.0868 11.1933C14.8815 11.3934 14.7278 11.6404 14.6391 11.913C14.5504 12.1856 14.5293 12.4757 14.5776 12.7583L15.3126 17.0417C15.327 17.1232 15.3182 17.2071 15.2872 17.2839C15.2562 17.3607 15.2042 17.4272 15.1372 17.4758C15.0702 17.5245 14.9909 17.5533 14.9083 17.5591C14.8257 17.5648 14.7432 17.5472 14.6701 17.5083L10.8218 15.485C10.5682 15.3518 10.2861 15.2823 9.9997 15.2823C9.7133 15.2823 9.43119 15.3518 9.17762 15.485L5.33012 17.5083C5.25706 17.547 5.17461 17.5644 5.09216 17.5585C5.0097 17.5527 4.93055 17.5238 4.8637 17.4752C4.79684 17.4266 4.74498 17.3601 4.714 17.2835C4.68302 17.2069 4.67416 17.1231 4.68845 17.0417L5.42262 12.7592C5.47111 12.4764 5.4501 12.1862 5.3614 11.9134C5.27269 11.6406 5.11896 11.3935 4.91345 11.1933L1.80012 8.16249C1.74061 8.10502 1.69844 8.03199 1.67842 7.95172C1.65839 7.87145 1.66131 7.78717 1.68685 7.70849C1.71238 7.6298 1.75951 7.55986 1.82285 7.50665C1.88619 7.45343 1.9632 7.41907 2.04512 7.40749L6.34928 6.77833C6.63283 6.73708 6.90211 6.62754 7.13394 6.45915C7.36577 6.29076 7.5532 6.06855 7.68012 5.81166L9.60428 1.91249Z"
                      fill="#2A478D"
                      stroke="#2A478D"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M33.6043 1.91249C33.6408 1.83871 33.6972 1.7766 33.7672 1.73318C33.8371 1.68976 33.9178 1.66675 34.0001 1.66675C34.0824 1.66675 34.1631 1.68976 34.2331 1.73318C34.303 1.7766 34.3594 1.83871 34.396 1.91249L36.3209 5.81166C36.4478 6.0683 36.635 6.29033 36.8665 6.4587C37.098 6.62707 37.3669 6.73675 37.6501 6.77833L41.9551 7.40833C42.0367 7.42015 42.1133 7.45455 42.1764 7.50766C42.2394 7.56076 42.2863 7.63045 42.3118 7.70883C42.3373 7.78721 42.3403 7.87116 42.3206 7.95119C42.3009 8.03121 42.2591 8.10412 42.2001 8.16166L39.0868 11.1933C38.8815 11.3934 38.7278 11.6404 38.6391 11.913C38.5504 12.1856 38.5293 12.4757 38.5776 12.7583L39.3126 17.0417C39.327 17.1232 39.3182 17.2071 39.2872 17.2839C39.2562 17.3607 39.2042 17.4272 39.1372 17.4758C39.0702 17.5245 38.9909 17.5533 38.9083 17.5591C38.8257 17.5648 38.7432 17.5472 38.6701 17.5083L34.8218 15.485C34.5682 15.3518 34.2861 15.2823 33.9997 15.2823C33.7133 15.2823 33.4312 15.3518 33.1776 15.485L29.3301 17.5083C29.2571 17.547 29.1746 17.5644 29.0922 17.5585C29.0097 17.5527 28.9305 17.5238 28.8637 17.4752C28.7968 17.4266 28.745 17.3601 28.714 17.2835C28.683 17.2069 28.6742 17.1231 28.6884 17.0417L29.4226 12.7592C29.4711 12.4764 29.4501 12.1862 29.3614 11.9134C29.2727 11.6406 29.119 11.3935 28.9134 11.1933L25.8001 8.16249C25.7406 8.10502 25.6984 8.03199 25.6784 7.95172C25.6584 7.87145 25.6613 7.78717 25.6868 7.70849C25.7124 7.6298 25.7595 7.55986 25.8228 7.50665C25.8862 7.45343 25.9632 7.41907 26.0451 7.40749L30.3493 6.77833C30.6328 6.73708 30.9021 6.62754 31.1339 6.45915C31.3658 6.29076 31.5532 6.06855 31.6801 5.81166L33.6043 1.91249Z"
                      fill="#2A478D"
                      stroke="#2A478D"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M57.6043 1.91249C57.6408 1.83871 57.6972 1.7766 57.7672 1.73318C57.8371 1.68976 57.9178 1.66675 58.0001 1.66675C58.0824 1.66675 58.1631 1.68976 58.2331 1.73318C58.303 1.7766 58.3594 1.83871 58.396 1.91249L60.3209 5.81166C60.4478 6.0683 60.635 6.29033 60.8665 6.4587C61.098 6.62707 61.3669 6.73675 61.6501 6.77833L65.9551 7.40833C66.0367 7.42015 66.1133 7.45455 66.1764 7.50766C66.2394 7.56076 66.2863 7.63045 66.3118 7.70883C66.3373 7.78721 66.3403 7.87116 66.3206 7.95119C66.3009 8.03121 66.2591 8.10412 66.2001 8.16166L63.0868 11.1933C62.8815 11.3934 62.7278 11.6404 62.6391 11.913C62.5504 12.1856 62.5293 12.4757 62.5776 12.7583L63.3126 17.0417C63.327 17.1232 63.3182 17.2071 63.2872 17.2839C63.2562 17.3607 63.2042 17.4272 63.1372 17.4758C63.0702 17.5245 62.9909 17.5533 62.9083 17.5591C62.8257 17.5648 62.7432 17.5472 62.6701 17.5083L58.8218 15.485C58.5682 15.3518 58.2861 15.2823 57.9997 15.2823C57.7133 15.2823 57.4312 15.3518 57.1776 15.485L53.3301 17.5083C53.2571 17.547 53.1746 17.5644 53.0922 17.5585C53.0097 17.5527 52.9305 17.5238 52.8637 17.4752C52.7968 17.4266 52.745 17.3601 52.714 17.2835C52.683 17.2069 52.6742 17.1231 52.6884 17.0417L53.4226 12.7592C53.4711 12.4764 53.4501 12.1862 53.3614 11.9134C53.2727 11.6406 53.119 11.3935 52.9134 11.1933L49.8001 8.16249C49.7406 8.10502 49.6984 8.03199 49.6784 7.95172C49.6584 7.87145 49.6613 7.78717 49.6868 7.70849C49.7124 7.6298 49.7595 7.55986 49.8228 7.50665C49.8862 7.45343 49.9632 7.41907 50.0451 7.40749L54.3493 6.77833C54.6328 6.73708 54.9021 6.62754 55.1339 6.45915C55.3658 6.29076 55.5532 6.06855 55.6801 5.81166L57.6043 1.91249Z"
                      fill="#2A478D"
                      stroke="#2A478D"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M81.6043 1.91249C81.6408 1.83871 81.6972 1.7766 81.7672 1.73318C81.8371 1.68976 81.9178 1.66675 82.0001 1.66675C82.0824 1.66675 82.1631 1.68976 82.2331 1.73318C82.303 1.7766 82.3594 1.83871 82.396 1.91249L84.3209 5.81166C84.4478 6.0683 84.635 6.29033 84.8665 6.4587C85.098 6.62707 85.3669 6.73675 85.6501 6.77833L89.9551 7.40833C90.0367 7.42015 90.1133 7.45455 90.1764 7.50766C90.2394 7.56076 90.2863 7.63045 90.3118 7.70883C90.3373 7.78721 90.3403 7.87116 90.3206 7.95119C90.3009 8.03121 90.2591 8.10412 90.2001 8.16166L87.0868 11.1933C86.8815 11.3934 86.7278 11.6404 86.6391 11.913C86.5504 12.1856 86.5293 12.4757 86.5776 12.7583L87.3126 17.0417C87.327 17.1232 87.3182 17.2071 87.2872 17.2839C87.2562 17.3607 87.2042 17.4272 87.1372 17.4758C87.0702 17.5245 86.9909 17.5533 86.9083 17.5591C86.8257 17.5648 86.7432 17.5472 86.6701 17.5083L82.8218 15.485C82.5682 15.3518 82.2861 15.2823 81.9997 15.2823C81.7133 15.2823 81.4312 15.3518 81.1776 15.485L77.3301 17.5083C77.2571 17.547 77.1746 17.5644 77.0922 17.5585C77.0097 17.5527 76.9305 17.5238 76.8637 17.4752C76.7968 17.4266 76.745 17.3601 76.714 17.2835C76.683 17.2069 76.6742 17.1231 76.6884 17.0417L77.4226 12.7592C77.4711 12.4764 77.4501 12.1862 77.3614 11.9134C77.2727 11.6406 77.119 11.3935 76.9134 11.1933L73.8001 8.16249C73.7406 8.10502 73.6984 8.03199 73.6784 7.95172C73.6584 7.87145 73.6613 7.78717 73.6868 7.70849C73.7124 7.6298 73.7595 7.55986 73.8228 7.50665C73.8862 7.45343 73.9632 7.41907 74.0451 7.40749L78.3493 6.77833C78.6328 6.73708 78.9021 6.62754 79.1339 6.45915C79.3658 6.29076 79.5532 6.06855 79.6801 5.81166L81.6043 1.91249Z"
                      fill="#2A478D"
                      stroke="#2A478D"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M105.604 1.91249C105.641 1.83871 105.697 1.7766 105.767 1.73318C105.837 1.68976 105.918 1.66675 106 1.66675C106.082 1.66675 106.163 1.68976 106.233 1.73318C106.303 1.7766 106.359 1.83871 106.396 1.91249L108.321 5.81166C108.448 6.0683 108.635 6.29033 108.866 6.4587C109.098 6.62707 109.367 6.73675 109.65 6.77833L113.955 7.40833C114.037 7.42015 114.113 7.45455 114.176 7.50766C114.239 7.56076 114.286 7.63045 114.312 7.70883C114.337 7.78721 114.34 7.87116 114.321 7.95119C114.301 8.03121 114.259 8.10412 114.2 8.16166L111.087 11.1933C110.881 11.3934 110.728 11.6404 110.639 11.913C110.55 12.1856 110.529 12.4757 110.578 12.7583L111.313 17.0417C111.327 17.1232 111.318 17.2071 111.287 17.2839C111.256 17.3607 111.204 17.4272 111.137 17.4758C111.07 17.5245 110.991 17.5533 110.908 17.5591C110.826 17.5648 110.743 17.5472 110.67 17.5083L106.822 15.485C106.568 15.3518 106.286 15.2823 106 15.2823C105.713 15.2823 105.431 15.3518 105.178 15.485L101.33 17.5083C101.257 17.547 101.175 17.5644 101.092 17.5585C101.01 17.5527 100.931 17.5238 100.864 17.4752C100.797 17.4266 100.745 17.3601 100.714 17.2835C100.683 17.2069 100.674 17.1231 100.688 17.0417L101.423 12.7592C101.471 12.4764 101.45 12.1862 101.361 11.9134C101.273 11.6406 101.119 11.3935 100.913 11.1933L97.8001 8.16249C97.7406 8.10502 97.6984 8.03199 97.6784 7.95172C97.6584 7.87145 97.6613 7.78717 97.6868 7.70849C97.7124 7.6298 97.7595 7.55986 97.8228 7.50665C97.8862 7.45343 97.9632 7.41907 98.0451 7.40749L102.349 6.77833C102.633 6.73708 102.902 6.62754 103.134 6.45915C103.366 6.29076 103.553 6.06855 103.68 5.81166L105.604 1.91249Z"
                      fill="#2A478D"
                      stroke="#2A478D"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div
              className="col-10 col-lg-4 col-xl-4 col-md-6 rounded-3 border-0 mb-4 h-100 pe-3"
              style={{ objectFit: "cover" }}
            >
              <div className="card">
                <div className="card-body text-start">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32 6C30.9391 6 29.9217 6.42143 29.1716 7.17157C28.4214 7.92172 28 8.93913 28 10V22C28 23.0609 28.4214 24.0783 29.1716 24.8284C29.9217 25.5786 30.9391 26 32 26C32.5304 26 33.0391 26.2107 33.4142 26.5858C33.7893 26.9609 34 27.4696 34 28V30C34 31.0609 33.5786 32.0783 32.8284 32.8284C32.0783 33.5786 31.0609 34 30 34C29.4696 34 28.9609 34.2107 28.5858 34.5858C28.2107 34.9609 28 35.4696 28 36V40C28 40.5304 28.2107 41.0391 28.5858 41.4142C28.9609 41.7893 29.4696 42 30 42C33.1826 42 36.2348 40.7357 38.4853 38.4853C40.7357 36.2348 42 33.1826 42 30V10C42 8.93913 41.5786 7.92172 40.8284 7.17157C40.0783 6.42143 39.0609 6 38 6H32Z"
                      stroke="#2A478D"
                      stroke-opacity="0.4"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 6C8.93913 6 7.92172 6.42143 7.17157 7.17157C6.42143 7.92172 6 8.93913 6 10V22C6 23.0609 6.42143 24.0783 7.17157 24.8284C7.92172 25.5786 8.93913 26 10 26C10.5304 26 11.0391 26.2107 11.4142 26.5858C11.7893 26.9609 12 27.4696 12 28V30C12 31.0609 11.5786 32.0783 10.8284 32.8284C10.0783 33.5786 9.06087 34 8 34C7.46957 34 6.96086 34.2107 6.58579 34.5858C6.21071 34.9609 6 35.4696 6 36V40C6 40.5304 6.21071 41.0391 6.58579 41.4142C6.96086 41.7893 7.46957 42 8 42C11.1826 42 14.2348 40.7357 16.4853 38.4853C18.7357 36.2348 20 33.1826 20 30V10C20 8.93913 19.5786 7.92172 18.8284 7.17157C18.0783 6.42143 17.0609 6 16 6H10Z"
                      stroke="#2A478D"
                      stroke-opacity="0.4"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <div className="card-title">
                    <p className="fw-bolder h5"></p>
                  </div>
                  <div className="card-subtitle">
                    <p className="mt-4">
                      Estate Luxe made finding our dream home effortless. Their
                      professionalism and attention to detail exceeded all
                      expectations. We couldn't be happier with our new property
                      in Lekki.
                    </p>
                  </div>
                  <svg
                    width="403"
                    height="20"
                    viewBox="0 0 403 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.60428 1.91249C9.6408 1.83871 9.69722 1.7766 9.76716 1.73318C9.8371 1.68976 9.91779 1.66675 10.0001 1.66675C10.0824 1.66675 10.1631 1.68976 10.2331 1.73318C10.303 1.7766 10.3594 1.83871 10.396 1.91249L12.3209 5.81166C12.4478 6.0683 12.635 6.29033 12.8665 6.4587C13.098 6.62707 13.3669 6.73675 13.6501 6.77833L17.9551 7.40833C18.0367 7.42015 18.1133 7.45455 18.1764 7.50766C18.2394 7.56076 18.2863 7.63045 18.3118 7.70883C18.3373 7.78721 18.3403 7.87116 18.3206 7.95119C18.3009 8.03121 18.2591 8.10412 18.2001 8.16166L15.0868 11.1933C14.8815 11.3934 14.7278 11.6404 14.6391 11.913C14.5504 12.1856 14.5293 12.4757 14.5776 12.7583L15.3126 17.0417C15.327 17.1232 15.3182 17.2071 15.2872 17.2839C15.2562 17.3607 15.2042 17.4272 15.1372 17.4758C15.0702 17.5245 14.9909 17.5533 14.9083 17.5591C14.8257 17.5648 14.7432 17.5472 14.6701 17.5083L10.8218 15.485C10.5682 15.3518 10.2861 15.2823 9.9997 15.2823C9.7133 15.2823 9.43119 15.3518 9.17762 15.485L5.33012 17.5083C5.25706 17.547 5.17461 17.5644 5.09216 17.5585C5.0097 17.5527 4.93055 17.5238 4.8637 17.4752C4.79684 17.4266 4.74498 17.3601 4.714 17.2835C4.68302 17.2069 4.67416 17.1231 4.68845 17.0417L5.42262 12.7592C5.47111 12.4764 5.4501 12.1862 5.3614 11.9134C5.27269 11.6406 5.11896 11.3935 4.91345 11.1933L1.80012 8.16249C1.74061 8.10502 1.69844 8.03199 1.67842 7.95172C1.65839 7.87145 1.66131 7.78717 1.68685 7.70849C1.71238 7.6298 1.75951 7.55986 1.82285 7.50665C1.88619 7.45343 1.9632 7.41907 2.04512 7.40749L6.34928 6.77833C6.63283 6.73708 6.90211 6.62754 7.13394 6.45915C7.36577 6.29076 7.5532 6.06855 7.68012 5.81166L9.60428 1.91249Z"
                      fill="#2A478D"
                      stroke="#2A478D"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M33.6043 1.91249C33.6408 1.83871 33.6972 1.7766 33.7672 1.73318C33.8371 1.68976 33.9178 1.66675 34.0001 1.66675C34.0824 1.66675 34.1631 1.68976 34.2331 1.73318C34.303 1.7766 34.3594 1.83871 34.396 1.91249L36.3209 5.81166C36.4478 6.0683 36.635 6.29033 36.8665 6.4587C37.098 6.62707 37.3669 6.73675 37.6501 6.77833L41.9551 7.40833C42.0367 7.42015 42.1133 7.45455 42.1764 7.50766C42.2394 7.56076 42.2863 7.63045 42.3118 7.70883C42.3373 7.78721 42.3403 7.87116 42.3206 7.95119C42.3009 8.03121 42.2591 8.10412 42.2001 8.16166L39.0868 11.1933C38.8815 11.3934 38.7278 11.6404 38.6391 11.913C38.5504 12.1856 38.5293 12.4757 38.5776 12.7583L39.3126 17.0417C39.327 17.1232 39.3182 17.2071 39.2872 17.2839C39.2562 17.3607 39.2042 17.4272 39.1372 17.4758C39.0702 17.5245 38.9909 17.5533 38.9083 17.5591C38.8257 17.5648 38.7432 17.5472 38.6701 17.5083L34.8218 15.485C34.5682 15.3518 34.2861 15.2823 33.9997 15.2823C33.7133 15.2823 33.4312 15.3518 33.1776 15.485L29.3301 17.5083C29.2571 17.547 29.1746 17.5644 29.0922 17.5585C29.0097 17.5527 28.9305 17.5238 28.8637 17.4752C28.7968 17.4266 28.745 17.3601 28.714 17.2835C28.683 17.2069 28.6742 17.1231 28.6884 17.0417L29.4226 12.7592C29.4711 12.4764 29.4501 12.1862 29.3614 11.9134C29.2727 11.6406 29.119 11.3935 28.9134 11.1933L25.8001 8.16249C25.7406 8.10502 25.6984 8.03199 25.6784 7.95172C25.6584 7.87145 25.6613 7.78717 25.6868 7.70849C25.7124 7.6298 25.7595 7.55986 25.8228 7.50665C25.8862 7.45343 25.9632 7.41907 26.0451 7.40749L30.3493 6.77833C30.6328 6.73708 30.9021 6.62754 31.1339 6.45915C31.3658 6.29076 31.5532 6.06855 31.6801 5.81166L33.6043 1.91249Z"
                      fill="#2A478D"
                      stroke="#2A478D"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M57.6043 1.91249C57.6408 1.83871 57.6972 1.7766 57.7672 1.73318C57.8371 1.68976 57.9178 1.66675 58.0001 1.66675C58.0824 1.66675 58.1631 1.68976 58.2331 1.73318C58.303 1.7766 58.3594 1.83871 58.396 1.91249L60.3209 5.81166C60.4478 6.0683 60.635 6.29033 60.8665 6.4587C61.098 6.62707 61.3669 6.73675 61.6501 6.77833L65.9551 7.40833C66.0367 7.42015 66.1133 7.45455 66.1764 7.50766C66.2394 7.56076 66.2863 7.63045 66.3118 7.70883C66.3373 7.78721 66.3403 7.87116 66.3206 7.95119C66.3009 8.03121 66.2591 8.10412 66.2001 8.16166L63.0868 11.1933C62.8815 11.3934 62.7278 11.6404 62.6391 11.913C62.5504 12.1856 62.5293 12.4757 62.5776 12.7583L63.3126 17.0417C63.327 17.1232 63.3182 17.2071 63.2872 17.2839C63.2562 17.3607 63.2042 17.4272 63.1372 17.4758C63.0702 17.5245 62.9909 17.5533 62.9083 17.5591C62.8257 17.5648 62.7432 17.5472 62.6701 17.5083L58.8218 15.485C58.5682 15.3518 58.2861 15.2823 57.9997 15.2823C57.7133 15.2823 57.4312 15.3518 57.1776 15.485L53.3301 17.5083C53.2571 17.547 53.1746 17.5644 53.0922 17.5585C53.0097 17.5527 52.9305 17.5238 52.8637 17.4752C52.7968 17.4266 52.745 17.3601 52.714 17.2835C52.683 17.2069 52.6742 17.1231 52.6884 17.0417L53.4226 12.7592C53.4711 12.4764 53.4501 12.1862 53.3614 11.9134C53.2727 11.6406 53.119 11.3935 52.9134 11.1933L49.8001 8.16249C49.7406 8.10502 49.6984 8.03199 49.6784 7.95172C49.6584 7.87145 49.6613 7.78717 49.6868 7.70849C49.7124 7.6298 49.7595 7.55986 49.8228 7.50665C49.8862 7.45343 49.9632 7.41907 50.0451 7.40749L54.3493 6.77833C54.6328 6.73708 54.9021 6.62754 55.1339 6.45915C55.3658 6.29076 55.5532 6.06855 55.6801 5.81166L57.6043 1.91249Z"
                      fill="#2A478D"
                      stroke="#2A478D"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M81.6043 1.91249C81.6408 1.83871 81.6972 1.7766 81.7672 1.73318C81.8371 1.68976 81.9178 1.66675 82.0001 1.66675C82.0824 1.66675 82.1631 1.68976 82.2331 1.73318C82.303 1.7766 82.3594 1.83871 82.396 1.91249L84.3209 5.81166C84.4478 6.0683 84.635 6.29033 84.8665 6.4587C85.098 6.62707 85.3669 6.73675 85.6501 6.77833L89.9551 7.40833C90.0367 7.42015 90.1133 7.45455 90.1764 7.50766C90.2394 7.56076 90.2863 7.63045 90.3118 7.70883C90.3373 7.78721 90.3403 7.87116 90.3206 7.95119C90.3009 8.03121 90.2591 8.10412 90.2001 8.16166L87.0868 11.1933C86.8815 11.3934 86.7278 11.6404 86.6391 11.913C86.5504 12.1856 86.5293 12.4757 86.5776 12.7583L87.3126 17.0417C87.327 17.1232 87.3182 17.2071 87.2872 17.2839C87.2562 17.3607 87.2042 17.4272 87.1372 17.4758C87.0702 17.5245 86.9909 17.5533 86.9083 17.5591C86.8257 17.5648 86.7432 17.5472 86.6701 17.5083L82.8218 15.485C82.5682 15.3518 82.2861 15.2823 81.9997 15.2823C81.7133 15.2823 81.4312 15.3518 81.1776 15.485L77.3301 17.5083C77.2571 17.547 77.1746 17.5644 77.0922 17.5585C77.0097 17.5527 76.9305 17.5238 76.8637 17.4752C76.7968 17.4266 76.745 17.3601 76.714 17.2835C76.683 17.2069 76.6742 17.1231 76.6884 17.0417L77.4226 12.7592C77.4711 12.4764 77.4501 12.1862 77.3614 11.9134C77.2727 11.6406 77.119 11.3935 76.9134 11.1933L73.8001 8.16249C73.7406 8.10502 73.6984 8.03199 73.6784 7.95172C73.6584 7.87145 73.6613 7.78717 73.6868 7.70849C73.7124 7.6298 73.7595 7.55986 73.8228 7.50665C73.8862 7.45343 73.9632 7.41907 74.0451 7.40749L78.3493 6.77833C78.6328 6.73708 78.9021 6.62754 79.1339 6.45915C79.3658 6.29076 79.5532 6.06855 79.6801 5.81166L81.6043 1.91249Z"
                      fill="#2A478D"
                      stroke="#2A478D"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M105.604 1.91249C105.641 1.83871 105.697 1.7766 105.767 1.73318C105.837 1.68976 105.918 1.66675 106 1.66675C106.082 1.66675 106.163 1.68976 106.233 1.73318C106.303 1.7766 106.359 1.83871 106.396 1.91249L108.321 5.81166C108.448 6.0683 108.635 6.29033 108.866 6.4587C109.098 6.62707 109.367 6.73675 109.65 6.77833L113.955 7.40833C114.037 7.42015 114.113 7.45455 114.176 7.50766C114.239 7.56076 114.286 7.63045 114.312 7.70883C114.337 7.78721 114.34 7.87116 114.321 7.95119C114.301 8.03121 114.259 8.10412 114.2 8.16166L111.087 11.1933C110.881 11.3934 110.728 11.6404 110.639 11.913C110.55 12.1856 110.529 12.4757 110.578 12.7583L111.313 17.0417C111.327 17.1232 111.318 17.2071 111.287 17.2839C111.256 17.3607 111.204 17.4272 111.137 17.4758C111.07 17.5245 110.991 17.5533 110.908 17.5591C110.826 17.5648 110.743 17.5472 110.67 17.5083L106.822 15.485C106.568 15.3518 106.286 15.2823 106 15.2823C105.713 15.2823 105.431 15.3518 105.178 15.485L101.33 17.5083C101.257 17.547 101.175 17.5644 101.092 17.5585C101.01 17.5527 100.931 17.5238 100.864 17.4752C100.797 17.4266 100.745 17.3601 100.714 17.2835C100.683 17.2069 100.674 17.1231 100.688 17.0417L101.423 12.7592C101.471 12.4764 101.45 12.1862 101.361 11.9134C101.273 11.6406 101.119 11.3935 100.913 11.1933L97.8001 8.16249C97.7406 8.10502 97.6984 8.03199 97.6784 7.95172C97.6584 7.87145 97.6613 7.78717 97.6868 7.70849C97.7124 7.6298 97.7595 7.55986 97.8228 7.50665C97.8862 7.45343 97.9632 7.41907 98.0451 7.40749L102.349 6.77833C102.633 6.73708 102.902 6.62754 103.134 6.45915C103.366 6.29076 103.553 6.06855 103.68 5.81166L105.604 1.91249Z"
                      fill="#2A478D"
                      stroke="#2A478D"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div
              className="col-10 col-lg-4 col-xl-4 col-md-6 rounded-3 border-0 mb-4 h-100 pe-3"
              style={{ objectFit: "cover" }}
            >
              <div className="card">
                <div className="card-body text-start">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32 6C30.9391 6 29.9217 6.42143 29.1716 7.17157C28.4214 7.92172 28 8.93913 28 10V22C28 23.0609 28.4214 24.0783 29.1716 24.8284C29.9217 25.5786 30.9391 26 32 26C32.5304 26 33.0391 26.2107 33.4142 26.5858C33.7893 26.9609 34 27.4696 34 28V30C34 31.0609 33.5786 32.0783 32.8284 32.8284C32.0783 33.5786 31.0609 34 30 34C29.4696 34 28.9609 34.2107 28.5858 34.5858C28.2107 34.9609 28 35.4696 28 36V40C28 40.5304 28.2107 41.0391 28.5858 41.4142C28.9609 41.7893 29.4696 42 30 42C33.1826 42 36.2348 40.7357 38.4853 38.4853C40.7357 36.2348 42 33.1826 42 30V10C42 8.93913 41.5786 7.92172 40.8284 7.17157C40.0783 6.42143 39.0609 6 38 6H32Z"
                      stroke="#2A478D"
                      stroke-opacity="0.4"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 6C8.93913 6 7.92172 6.42143 7.17157 7.17157C6.42143 7.92172 6 8.93913 6 10V22C6 23.0609 6.42143 24.0783 7.17157 24.8284C7.92172 25.5786 8.93913 26 10 26C10.5304 26 11.0391 26.2107 11.4142 26.5858C11.7893 26.9609 12 27.4696 12 28V30C12 31.0609 11.5786 32.0783 10.8284 32.8284C10.0783 33.5786 9.06087 34 8 34C7.46957 34 6.96086 34.2107 6.58579 34.5858C6.21071 34.9609 6 35.4696 6 36V40C6 40.5304 6.21071 41.0391 6.58579 41.4142C6.96086 41.7893 7.46957 42 8 42C11.1826 42 14.2348 40.7357 16.4853 38.4853C18.7357 36.2348 20 33.1826 20 30V10C20 8.93913 19.5786 7.92172 18.8284 7.17157C18.0783 6.42143 17.0609 6 16 6H10Z"
                      stroke="#2A478D"
                      stroke-opacity="0.4"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <div className="card-title">
                    <p className="fw-bolder h5"></p>
                  </div>
                  <div className="card-subtitle">
                    <p className="mt-4">
                      Estate Luxe made finding our dream home effortless. Their
                      professionalism and attention to detail exceeded all
                      expectations. We couldn't be happier with our new property
                      in Lekki.
                    </p>
                  </div>
                  <svg
                    width="403"
                    height="20"
                    viewBox="0 0 403 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.60428 1.91249C9.6408 1.83871 9.69722 1.7766 9.76716 1.73318C9.8371 1.68976 9.91779 1.66675 10.0001 1.66675C10.0824 1.66675 10.1631 1.68976 10.2331 1.73318C10.303 1.7766 10.3594 1.83871 10.396 1.91249L12.3209 5.81166C12.4478 6.0683 12.635 6.29033 12.8665 6.4587C13.098 6.62707 13.3669 6.73675 13.6501 6.77833L17.9551 7.40833C18.0367 7.42015 18.1133 7.45455 18.1764 7.50766C18.2394 7.56076 18.2863 7.63045 18.3118 7.70883C18.3373 7.78721 18.3403 7.87116 18.3206 7.95119C18.3009 8.03121 18.2591 8.10412 18.2001 8.16166L15.0868 11.1933C14.8815 11.3934 14.7278 11.6404 14.6391 11.913C14.5504 12.1856 14.5293 12.4757 14.5776 12.7583L15.3126 17.0417C15.327 17.1232 15.3182 17.2071 15.2872 17.2839C15.2562 17.3607 15.2042 17.4272 15.1372 17.4758C15.0702 17.5245 14.9909 17.5533 14.9083 17.5591C14.8257 17.5648 14.7432 17.5472 14.6701 17.5083L10.8218 15.485C10.5682 15.3518 10.2861 15.2823 9.9997 15.2823C9.7133 15.2823 9.43119 15.3518 9.17762 15.485L5.33012 17.5083C5.25706 17.547 5.17461 17.5644 5.09216 17.5585C5.0097 17.5527 4.93055 17.5238 4.8637 17.4752C4.79684 17.4266 4.74498 17.3601 4.714 17.2835C4.68302 17.2069 4.67416 17.1231 4.68845 17.0417L5.42262 12.7592C5.47111 12.4764 5.4501 12.1862 5.3614 11.9134C5.27269 11.6406 5.11896 11.3935 4.91345 11.1933L1.80012 8.16249C1.74061 8.10502 1.69844 8.03199 1.67842 7.95172C1.65839 7.87145 1.66131 7.78717 1.68685 7.70849C1.71238 7.6298 1.75951 7.55986 1.82285 7.50665C1.88619 7.45343 1.9632 7.41907 2.04512 7.40749L6.34928 6.77833C6.63283 6.73708 6.90211 6.62754 7.13394 6.45915C7.36577 6.29076 7.5532 6.06855 7.68012 5.81166L9.60428 1.91249Z"
                      fill="#2A478D"
                      stroke="#2A478D"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M33.6043 1.91249C33.6408 1.83871 33.6972 1.7766 33.7672 1.73318C33.8371 1.68976 33.9178 1.66675 34.0001 1.66675C34.0824 1.66675 34.1631 1.68976 34.2331 1.73318C34.303 1.7766 34.3594 1.83871 34.396 1.91249L36.3209 5.81166C36.4478 6.0683 36.635 6.29033 36.8665 6.4587C37.098 6.62707 37.3669 6.73675 37.6501 6.77833L41.9551 7.40833C42.0367 7.42015 42.1133 7.45455 42.1764 7.50766C42.2394 7.56076 42.2863 7.63045 42.3118 7.70883C42.3373 7.78721 42.3403 7.87116 42.3206 7.95119C42.3009 8.03121 42.2591 8.10412 42.2001 8.16166L39.0868 11.1933C38.8815 11.3934 38.7278 11.6404 38.6391 11.913C38.5504 12.1856 38.5293 12.4757 38.5776 12.7583L39.3126 17.0417C39.327 17.1232 39.3182 17.2071 39.2872 17.2839C39.2562 17.3607 39.2042 17.4272 39.1372 17.4758C39.0702 17.5245 38.9909 17.5533 38.9083 17.5591C38.8257 17.5648 38.7432 17.5472 38.6701 17.5083L34.8218 15.485C34.5682 15.3518 34.2861 15.2823 33.9997 15.2823C33.7133 15.2823 33.4312 15.3518 33.1776 15.485L29.3301 17.5083C29.2571 17.547 29.1746 17.5644 29.0922 17.5585C29.0097 17.5527 28.9305 17.5238 28.8637 17.4752C28.7968 17.4266 28.745 17.3601 28.714 17.2835C28.683 17.2069 28.6742 17.1231 28.6884 17.0417L29.4226 12.7592C29.4711 12.4764 29.4501 12.1862 29.3614 11.9134C29.2727 11.6406 29.119 11.3935 28.9134 11.1933L25.8001 8.16249C25.7406 8.10502 25.6984 8.03199 25.6784 7.95172C25.6584 7.87145 25.6613 7.78717 25.6868 7.70849C25.7124 7.6298 25.7595 7.55986 25.8228 7.50665C25.8862 7.45343 25.9632 7.41907 26.0451 7.40749L30.3493 6.77833C30.6328 6.73708 30.9021 6.62754 31.1339 6.45915C31.3658 6.29076 31.5532 6.06855 31.6801 5.81166L33.6043 1.91249Z"
                      fill="#2A478D"
                      stroke="#2A478D"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M57.6043 1.91249C57.6408 1.83871 57.6972 1.7766 57.7672 1.73318C57.8371 1.68976 57.9178 1.66675 58.0001 1.66675C58.0824 1.66675 58.1631 1.68976 58.2331 1.73318C58.303 1.7766 58.3594 1.83871 58.396 1.91249L60.3209 5.81166C60.4478 6.0683 60.635 6.29033 60.8665 6.4587C61.098 6.62707 61.3669 6.73675 61.6501 6.77833L65.9551 7.40833C66.0367 7.42015 66.1133 7.45455 66.1764 7.50766C66.2394 7.56076 66.2863 7.63045 66.3118 7.70883C66.3373 7.78721 66.3403 7.87116 66.3206 7.95119C66.3009 8.03121 66.2591 8.10412 66.2001 8.16166L63.0868 11.1933C62.8815 11.3934 62.7278 11.6404 62.6391 11.913C62.5504 12.1856 62.5293 12.4757 62.5776 12.7583L63.3126 17.0417C63.327 17.1232 63.3182 17.2071 63.2872 17.2839C63.2562 17.3607 63.2042 17.4272 63.1372 17.4758C63.0702 17.5245 62.9909 17.5533 62.9083 17.5591C62.8257 17.5648 62.7432 17.5472 62.6701 17.5083L58.8218 15.485C58.5682 15.3518 58.2861 15.2823 57.9997 15.2823C57.7133 15.2823 57.4312 15.3518 57.1776 15.485L53.3301 17.5083C53.2571 17.547 53.1746 17.5644 53.0922 17.5585C53.0097 17.5527 52.9305 17.5238 52.8637 17.4752C52.7968 17.4266 52.745 17.3601 52.714 17.2835C52.683 17.2069 52.6742 17.1231 52.6884 17.0417L53.4226 12.7592C53.4711 12.4764 53.4501 12.1862 53.3614 11.9134C53.2727 11.6406 53.119 11.3935 52.9134 11.1933L49.8001 8.16249C49.7406 8.10502 49.6984 8.03199 49.6784 7.95172C49.6584 7.87145 49.6613 7.78717 49.6868 7.70849C49.7124 7.6298 49.7595 7.55986 49.8228 7.50665C49.8862 7.45343 49.9632 7.41907 50.0451 7.40749L54.3493 6.77833C54.6328 6.73708 54.9021 6.62754 55.1339 6.45915C55.3658 6.29076 55.5532 6.06855 55.6801 5.81166L57.6043 1.91249Z"
                      fill="#2A478D"
                      stroke="#2A478D"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M81.6043 1.91249C81.6408 1.83871 81.6972 1.7766 81.7672 1.73318C81.8371 1.68976 81.9178 1.66675 82.0001 1.66675C82.0824 1.66675 82.1631 1.68976 82.2331 1.73318C82.303 1.7766 82.3594 1.83871 82.396 1.91249L84.3209 5.81166C84.4478 6.0683 84.635 6.29033 84.8665 6.4587C85.098 6.62707 85.3669 6.73675 85.6501 6.77833L89.9551 7.40833C90.0367 7.42015 90.1133 7.45455 90.1764 7.50766C90.2394 7.56076 90.2863 7.63045 90.3118 7.70883C90.3373 7.78721 90.3403 7.87116 90.3206 7.95119C90.3009 8.03121 90.2591 8.10412 90.2001 8.16166L87.0868 11.1933C86.8815 11.3934 86.7278 11.6404 86.6391 11.913C86.5504 12.1856 86.5293 12.4757 86.5776 12.7583L87.3126 17.0417C87.327 17.1232 87.3182 17.2071 87.2872 17.2839C87.2562 17.3607 87.2042 17.4272 87.1372 17.4758C87.0702 17.5245 86.9909 17.5533 86.9083 17.5591C86.8257 17.5648 86.7432 17.5472 86.6701 17.5083L82.8218 15.485C82.5682 15.3518 82.2861 15.2823 81.9997 15.2823C81.7133 15.2823 81.4312 15.3518 81.1776 15.485L77.3301 17.5083C77.2571 17.547 77.1746 17.5644 77.0922 17.5585C77.0097 17.5527 76.9305 17.5238 76.8637 17.4752C76.7968 17.4266 76.745 17.3601 76.714 17.2835C76.683 17.2069 76.6742 17.1231 76.6884 17.0417L77.4226 12.7592C77.4711 12.4764 77.4501 12.1862 77.3614 11.9134C77.2727 11.6406 77.119 11.3935 76.9134 11.1933L73.8001 8.16249C73.7406 8.10502 73.6984 8.03199 73.6784 7.95172C73.6584 7.87145 73.6613 7.78717 73.6868 7.70849C73.7124 7.6298 73.7595 7.55986 73.8228 7.50665C73.8862 7.45343 73.9632 7.41907 74.0451 7.40749L78.3493 6.77833C78.6328 6.73708 78.9021 6.62754 79.1339 6.45915C79.3658 6.29076 79.5532 6.06855 79.6801 5.81166L81.6043 1.91249Z"
                      fill="#2A478D"
                      stroke="#2A478D"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M105.604 1.91249C105.641 1.83871 105.697 1.7766 105.767 1.73318C105.837 1.68976 105.918 1.66675 106 1.66675C106.082 1.66675 106.163 1.68976 106.233 1.73318C106.303 1.7766 106.359 1.83871 106.396 1.91249L108.321 5.81166C108.448 6.0683 108.635 6.29033 108.866 6.4587C109.098 6.62707 109.367 6.73675 109.65 6.77833L113.955 7.40833C114.037 7.42015 114.113 7.45455 114.176 7.50766C114.239 7.56076 114.286 7.63045 114.312 7.70883C114.337 7.78721 114.34 7.87116 114.321 7.95119C114.301 8.03121 114.259 8.10412 114.2 8.16166L111.087 11.1933C110.881 11.3934 110.728 11.6404 110.639 11.913C110.55 12.1856 110.529 12.4757 110.578 12.7583L111.313 17.0417C111.327 17.1232 111.318 17.2071 111.287 17.2839C111.256 17.3607 111.204 17.4272 111.137 17.4758C111.07 17.5245 110.991 17.5533 110.908 17.5591C110.826 17.5648 110.743 17.5472 110.67 17.5083L106.822 15.485C106.568 15.3518 106.286 15.2823 106 15.2823C105.713 15.2823 105.431 15.3518 105.178 15.485L101.33 17.5083C101.257 17.547 101.175 17.5644 101.092 17.5585C101.01 17.5527 100.931 17.5238 100.864 17.4752C100.797 17.4266 100.745 17.3601 100.714 17.2835C100.683 17.2069 100.674 17.1231 100.688 17.0417L101.423 12.7592C101.471 12.4764 101.45 12.1862 101.361 11.9134C101.273 11.6406 101.119 11.3935 100.913 11.1933L97.8001 8.16249C97.7406 8.10502 97.6984 8.03199 97.6784 7.95172C97.6584 7.87145 97.6613 7.78717 97.6868 7.70849C97.7124 7.6298 97.7595 7.55986 97.8228 7.50665C97.8862 7.45343 97.9632 7.41907 98.0451 7.40749L102.349 6.77833C102.633 6.73708 102.902 6.62754 103.134 6.45915C103.366 6.29076 103.553 6.06855 103.68 5.81166L105.604 1.91249Z"
                      fill="#2A478D"
                      stroke="#2A478D"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div
            className="container-fluid px-3 px-md-4 pb-5"
            style={{ paddingTop: "70px ", backgroundColor: "#2A478D" }}
          >
            <div className="col-12">
              <p
                className="h2 "
                style={{ color: "#fff", fontFamily: "Georgia" }}
              >
                Ready to Find Your Dream Home?
              </p>
              <p className="mt-2 text-white" style={{ fontSize: "12px" }}>
                Connect with our expert agents today and take the first step
                towards your ideal property.
              </p>
            </div>
            <div className="row align-content-between justify-content-center">
              <div className="col-12 col-lg-6 col-xl-6">
                <Link to="/properties" className="text-dark">
                <p className="btn btn-dark">Browse Properties</p>
                </Link>
                <Link to="/contact" className="text-dark">
                <p className="btn bg-white ms-3">Contact Us</p>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="d-none d-md-block container-fluid px-3 px-md-4  bg-dark"
            style={{ paddingTop: "70px " }}
          >
            <div className="row flex-nowrap ms-0 me-5 pb-3">
              <div className="col-lg-3 col-xl-3 col-md-3 text-start">
                <p className="h5 text-white mb-3 text-nowrap ">
                  BOC Real Estate Limited
                </p>
                <p className="text-secondary" style={{ fontSize: "16px" }}>
                  Nigeria's premier luxury real estate platform, connecting
                  discerning clients with exceptional properties since 2021.
                </p>
              </div>
              <div className="col-lg-3 col-xl-3 col-md-3 ms-5 text-start">
                <p
                  className=" text-white mb-3"
                  style={{ fontFamily: "Georgia" }}
                >
                  Quick Links
                </p>
                <p className="text-secondary mb-1" style={{ fontSize: "16px" }}>
                  Buy
                </p>
                <p className="text-secondary mb-1" style={{ fontSize: "16px" }}>
                  Rent
                </p>
                <p className="text-secondary mb-1" style={{ fontSize: "16px" }}>
                  Lease
                </p>
                <p className="text-secondary mb-1" style={{ fontSize: "16px" }}>
                  About
                </p>
                <p className="text-secondary mb-1" style={{ fontSize: "16px" }}>
                  Agents
                </p>
                <p className="text-secondary mb-1" style={{ fontSize: "16px" }}>
                  Contact
                </p>
              </div>
              <div className="col-lg-3 col-xl-3 col-md-3 text-start mx-0">
                <p
                  className=" text-white mb-3 "
                  style={{ fontFamily: "Georgia" }}
                >
                  Property Types
                </p>
                <p className="text-secondary mb-1" style={{ fontSize: "16px" }}>
                  Apartments
                </p>
                <p className="text-secondary mb-1" style={{ fontSize: "16px" }}>
                  Duplexes
                </p>
                <p className="text-secondary mb-1" style={{ fontSize: "16px" }}>
                  Terraces
                </p>
                <p className="text-secondary mb-1" style={{ fontSize: "16px" }}>
                  Commercial
                </p>
                <p className="text-secondary mb-1" style={{ fontSize: "16px" }}>
                  Land
                </p>
              </div>
              <div className="col-lg-3 col-xl-3 col-md-3 text-start">
                <p
                  className=" text-white mb-3"
                  style={{ fontFamily: "Georgia" }}
                >
                  Contact Us
                </p>
                <p className="text-secondary mb-1" style={{ fontSize: "16px" }}>
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
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 10.8333C11.3807 10.8333 12.5 9.71396 12.5 8.33325C12.5 6.95254 11.3807 5.83325 10 5.83325C8.61929 5.83325 7.5 6.95254 7.5 8.33325C7.5 9.71396 8.61929 10.8333 10 10.8333Z"
                      stroke="white"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>{" "}
                  Plot 15, Admiralty Way, Lekki Phase 1, Lagos, Nigeria
                </p>
                <p className="text-secondary mb-1" style={{ fontSize: "16px" }}>
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
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>{" "}
                  +2348012345678
                </p>
                <p className="text-secondary mb-1" style={{ fontSize: "16px" }}>
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
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.3332 5.83325L10.8582 10.5833C10.6009 10.7444 10.3034 10.8299 9.99984 10.8299C9.69624 10.8299 9.39878 10.7444 9.1415 10.5833L1.6665 5.83325"
                      stroke="white"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>{" "}
                  info@estateluxe.com
                </p>
              </div>
            </div>
          </div>
          <div className="d-none d-md-block container-fluid px-3 px-md-4  bg-dark text-white pt-5 border-top  border-secondary">
            <p className="text-secondary mb-0" style={{ fontSize: "16px" }}>
              © 2026 BOC Real Estate Limited. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
