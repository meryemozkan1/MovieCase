import MovieList from "../../components/MovieList";

const Home = () => {
  return (
    <div className="flex flex-col gap-20 text-white">
      <MovieList title="Trending" endpoint="/trending/movie/day" />

      <MovieList title="Populars" endpoint="/movie/popular" />

      <MovieList title="Top Rated" endpoint="movie/top_rated" />
    </div>
  );
};

export default Home;
