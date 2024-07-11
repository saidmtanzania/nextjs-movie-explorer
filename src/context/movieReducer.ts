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

// Define the movie reducer function
const movieReducer = (state: MovieState, action: Action): MovieState => {
  switch (action.type) {
    case "FETCH_RANDOM_MOVIES_REQUEST":
    case "FETCH_MOVIE_REQUEST":
    case "SEARCH_MOVIES_REQUEST":
      // When requesting to fetch random movies, a specific movie, or searching movies,
      // set loading flag to true and clear any previous error
      return { ...state, loading: true, error: null };
    case "FETCH_RANDOM_MOVIES_SUCCESS":
      // When fetching random movies is successful,
      // set loading flag to false and update the randomMovies array with the payload
      return { ...state, loading: false, randomMovies: action.payload };
    case "FETCH_RANDOM_MOVIES_FAILURE":
    case "FETCH_MOVIE_FAILURE":
    case "SEARCH_MOVIES_FAILURE":
      // When fetching random movies, a specific movie, or searching movies fails,
      // set loading flag to false and update the error message with the payload
      return { ...state, loading: false, error: action.payload };
    case "FETCH_MOVIE_SUCCESS":
      // When fetching a specific movie is successful,
      // set loading flag to false and update the selectedMovie with the payload
      return { ...state, loading: false, selectedMovie: action.payload };
    case "SEARCH_MOVIES_SUCCESS":
      // When searching movies is successful,
      // set loading flag to false and update the randomMovies array with the payload
      return { ...state, loading: false, randomMovies: action.payload };
    case "CLEAR_SELECTED_MOVIE":
      // When clearing the selected movie,
      // set selectedMovie to null
      return { ...state, selectedMovie: null };
    default:
      // For any other action, return the current state
      return state;
  }
};

export default movieReducer;
