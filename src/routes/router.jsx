import { createBrowserRouter, Navigate } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../Pages/Home";
import PageNotFound from "../Pages/PageNotFound";
import FindPartners from "../Pages/FindPartners";
import PartnerDetails from "../Pages/PartnerDetails";
import Login from "../Pages/Login";
import Auth from "../Pages/Auth"; 
import Register from "../Pages/Register";

import Connections from "../Pages/Connections";
import CreateProfile from "../Pages/CreateProfile";
import Profile from "../Pages/Profile"; 
import PrivateRoute from "../components/PrivateRoute";
import ForgotPassword from "../components/ForgetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "find-partners", element: <FindPartners /> },

      // Protected Routes
      { 
        path: "partner/:id", 
        element: (
          <PrivateRoute>
            <PartnerDetails />
          </PrivateRoute>
        ),
      },
      { 
        path: "connections", 
        element: (
          <PrivateRoute>
            <Connections />
          </PrivateRoute>
        ),
      },
      { 
        path: "create-profile", 
        element: (
          <PrivateRoute>
            <CreateProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      { index: true, element: <Navigate to="login" replace /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "forgot-password", element: <ForgotPassword /> }, 
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default router;

