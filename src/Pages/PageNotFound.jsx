import { Link } from "react-router";
import PageNotFoundImage from "../assets/PageNotFound.jpg";

const PageNotFound = () => {
  return (
     <section className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <img
        src={PageNotFoundImage}
          alt="Page not found illustration"
           className="w-full max-w-md mb-8 object-contain"
        loading="lazy"
      />
      <h1 className="text-3xl font-semibold text-gray-800 mb-3">
        404 — Page Not Found
      </h1>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        The page you’re looking for doesn’t exist or has been moved.  
          Please return to the home page.
      </p>
      <Link
        to="/"
          className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition-all duration-200"
      >
        Go Back Home
      </Link>
    </section>
  );
};

export default PageNotFound;
