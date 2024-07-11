import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
  return (
    <div className="relative mt-4">
      <input
        type="text"
        value="text"
        placeholder="Search by keyword or name..."
        className="w-full rounded-md px-2 border-gray-200 py-2.5 pe-10 outline-none shadow-sm sm:text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
      />

      <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
        <button
          type="button"
          className="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        >
          <BiSearchAlt2 />
        </button>
      </span>
    </div>
  );
};

export default SearchBar;
