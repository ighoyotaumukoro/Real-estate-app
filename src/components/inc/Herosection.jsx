import React from "react";
import { Link } from "react-router-dom";
import MyNavbar from "../inc/Navbar";
import { property } from "../../data/Properties";
function Herosection() {
  return (
    <>
      <div
        className=" hero container-fluid bg-white mx-2 "
        style={{ paddingTop: "100px " }}
      >
        <div className="container-fluid px-3 px-md-4 text-center">
          <h1
            className="display-5 fw-light"
            style={{ color: "#2A478D", fontFamily: "Georgia" }}
          >
            Featured Properties
          </h1>
          <h5 className="text-muted mb-5">
            Handpicked exclusive listings just for you
          </h5>
        </div>

        <div
          className="d-flex flex-md-wrap flex-nowrap overflow-auto pb-3"
          style={{
            fontFamily: "Georgia",
            scrollbarWidth: "none",
            scrollSnapType: "x mandatory",
          }}
        >
          {property.map((prop) => (
            <div
              key={prop.id}
              className="col-10 col-lg-4 col-xl-4 col-md-6 border-0  h-100 pe-3"
              style={{ objectFit: "cover" }}
            >
              <div className="col-12 ms-0  hero-card  g-4 mb-3 shadow border-0 prop">
                <div className="position-relative">
                  <img src={prop.image} className="card-img-top"></img>
                  <div className="card-body text-start p-3">
                    <span
                      className="badge btn position-absolute bg-white rounded-5 py-2 top-0 mt-2 ms-0 px-3 "
                      style={{ color: "#2A478D" }}
                    >
                      {prop.badge1}
                    </span>
                    <span className="badge btn position-absolute bg-dark text-white rounded-4 py-2 end-0 me-3 top-0 mt-2  px-3 align ">
                      {prop.badge2}
                    </span>
                    <p className="mb-1 prop-name">{prop.name}</p>
                    <p className="text-muted my-1 prop-loc">{prop.location}</p>
                    <p className="text-muted my-1 prop-des"> {prop.description}</p>
                    <div className="position-relative mt-3">
                      <p style={{ color: "#2A478D" }} className=" h4 fw-bold">
                        {prop.price}
                        <Link to={`/property/${prop.slug}`}>
                          <span
                            className="end-0 position-absolute fw-bold py-2 px-3 rounded-3"
                            style={{
                              color: "#2A478D",
                              border: "1px solid #2A478D",
                              fontFamily: "Arial",
                              fontSize: "16px",
                            }}
                          >
                            {prop.details}
                          </span>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          ))}
          <Link to="/properties" className="text-dark">
            <p
              className="propertylink position-absolute end-0 me-4 text-decoration-underline fw-bold"
              style={{ color: "#2A478D", marginTop:"550px" }}
            >
              View all Properties
            </p>
          </Link>
        </div>
        
      </div>
      
    </>
  );
}

export default Herosection;
