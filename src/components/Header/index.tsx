import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-gray-800 border-b-4  border-gray-600 text-red-600 flex justify-between p-5 px-20">
      <Link
        className="text-2xl font-bold hover:scale-105 transition-transform"
        to="/"
      >
        <div className="bg-amber-400 p-2 rounded-md">
          <span className="text-black">IMDb</span>
        </div>
      </Link>

      <Link
        className="flex items-center gap-3 font-semibold text-3xl hover:scale-110 transition-transform "
        to="/favoriteMovies"
      >
        <FaHeart />
      </Link>
    </header>
  );
};

export default Header;
