"use client";
import { useMovieContext } from "@/context/MovieContext";
import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { SlRefresh } from "react-icons/sl";

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
  const [query, setQuery] = useState("");
  const { searchMovies, fetchRandomMovies } = useMovieContext();

  const handleSearch = () => {
    if (query.trim() !== "") {
      searchMovies(query);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim() !== "") {
      searchMovies(query);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleRefresh = () => {
    fetchRandomMovies();
  };

  return (
    <div className="relative mt-4">
      <>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          placeholder="Search by keyword or name.."
          className="w-[250px] rounded-md px-2 border-gray-200 py-2.5 pe-10 outline-none shadow-sm text-sm sm:text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        />

        <span className="absolute inset-y-0 end-10 grid w-10 place-content-center">
          <button
            type="button"
            onClick={handleSearch}
            className="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            <BiSearchAlt2 />
          </button>
        </span>
      </>
      <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
        <div className="sm:tooltip" data-tip="refresh">
          <SlRefresh
            onClick={handleRefresh}
            className="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 cursor-pointer"
          />
        </div>
      </span>
    </div>
  );
};

export default SearchBar;
