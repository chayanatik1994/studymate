import { createBrowserRouter, Navigate } from "react-router";
import HomeLayout from "../layouts/Homelayout";
import Home from "../Pages/Home";
import PageNotFound from "../Pages/PageNotFound";
import FindPartners from "../Pages/FindPartners";
import PartnerDetails from "../Pages/PartnerDetails";
import Login from "../Pages/Login";

import Auth from "../Pages/Auth"; 
import Register from "../Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "find-partners", element: <FindPartners /> },
      { path: "partner/:id", element: <PartnerDetails /> },
    ],
  },
  {
    path: "/auth",
    element: <Auth />, 
    children: [
      { index: true, element: <Navigate to="login" replace /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register></Register> }

    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default router;
