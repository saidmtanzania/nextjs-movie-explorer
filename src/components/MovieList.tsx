"use client";
import React from "react";

const MovieList: React.FC = () => {
  return (
    <div className="mx-auto max-w-screen-lg px-3 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-8 md:grid-cols-3 xl:grid-cols-4">
      <div className="mt-0 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5"></div>
    </div>
  );
};

export default MovieList;
