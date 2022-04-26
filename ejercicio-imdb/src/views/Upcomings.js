import "./Upcomings.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Search from "../components/Search";
import Pagination from "@mui/material/Pagination";

export default function Upcomings() {
  const [films, setFilms] = useState([]);
  const [pages, setPages] = useState({
    current: 1,
    totalPages: null,
  });

  useEffect(() => {
    async function fetchFilms() {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=bfc609b0ab629bf60cda50625ad1fec4&page=${pages.current}`
      );
      let json = await res.json();
      setPages((pages) => ({ ...pages, totalPages: json.total_pages }));
      json = await json.results;
      setFilms(json);
    }
    fetchFilms();
  }, [pages.current]);

  function changePage(e, page) {
    setPages((pages) => ({ ...pages, current: page }));
  }

  if (!films) {
    return <h1>No hay nada que ver.</h1>;
  }

  return (
    <div className="row">
      <h1 className="text-center mt-4">Upcoming Movies</h1>
      <hr />
      <div className="d-flex justify-content-evenly mt-3">
        <Pagination
          onChange={changePage}
          page={pages.current}
          count={pages.totalPages}
          variant="outlined"
          shape="rounded"
        />
      </div>
      <Search setFilms={setFilms} />
      {films.map((film) => (
        <div
          className="card m-auto my-5 col-sm-6"
          style={{ width: "18rem" }}
          key={film.id}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
            className="card-img-top"
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">{film.original_title}</h5>
            <p className="card-text">{film.release_date}</p>
            <p className="cardtext">{film.overview}</p>
            <div className="d-flex justify-content-between">
              <Link to={`film/${film.id}`} className="btn btn-outline-success">
                Más información
              </Link>
            </div>
          </div>
        </div>
      ))}
      <div className="d-flex justify-content-evenly mt-3">
        <Pagination
          onChange={changePage}
          page={pages.current}
          count={pages.totalPages}
          variant="outlined"
          shape="rounded"
        />
      </div>
    </div>
  );
}
