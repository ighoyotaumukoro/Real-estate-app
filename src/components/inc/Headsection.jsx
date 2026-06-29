import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyNavbar from "../inc/Navbar";
import HeroBg from "../../assets/Hero-bg.jpg";
import { property } from "../../data/Properties";
import { property2 } from "../../data/Properties2";
import { useNavigate } from "react-router-dom";

const heroWrapperStyle = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${HeroBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "60vh",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  paddingBottom: "12vh",
  margin: "15px",
  borderRadius: "20px 20px 0 0",
};

function Headsection() {
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const navigate = useNavigate();

  const handleReset = () => {
    setLocation("");
    setName("");
    setMinPrice("");
    setMaxPrice("");
  };

  const handleSearch = () => {
    const params = new URLSearchParams();
    
    if (location) params.set("location", location);
    if (name) params.set("name", name);
    if (minPrice) params.set("minPrice", minPrice);
    if (maxPrice) params.set("maxPrice", maxPrice);

    navigate(`/properties?${params.toString()}`);
  };

  

  const [active, setActive] = useState("buy");

  return (
    <>
      <div id="progress" className="heroWrapperStyle" style={heroWrapperStyle}>
        <img
          src="/images/BOC logo.png"
          className="img-fluid position-absolute top-0 ms-2 mt-3"
          style={{ height: "60px", width: "80px" }}
        ></img>
        <MyNavbar />

        <div className="flex-grow-1 align-items-center justify-content-center">
          <div className=" text-center text-white">
            <h1
              className="head-text1 display-1 mt-5 pt-4 fw-light"
              style={{ color: "#2A478D", fontFamily: "Georgia" }}
            >
              Claim Your Space.
            </h1>
            <h1
              className="head-text1 display-3  mb-2 fw-light"
              style={{ color: "#2A478D", fontFamily: "Georgia" }}
            >
              Define Your Life.
            </h1>
            <p
              className="head-text col-lg-8 mx-auto mb-5 text-wrap text-center"
              style={{ fontSize: "20px", color: "" }}
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
        className="head-card container"
        style={{ marginTop: "-100px", position: "relative", zIndex: 10 }}
      >
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card shadow-lg border-0 rounded-3">
              <div className="card-body p-4">
                <div
                  className="toggle-btns d-flex gap-2 mb-3 justify-content-between"
                  style={{ background: " #f0f0f0" }}
                >
                  <Link to="" className="text-dark">
                    <label
                      className={active === "buy" ? "active" : ""}
                      onClick={() => setActive("buy")}
                    >
                      Buy
                    </label>
                  </Link>

                  <Link to="" className="text-dark">
                    <label
                      className={active === "rent" ? "active" : ""}
                      onClick={() => setActive("rent")}
                    >
                      Rent
                    </label>
                  </Link>

                  <Link to="" className="text-dark">
                    <label
                      className={active === "lease" ? "active" : ""}
                      onClick={() => setActive("lease")}
                    >
                      Lease
                    </label>
                  </Link>
                </div>

                <div className="row g-1 align-items-center justify-content-around">
                  <div className="col-sm-10 col-lg-3 col-md-3 col-xl-3">
                    <input
                      type="text"
                      value={location}
                      className="form-control"
                      placeholder="State (e.g. Lagos)"
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>

                  <div className="col-sm-10 col-lg-3 col-md-3 col-xl-3">
                    <input
                      value={minPrice}
                      type="text"
                      className="form-control"
                      placeholder="Min. Price(₦)"
                      onChange={(e) => setMinPrice(e.target.value)}
                    />
                  </div>
                  <div className="col-sm-10 col-lg-3 col-md-3 col-xl-3">
                    <input
                      value={maxPrice}
                      type="text"
                      className="form-control"
                      placeholder="Max. price(₦)"
                      onChange={(e) => setMaxPrice(e.target.value)}
                    />
                  </div>
                  <div className="col-sm-10 col-lg-3 col-md-3 col-xl-3">
                    <button
                      onClick={handleSearch}
                      className="search-btn btn btn-dark-blue py-2 px-5"
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
    </>
  );
}

export default Headsection;