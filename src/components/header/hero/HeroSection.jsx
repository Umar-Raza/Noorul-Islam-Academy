import React, { useEffect } from "react";
import Hero1 from "../../../assets/hero1.jpg";
import Hero2 from "../../../assets/hero2.jpg";

const HeroSection = () => {
  useEffect(() => {
    // Dynamically import Bootstrap JS if not already loaded
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel carousel-dark slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Hero1} className="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={Hero2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={Hero1} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon text-dark"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

// import HeroImg from "../../../assets/hero1.jpg";
// import Slider from "react-slick";

// const Hero = () => {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     pauseOnHover: true,
//     arrows: true,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: true,
//         },
//       },
//     ],
//   };
//   return (
//     <div
//       className="slider-container"
//       style={{ overflow: "hidden", width: "100%" }}
//     >
//       <Slider {...settings}>
//         <div className="w-100">
//           <img src={HeroImg} className="w-100" alt="Hero-img1" />
//         </div>
//         <div className="w-100">
//           <img src={HeroImg} className="w-100" alt="Hero-img2" />
//         </div>
//         <div className="w-100">
//           <img src={HeroImg} className="w-100" alt="Hero-img3" />
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default Hero;
export default HeroSection;
