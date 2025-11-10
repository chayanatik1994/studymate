import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/Homelayout";
import Home from "../Pages/Home";
import PageNotFound from "../Pages/PageNotFound";
import FindPartners from "../Pages/FindPartners";
import PartnerDetails from "../Pages/PartnerDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/find-partners", element: <FindPartners /> },
      { path: "/partner/:id", element: <PartnerDetails /> }
    ]
  },
  {
    path: "/auth",
    element: <h2>Authentication Layout</h2>,
  },
  {
    path: "/*",
    element: <PageNotFound />,
  },
]);

export default router;
