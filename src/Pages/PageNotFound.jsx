import { Link } from "react-router";
import PageNot from "../assets/PageNot.jpg";

const PageNotFound = () => {
  return (
    <section
      className="flex flex-col justify-between items-center min-h-screen px-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${PageNot})` }}
    >
      <div></div>
      <Link
        to="/"
        className="mb-12 bg-purple-600 text-white text-xl px-10 py-4 rounded-lg shadow-lg hover:bg-purple-700 transition-all duration-200"
      >
        Go Back Home
      </Link>
    </section>
  );
};

export default PageNotFound;
