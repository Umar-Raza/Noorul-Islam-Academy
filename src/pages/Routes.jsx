import React from "react";
import {  Route, Routes } from "react-router";
// import { Courses } from "./forntend/courses/Courses";
import { NoPage } from "./forntend/noPage/Nopage";
import { Home } from "./forntend/home/Home";
import Registration from "./forntend/registration/Registration";
import { AdminDashboard } from "./dashboard/admindashboard/AdminDashboard"
import { AdminLogin } from "./dashboard/auth/AdminLogin";
import { ProtectedRouteForAdmin } from "./dashboard/auth/ProtectedRouteForAdmin";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import whatsappAvatar from "../assets/whatsappAvatar.jpg"
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
      <FloatingWhatsApp
        phoneNumber="+923187001026"
        accountName="Noor ul Islam Quran Academy"
        avatar={whatsappAvatar}
        allowEsc
        allowClickAway
        chatboxHeight={360}
        notification
        notificationSound
        chatMessage="Salam, How are you?"
      />
    </div>
  );
};

export default Index;

