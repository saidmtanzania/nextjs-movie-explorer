"use client";
import React, { createContext, useReducer, useEffect, useContext } from "react";
import {
  fetchRandomMovies as fetchRandomMoviesAPI,
  fetchMovieDetails as fetchMovieByIdAPI,
  searchMovies as searchMoviesAPI,
} from "../utils/api";
import movieReducer, { MovieState, initialState } from "./movieReducer";

// Define the shape of the MovieContext
interface MovieContextProps {
  state: MovieState;
  fetchRandomMovies: () => void;
  fetchMovieById: (id: string) => void;
  searchMovies: (query: string) => void;
  clearSelectedMovie: () => void;
}

// Create the MovieContext with initial values
const MovieContext = createContext<MovieContextProps>({
  state: initialState,
  fetchRandomMovies: () => {},
  fetchMovieById: () => {},
  searchMovies: () => {},
  clearSelectedMovie: () => {},
});

// Custom hook to access the MovieContext
export const useMovieContext = () => useContext(MovieContext);

// MovieProvider component that wraps the children components
export const MovieProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Use the movieReducer to manage the state
  const [state, dispatch] = useReducer(movieReducer, initialState);

  // Function to fetch random movies
  const fetchRandomMovies = async () => {
    try {
      dispatch({ type: "FETCH_RANDOM_MOVIES_REQUEST" });
      const data = await fetchRandomMoviesAPI();
      dispatch({ type: "FETCH_RANDOM_MOVIES_SUCCESS", payload: data });
    } catch (error: any) {
      dispatch({ type: "FETCH_RANDOM_MOVIES_FAILURE", payload: error.message });
    }
  };

  // Function to fetch movie by ID
  const fetchMovieById = async (id: string) => {
    try {
      dispatch({ type: "FETCH_MOVIE_REQUEST" });
      const data = await fetchMovieByIdAPI(id);
      dispatch({ type: "FETCH_MOVIE_SUCCESS", payload: data });
    } catch (error: any) {
      dispatch({ type: "FETCH_MOVIE_FAILURE", payload: error.message });
    }
  };

  // Function to search movies
  const searchMovies = async (query: string) => {
    try {
      dispatch({ type: "SEARCH_MOVIES_REQUEST" });
      const data = await searchMoviesAPI(query);
      dispatch({ type: "SEARCH_MOVIES_SUCCESS", payload: data });
    } catch (error: any) {
      dispatch({ type: "SEARCH_MOVIES_FAILURE", payload: error.message });
    }
  };

  // Function to clear the selected movie
  const clearSelectedMovie = () => {
    dispatch({ type: "CLEAR_SELECTED_MOVIE" });
  };

  // Fetch random movies on component mount
  useEffect(() => {
    fetchRandomMovies();
  }, []);

  // Provide the MovieContext value to the children components
  return (
    <MovieContext.Provider
      value={{
        state,
        fetchRandomMovies,
        fetchMovieById,
        searchMovies,
        clearSelectedMovie,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
