import { Link } from "react-router-dom";
import LikeButton from "../LikeButton";
import { movieType } from "../../types";
import { baseImgUrl } from "../../constants";

type CardProps = {
  movie: movieType;
};

const Card = ({ movie }: CardProps) => {
  return (
    <div className="max-w-64 cursor-pointer hover:scale-105 transition-transform p-2">
      <Link to={`/details/${movie.id}`}>
        <img
          className="max-w-64 rounded-md object-contain"
          src={baseImgUrl + movie.poster_path}
        />
      </Link>

      <div className="flex items-center justify-between">
        <Link to={`/details/${movie.id}`}>
          <h2 className="font-semibold text-white">{movie.original_title}</h2>
        </Link>
        <LikeButton id={movie.id} />
      </div>
    </div>
  );
};

export default Card;
