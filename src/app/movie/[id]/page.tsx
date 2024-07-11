/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Loading from "@/components/Loading";
import MovieDetail from "@/components/MovieDetail";
import { useMovieContext } from "@/context/MovieContext";
import { useEffect } from "react";

const MoviePage = ({ params }: any) => {
  const { state, fetchMovieById } = useMovieContext();
  const { selectedMovie, loading, error } = state;

  useEffect(() => {
    if (params.id) {
      fetchMovieById(params.id as string);
    }
  }, [params.id]);

  console.log(selectedMovie);
  return (
    <>
      <div className="hero-content text-center m-auto">
        <div className="max-w-md">
          {loading && <Loading />}
          {error && <p>{error}</p>}
        </div>
      </div>
      {selectedMovie && <MovieDetail movie={selectedMovie} />}
    </>
  );
};

export default MoviePage;
