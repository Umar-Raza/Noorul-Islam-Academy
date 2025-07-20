import React from "react";
import { Contact } from "./forntend/contact/contact";
import { Route, Routes } from "react-router";
// import { Courses } from "./forntend/courses/Courses";
import { Nopage } from "./forntend/noPage/Nopage";
import { Home } from "./forntend/home/Home";
import Registration from "./forntend/registration/Registration";

const Index = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/courses" element={<Courses />} /> */}
        <Route path="/Registration" element={<Registration />} />
        <Route path="/*" element={<Nopage />} />
      </Routes>
    </div>
  );
};

export default Index;
