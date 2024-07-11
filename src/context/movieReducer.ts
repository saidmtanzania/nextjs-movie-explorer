// Define the shape of the movie state
export interface MovieState {
  randomMovies: any[]; // Array to store random movies
  selectedMovie: any | null; // Currently selected movie or null if none selected
  loading: boolean; // Flag to indicate if data is being loaded
  error: string | null; // Error message if any
}

// Define the initial state of the movie reducer
export const initialState: MovieState = {
  randomMovies: [], // Initialize random movies array as empty
  selectedMovie: null, // Initialize selected movie as null
  loading: false, // Set loading flag to false
  error: null, // Set error message to null
};
