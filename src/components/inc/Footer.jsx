import React from "react";
import { Link } from "react-router-dom";
import MyNavbar from "../inc/Navbar";

function Footer() {
  return (
    <>
      <div
            className="container-fluid bg-dark"
            style={{ paddingTop: "70px " }}
          >
            <div className="col-12 row flex-wrap flex-md-nowrap ms-0 me-5 pb-3">
              <div className="col-12 col-lg-3 col-xl-3 col-md-3 text-start">
                <p className="h5 text-white mb-3 text-nowrap ">
                  BOC Real Estate Limited
                </p>
                <p className="text-secondary" style={{ fontSize: "16px" }}>
                  Nigeria's premier luxury real estate platform, connecting
                  discerning clients with exceptional properties since 2021.
                </p>
              </div>
              <div className="col-12 col-lg-3 col-xl-3 col-md-3 text-start">
                <p
                  className=" text-white mb-3"
                  style={{ fontFamily: "Georgia" }}
                >
                  Quick Links
                </p>
                <Link to ="/properties"className="text-dark">
                <p className="text-secondary mb-1" style={{ fontSize: "16px" }}>
                  Buy
                </p>
                </Link>
                <Link to ="/properties"className="text-dark">
                <p className="text-secondary mb-1" style={{ fontSize: "16px" }}>
                  Rent
                </p>
                </Link>
                <Link to ="/properties"className="text-dark">
                <p className="text-secondary mb-1" style={{ fontSize: "16px" }}>
                  Lease
                </p>
                </Link>
                <p className="text-secondary mb-1" style={{ fontSize: "16px" }}>
                  About
                </p>
                <a href="https://wa.me/2348100854095" className="text-decoration-none">
                <p className="text-secondary mb-1" style={{ fontSize: "16px" }}>
                  Agents
                </p>
                </a>
                
                <Link to ="/contact"className="text-dark">
                <p className="text-secondary mb-1" style={{ fontSize: "16px" }}>
                  Contact
                </p>
                </Link>
              </div>
              <div className="col-12 col-lg-3 col-xl-3 col-md-3 text-start mx-0">
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
              <div className="col-12 col-lg-3 col-xl-3 col-md-3 text-start">
                <p
                  className=" text-white mb-3"
                  style={{ fontFamily: "Georgia" }}
                >
                  Contact Us
                </p>
                <p className="text-secondary mb-1 d-flex" style={{ fontSize: "16px" }}>
                  <svg
                  className="mt-1 me-1"
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
                <a href="call:+2348100854095" className="text-decoration-none">
                <p className="text-secondary mb-1 d-flex" style={{ fontSize: "16px" }}>
                  <svg
                  className="mt-1 me-1"
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
                  +2348100854095
                </p>
                </a>
                <a href="mailto:ighoyotau@gmail.com" className="text-decoration-none">
                <p className="text-secondary mb-1 d-flex" style={{ fontSize: "16px" }}>
                  <svg
                  className="mt-1 me-1"
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
                  ighoyotau@gmail.com
                </p>
                </a>
              </div>
            </div>
          </div>
          <div className="d-none d-md-block container-fluid px-3 px-md-4  bg-dark text-white py-4 border-top  border-secondary">
            <h5 className="text-secondary mb-0" style={{ fontSize: "16px" }}>
              © 2026 BOC Real Estate Limited. All rights reserved.
            </h5>
          </div>
    
    </>
  );
}

export default Footer;
