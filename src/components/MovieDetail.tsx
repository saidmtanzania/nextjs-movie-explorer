"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useMovieContext } from "@/context/MovieContext";

interface Movie {
  title: string;
  imgPoster: string;
  description: string;
  genre: string[];
  ratingValue: any;
  ratingCount: number;
  actors: string[];
  director: string[];
  keywords: string;
}

interface MovieDetailProps {
  movie: Movie;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movie }) => {
  const { clearSelectedMovie } = useMovieContext();
  const handleBackClick = () => {
    clearSelectedMovie();
  };
  return (
    <section className="overflow-hidden items-center sm:grid sm:grid-cols-2 sm:items-center max-w-screen-lg sm:absolute sm:top-28">
      <Image
        width={386}
        height={580}
        src={movie.imgPoster}
        alt={movie.title}
        className="object-cover rounded-lg m-auto sm:m-0 sm:h-auto sm:max-h-[calc(100vh-2rem)] sm:rounded-md sm:justify-self-end"
        priority={true}
      />
      <div className="p-2 sm:p-8 flex flex-col justify-between">
        <div className="mx-auto max-w-xl text-left ltr:sm:text-left rtl:sm:text-right flex-grow">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
            {movie.title}
          </h2>

          <p className="hidden text-gray-500 md:mt-4 md:block dark:text-gray-400">
            {movie.description}
          </p>

          <div className="flex flex-wrap items-center space-x-4 mt-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Actors:
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              {movie.actors.join(", ")}
            </p>
          </div>

          <div className="flex flex-wrap items-center space-x-4 mt-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Genre:
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              {movie.genre.join(", ")}
            </p>
          </div>

          <div className="flex flex-wrap items-center space-x-4 mt-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Director:
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              {movie.director.join(", ")}
            </p>
          </div>

          <div className="flex flex-wrap items-center space-x-4 mt-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Rating:
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              {movie.ratingValue} ({movie.ratingCount} reviews)
            </p>
          </div>
          <div className="flex flex-wrap items-center space-x-4 mt-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Keywords:
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              {Array.isArray(movie.keywords)
                ? movie.keywords.join(", ")
                : movie.keywords}
            </p>
          </div>
        </div>

        <div className="mt-4 flex justify-between">
          <Link
            href="/"
            onClick={handleBackClick}
            className="inline-block rounded bg-gray-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-400"
          >
            Back
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MovieDetail;
