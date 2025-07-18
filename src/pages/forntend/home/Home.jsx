import React from "react";
import Navbar from "../../../components/header/navbar/Navbar";
import HeroSection from "../../../components/header/hero/HeroSection";
import About from "../about/About";
import Courses from "../courses/Courses";

export const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <HeroSection className="w-100" />
      <About />
      <Courses />
    </div>
  );
};
