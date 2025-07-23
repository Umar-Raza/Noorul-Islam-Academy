import React from "react";
import { Contact } from "./forntend/contact/contact";
import { Route, Routes } from "react-router";
// import { Courses } from "./forntend/courses/Courses";
import { Nopage } from "./forntend/noPage/Nopage";
import { Home } from "./forntend/home/Home";
import Registration from "./forntend/registration/Registration";
import {AdminDashboard} from "../pages/dashboard/admin/AdminDashboard"
const Index = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/courses" element={<Courses />} /> */}
        <Route path="/registration" element={<Registration />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/*" element={<Nopage />} />
      </Routes>
    </div>
  );
};

export default Index;
