import React from "react";
import Navbar from "../../../components/header/navbar/Navbar";
import HeroSection from "../../../components/header/hero/HeroSection";
import About from "../about/About";
import Courses from "../courses/Courses";
import WhyChooseUs from "../../../components/whyChooseUs/WhyChooseUs";
import { Accordion } from "../../../components/accordion/Accordion";
import { Contact } from "../contact/contact";
import { Footer } from "../../../components/footer/Footer";

export const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <HeroSection className="w-100" />
      <About />
      <Courses />
      <WhyChooseUs />
      <Contact />
      <Accordion />
      <Footer />
    </div>
  );
};
