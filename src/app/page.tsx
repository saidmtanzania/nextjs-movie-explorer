import MovieList from "@/components/MovieList";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <>
      <div className="max-w-md text-center">
        <h1 className="text-5xl font-bold">Movie Explorer</h1>
        <p className="pt-1">Welcome🤗</p>
        <SearchBar />
      </div>
      <MovieList />
    </>
  );
}
