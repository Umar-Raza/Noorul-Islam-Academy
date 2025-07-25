import React from "react";
import { Contact } from "./forntend/contact/contact";
import { Navigate, Route, Routes } from "react-router";
// import { Courses } from "./forntend/courses/Courses";
import { NoPage } from "./forntend/noPage/Nopage";
import { Home } from "./forntend/home/Home";
import Registration from "./forntend/registration/Registration";
import { AdminDashboard } from "./dashboard/admindashboard/AdminDashboard"
import { AdminLogin } from "./dashboard/auth/AdminLogin";
import { ProtectedRouteForAdmin } from "./dashboard/auth/ProtectedRouteForAdmin";
const Index = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRouteForAdmin>
              <AdminDashboard />
            </ProtectedRouteForAdmin>
          }
        />
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </div>
  );
};

export default Index;

