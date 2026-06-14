import React from "react";
import { Link } from "react-router-dom";
import MyNavbar from "../inc/Navbar";

function Herosection() {
  return (
    <>
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
                      <img src="/images/Hotel-one.jpg" className="card-img-top"></img>
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
                      <img src="/images/Hotel-one.jpg" className="card-img-top"></img>
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
                      <img src="/images/Hotel-2.jpg" className="card-img-top"></img>
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
                      <img src="/images/Hotel-one.jpg" className="card-img-top"></img>
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
                      <img src="/images/Hotel-3.jpg" className="card-img-top"></img>
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
                      <img src="/images/Hotel-2.jpg" className="card-img-top"></img>
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
              </div>
    </>
  );
}

export default Herosection;
