//NOTE: I didnt use .env file for this URL because it is a public API

// Define the types for movie actors and directors
type MovieActor = {
  name: string;
  url: string;
};

type MovieDirector = {
  name: string;
  url: string;
};

// Define the type for movie details
type MovieDetails = {
  title: string;
  imgPoster: string;
  description: string;
  genre: string[];
  ratingValue: any;
  ratingCount: number;
  actors: string[];
  director: string[];
  keywords: string;
};

// Function to fetch random movies
export const fetchRandomMovies = async () => {
  // Manually generate a random movie since the API doesn't have an endpoint for that
  const randomMovies = [
    "Avengers: Endgame",
    "The Dark Knight",
    "Inception",
    "Pulp Fiction",
    "Fight Club",
    "The Shawshank Redemption",
    "The Godfather",
    "Interstellar",
    "The Matrix",
    "Goodfellas",
    "Spider",
    "Rick and morty",
    "Titanic",
  ];

  // Generate a random index to select a random movie from the array
  const randomIndex = Math.floor(Math.random() * randomMovies.length);
  const randomMovie = randomMovies[randomIndex];

  // Fetch data from the API using the random movie as the query parameter
  const response = await fetch(
    `https://search.imdbot.workers.dev/?q=${randomMovie}`
  );

  // Check if the response is successful
  if (!response.ok) {
    throw new Error("Failed to fetch random movies");
  }

  // Parse the response data as JSON
  const data = await response.json();

  // Extract the relevant movie details from the response data
  const movies =
    data.description?.map((movie: any) => ({
      title: movie["#TITLE"],
      imdbID: movie["#IMDB_ID"],
      imgPoster: movie["#IMG_POSTER"],
    })) ?? [];

  // Return the first 10 movies
  return movies.slice(0, 10);
};

// Function to search movies based on a query
export const searchMovies = async (query: string) => {
  // Fetch data from the API using the query as the search parameter
  const response = await fetch(`https://search.imdbot.workers.dev/?q=${query}`);

  // Check if the response is successful
  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }

  // Parse the response data as JSON
  const data = await response.json();

  // Extract the relevant movie details from the response data
  const movies =
    data.description?.map((movie: any) => ({
      title: movie["#TITLE"],
      imdbID: movie["#IMDB_ID"],
      imgPoster: movie["#IMG_POSTER"],
    })) ?? [];

  // Return the first 10 movies
  return movies.slice(0, 10);
};
