// Define the shape of the movie state
export interface MovieState {
  randomMovies: any[]; // Array to store random movies
  selectedMovie: any | null; // Currently selected movie or null if none selected
  loading: boolean; // Flag to indicate if data is being loaded
  error: string | null; // Error message if any
}
