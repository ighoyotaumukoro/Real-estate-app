import React from "react";
import MyNavbar from "../inc/Navbar";
import Headsection from "../inc/Headsection";
import Herosection from "../inc/Herosection";
import WhyBoc from "../inc/WhyBoc";
import Footer from "../inc/Footer";
import Reviews from "../inc/Reviews";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      
      <a
        href="https://wa.me/2348144697306"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 9999,
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          backgroundColor: "rgb(44, 212, 11)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
          textDecoration: "none",
        }}
      >
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="30"
          height="30"
          fill="white"
        >
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.466 2.027 7.76L0 32l8.455-2.008A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.756-1.842l-.485-.29-5.02 1.193 1.224-4.888-.317-.502A13.267 13.267 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.878c-.398-.199-2.355-1.162-2.72-1.295-.366-.133-.632-.199-.899.2-.266.398-1.031 1.294-1.264 1.56-.233.266-.466.3-.864.1-.398-.2-1.681-.62-3.203-1.977-1.184-1.056-1.983-2.36-2.216-2.758-.233-.399-.025-.614.175-.812.18-.178.399-.466.598-.699.2-.233.266-.399.4-.665.132-.266.066-.499-.034-.698-.1-.2-.899-2.167-1.232-2.967-.324-.78-.654-.674-.899-.686l-.765-.013c-.266 0-.698.1-.1065.499-.366.4-1.397 1.363-1.397 3.325 0 1.963 1.43 3.86 1.63 4.126.199.266 2.815 4.3 6.822 6.03.954.412 1.698.658 2.278.842.957.305 1.828.262 2.516.159.767-.114 2.355-.963 2.688-1.893.332-.93.332-1.727.232-1.893-.1-.166-.366-.266-.765-.465z" />
        </svg>
      </a>

      
      <div
        className="main-container"
        style={{ overflowX: "hidden" }} 
      >
        <Headsection />
        <Herosection />
        <WhyBoc />
        <Reviews />
        <Footer /> 
      </div>
    </>
  );
}

export default Home;