import { Navigate } from "react-router";

export const ProtectedRouteForAdmin = ({ children }) => {
    const admin = JSON.parse(localStorage.getItem("admin"));
    if (admin?.user?.email === "noorulislamacademy@gmail.com") {
        return children;
    } else {
        return <Navigate to={"/adminLogin"} />;
    }
};