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

// Define the possible actions that can be dispatched
type Action =
  | { type: "FETCH_RANDOM_MOVIES_REQUEST" } // Action to request fetching random movies
  | { type: "FETCH_RANDOM_MOVIES_SUCCESS"; payload: any[] } // Action when fetching random movies is successful
  | { type: "FETCH_RANDOM_MOVIES_FAILURE"; payload: string } // Action when fetching random movies fails
  | { type: "FETCH_MOVIE_REQUEST" } // Action to request fetching a specific movie
  | { type: "FETCH_MOVIE_SUCCESS"; payload: any } // Action when fetching a specific movie is successful
  | { type: "FETCH_MOVIE_FAILURE"; payload: string } // Action when fetching a specific movie fails
  | { type: "SEARCH_MOVIES_REQUEST" } // Action to request searching movies
  | { type: "SEARCH_MOVIES_SUCCESS"; payload: any[] } // Action when searching movies is successful
  | { type: "SEARCH_MOVIES_FAILURE"; payload: string } // Action when searching movies fails
  | { type: "CLEAR_SELECTED_MOVIE" }; // Action to clear the selected movie
