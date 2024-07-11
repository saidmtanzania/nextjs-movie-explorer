"use client";
import React from "react";
import MovieCard from "./MovieCard";
import { useMovieContext } from "../context/MovieContext";
import Loading from "./Loading";

const MovieList: React.FC = () => {
  const { state } = useMovieContext();
  const { randomMovies, loading, error } = state;
  return (
    <div className="mx-auto max-w-screen-lg px-3 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-8 md:grid-cols-3 xl:grid-cols-4">
      {loading && <Loading />}
      {error && <p>{error}</p>}
      <div className="mt-0 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5">
        {randomMovies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            title={movie.title}
            imageUrl={movie.imgPoster}
            imdb={movie.imdbID}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
