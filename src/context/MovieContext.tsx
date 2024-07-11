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
