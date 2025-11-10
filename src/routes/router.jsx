import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/Homelayout";
import Home from "../Pages/Home";
import PageNotFound from "../Pages/PageNotFound";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children : [
        { path: "/", element: <Home /> }
    ]
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
    element: <PageNotFound></PageNotFound>,
  },
]);

export default router;
