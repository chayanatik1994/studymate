import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/Homelayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "/auth",
    element: <h2>Authentication Layout</h2>,
  },
  {
    path: "/find-partners",
    element: <h2>Find Partners Layout</h2>,
  },
  {
    path: "/*",
    element: <h2>Error 404 - Page Not Found</h2>,
  },
]);

export default router;
