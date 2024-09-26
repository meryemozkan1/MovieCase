import { useGetMoviesQuery } from "../../redux/api";
import Card from "../MovieCard";
import Error from "../Error";
import Loader from "../LoaderAnimation";
import { movieType } from "../../types";
import Title from "../Title";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

type PropsType = {
  endpoint: string;
  title: string;
};

const MovieList = ({ endpoint, title }: PropsType) => {
  const { data, isLoading, error } = useGetMoviesQuery(endpoint);

  return (
    <div>
      <Title>{title}</Title>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error data={error} />
      ) : (
        data && (
          <div>
            <Splide
              options={{ gap: "15px", autoWidth: true, pagination:false}}
            >
              {data.results.map((movie: movieType, key: number) => (
                <SplideSlide>
                  <Card movie={movie} key={key} />
                </SplideSlide>
              ))}
            </Splide>
          </div>
        )
      )}
    </div>
  );
};

export default MovieList;
