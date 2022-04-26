import { useState, useEffect } from "react";
import useDebounce from "../../hooks/useDebounce";

export default function Search({ setFilms }) {
  const [movieName, setMovieName] = useState("");
  const debouncedSearch = useDebounce(movieName, 300);

  useEffect(
    function () {
      async function fetchingData() {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=bfc609b0ab629bf60cda50625ad1fec4&language=en-US&page=1&include_adult=false&query=${debouncedSearch}`
        );
        const data = await response.json();
        setFilms(data.results);
      }

      async function fetchFirstPage() {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=bfc609b0ab629bf60cda50625ad1fec4`
        );
        const json = await response.json();
        setFilms(json.results);
      }

      if (debouncedSearch !== "") {
        fetchingData();
      } else {
        fetchFirstPage();
      }
    },
    [movieName, debouncedSearch, setFilms]
  );

  function searchMovie(e) {
    setMovieName(e.target.value);
  }

  return (
    <form className="d-flex mt-5">
      <input
        className="form-control me-2"
        onChange={searchMovie}
        type="text"
        placeholder="Search a movie"
        value={movieName}
      />
    </form>
  );
}
