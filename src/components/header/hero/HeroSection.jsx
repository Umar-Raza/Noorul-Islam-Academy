import React, { useEffect } from "react";
import Hero1 from "../../../assets/hero1.jpg";
import Hero2 from "../../../assets/hero2.jpg";
import Hero3 from "../../../assets/hero3.jpg";

const HeroSection = () => {
  useEffect(() => {
    // Dynamically import Bootstrap JS if not already loaded
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide  carousel-dark"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Hero1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Hero2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Hero3} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
export default HeroSection;
