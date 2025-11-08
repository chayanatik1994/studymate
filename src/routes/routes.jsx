import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h2>Home Layout</h2>,
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
